import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from 'src/app/wakander/service/actions/skill-lesson.service';
import { SkillActionService } from 'src/app/wakander/service/actions/skill-action.service';
import { ActivatedRoute } from '@angular/router';
import { StatusColorService } from 'src/app/compartilhado/service/status-color/status-color.service';
import { Skill } from 'src/app/compartilhado/interface/skill';

@Component({
  selector: 'app-wakander-tribe-skill-lesson',
  templateUrl: './wakander-lesson.component.html'
})
export class WakanderTribeSkillLessonComponent implements OnInit {

  @Input() skill: Skill;
  @Input() lesson: Lesson;

  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService: SkillActionService,
    private snap: ActivatedRoute,
    private statusService:StatusColorService) { }

  ngOnInit() {
    console.log("lesson: " + this.lesson.lessonCode)
  }

  callSkillLessonComp() {
    const wk = this.snap.snapshot.params.wkCode;
    const tribe = this.snap.snapshot.params.code;
    console.log("tribe? " + tribe);
    console.log("lesson? " + this.lesson.status);
    
    this.skillActionService.setSkill(this.skill);
    this.skillLessonService.changeCurrentLesson(this.lesson);
    this.skillLessonService.buildURL(wk,tribe, this.skill.skillCode, this.lesson.lessonCode);
    this.skillActionService.changeDisplay(true);
  }

  color() {
    return this.statusService.checkStatus(this.lesson.status);
  }

}
