import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { WakandaTribeslistService } from '../services/wakanda-tribeslist.service';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';
import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { User } from 'src/app/compartilhado/interface/user';
import { WakandaTribeHome } from 'src/app/compartilhado/interface/wakanda-tribe-home';
import { MetasService } from 'src/app/compartilhado/service/metas/metas.service';
import { MetasComponent } from 'src/app/compartilhado/modal/metas/metas.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetasContentComponent } from 'src/app/compartilhado/modal/content/metas-content/metas-content.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wakanda-tribeslist',
  templateUrl: './wakanda-tribeslist.component.html',
  styleUrls: ['./wakanda-tribeslist.component.css']
})
export class WakandaTribeslistComponent implements OnInit {
  @Input() tribes: WakandaTribeHome[] = [];
  rows: any[] = [];
  user: User;
  wkCode: string;
  numeral: string;


  constructor(
    private wakandaTribesListService: WakandaTribeslistService,
    private userService: UserService,
    private metasService: MetasService,
    private modalService: NgbModal) { }

  ngOnInit() {

    this.userService
      .getUser()
      .subscribe(user => {
        this.user = user
        this.metasService.getMetas(user.wakanderCode).subscribe(res => {
          console.log("A API retornou a meta: " + res);
          if (res.body != null) {
            this.metasService.setMeta(res.body);
          }
        }, (err:HttpErrorResponse) => {
          console.log("erro get metas: " + err.message)
          if (err.status == 404) {
            console.log(err);
            this.modalService.open(MetasContentComponent)
          } else {
            this.metasService.getterMetas().subscribe(metas => {
              if (metas.weeklyGoalStudyHours === 0)
                this.modalService.open(MetasContentComponent)
            })
          }
        });
      });

    this.wkCode = this.user.wakanderCode

    this.wakandaTribesListService
      .getTribos(this.user.wakanderCode)
      .subscribe(tribes => {
        console.log(tribes);
        this.tribes = tribes

        this.rows = this.groupColumns(tribes);
      });

  }

  groupNumer(numeral) {
    for (let i = 0; i < this.tribes.length; i++) {
      numeral = i
    }
    console.log("groupNumer");
    console.log(numeral);
    return numeral;

  }

  groupColumns(tribes: WakandaTribeHome[]) {
    const newRows = [];
    const tribesPerRow = 2;

    for (let index = 0; index < tribes.length; index += tribesPerRow) {
      newRows.push(tribes.slice(index, index + tribesPerRow));
    }
    console.log(newRows);
    return newRows;
  }

}
