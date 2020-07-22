import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from 'src/app/wakander/service/actions/skill-lesson.service';
import { SkillActionService } from 'src/app/wakander/service/actions/skill-action.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wakander-tribe-skill-lesson',
  templateUrl: './wakander-lesson.component.html'
})
export class WakanderTribeSkillLessonComponent implements OnInit {

  @Input() lesson: Lesson;
  @Input() code: string;

  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService: SkillActionService,
    private snap: ActivatedRoute) { }

  ngOnInit() {
    console.log("lesson: " + this.code)
  }

  callSkillLessonComp() {
    const wk = this.snap.snapshot.params.wkCode;
    const tribe = this.snap.snapshot.params.code;
    console.log("tribe? " + tribe);
    
    this.skillLessonService.changeCurrentLesson(this.lesson);
    this.skillLessonService.buildURL(wk,tribe,this.code,this.lesson.lessonCode);
    this.skillActionService.changeDisplay(true);
  }

}
