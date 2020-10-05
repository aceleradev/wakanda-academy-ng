import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { StatusService } from 'src/app/compartilhado/service/status/status.service';
import { BehaviorSubject } from 'rxjs';
import { status } from 'src/app/compartilhado/interface/status.enum';

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

  constructor(private statusService:StatusService) { }

  ngOnInit() {
    this.isSkillDone();
    this.skill$.next(this.skill);
    this.code = this.skill.skillCode;
    console.log((this.skill.skillStatus||'').toString());
  }
  
  color() {
    return this.statusService.checkStatus(this.skill.skillStatus);
  }

  private isSkillDone() {
    if (this.skill.wakanderTribeSkillLessons.every((lesson) => {
      return this.statusService.isDone(lesson);
    }))
      this.skill.skillStatus = status.DONE;
  }
}
