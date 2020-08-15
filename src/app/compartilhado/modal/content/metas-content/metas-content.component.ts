import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { WakandaTribeslistService } from 'src/app/home/services/wakanda-tribeslist.service';
import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { User } from 'src/app/compartilhado/interface/user';
import { WakandaTribeHome } from 'src/app/compartilhado/interface/wakanda-tribe-home';
import { WakanderTribeGoalDTO } from 'src/app/compartilhado/interface/wakander-tribe-dto';
import { WakanderGoal } from 'src/app/compartilhado/interface/wakander-goal';
import { MetasService } from 'src/app/compartilhado/service/metas/metas.service';

@Component({
  selector: 'app-metas-content',
  templateUrl: './metas-content.component.html',
  styleUrls: ['./metas-content.component.css']
})
export class MetasContentComponent implements OnInit, OnDestroy {
  @Input() name;
  metasForm: FormGroup;
  private user: User;
  private wktribes: WakandaTribeHome[];
  private wktribesNames: string[] = [];
  private metas: WakanderGoal;
  private subs: Subscription = new Subscription();


  constructor(
    private formbuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private wakanderTribeListService: WakandaTribeslistService,
    private userService: UserService,
    private metasService: MetasService
  ) { }

  ngOnInit() {
    this.subs.add(
      this.userService.getUser().subscribe((user) => {
        this.user = user;
        this.subs.add(
          this.wakanderTribeListService.getTribos(this.user.wakanderCode).subscribe(wktribes => {
            this.wktribes = wktribes
            this.wktribes.forEach(wktribe => {
              this.wktribesNames.push(wktribe.name);
            })
          })
        );
      })
    );

    this.subs.add(
      this.metasService.getMetas().subscribe((metas) => {
        this.metas = metas
      })
    );
    this.metasForm = this.formbuilder.group({
      metaHoras: [this.metas.weeklyGoalStudyHours,
      [
        Validators.required
      ]
      ],
      metaJornada: [this.metas.nextTribeGoal.name,
      [
        Validators.required
      ]
      ]
    });
  }


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.wktribesNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  submit() {
    const rawValues = this.metasForm.value;
    const tribe = this.wktribes.find(x => x.name === rawValues.metaJornada);
    const tribeGoal: WakanderTribeGoalDTO = { name: tribe.name, tribeCode: tribe.tribeCode }
    const wkGoal: WakanderGoal = { weeklyGoalStudyHours: rawValues.metaHoras, nextTribeGoal: tribeGoal };
    this.metasService.enviarMetas(this.user.wakanderCode, wkGoal).subscribe(res => { console.log(res.statusText) });
    this.metasService.setMeta(wkGoal);
    this.activeModal.close();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
