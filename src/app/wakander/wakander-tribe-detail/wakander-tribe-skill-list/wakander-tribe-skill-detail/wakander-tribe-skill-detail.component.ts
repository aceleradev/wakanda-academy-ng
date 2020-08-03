import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { StatusService } from 'src/app/compartilhado/service/status/status.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wakander-tribe-skill-detail',
  templateUrl: './wakander-tribe-skill-detail.component.html',
  styleUrls: ['./wakander-tribe-skill-detail.component.css']
})
export class WakanderTribeSkillDetailComponent implements OnInit {

  @Input() skill: Skill;
  private skill$: BehaviorSubject<Skill> = new BehaviorSubject<Skill>(null);
  getSkill = this.skill$.asObservable();
  @Input() code: string;

  constructor(private status:StatusService) { }

  ngOnInit() {
    this.skill$.next(this.skill);
    this.code = this.skill.skillCode;
    console.log((this.skill.skillStatus||'').toString());
  }
  
  color() {
    return this.status.checkStatus(this.skill.skillStatus);
  }
}
