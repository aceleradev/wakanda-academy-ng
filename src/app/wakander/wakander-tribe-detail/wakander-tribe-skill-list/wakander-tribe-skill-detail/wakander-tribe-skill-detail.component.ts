import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { StatusColorService } from 'src/app/compartilhado/service/status-color/status-color.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wakander-tribe-skill-detail',
  templateUrl: './wakander-tribe-skill-detail.component.html',
  styleUrls: ['./wakander-tribe-skill-detail.component.css']
})
export class WakanderTribeSkillDetailComponent implements OnInit {

  @Input() skill: Skill;
  skill$: BehaviorSubject<Skill> = new BehaviorSubject<Skill>(null);
  @Input() code: string;

  constructor(private status:StatusColorService) { }

  ngOnInit() {
    this.skill$.next(this.skill);
    this.code = this.skill.code;
    console.log(this.skill.status.toString());
  }
  
  color() {
    return this.status.checkStatus(this.skill.status);
  }
}
