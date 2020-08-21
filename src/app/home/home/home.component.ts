import { Component, OnInit } from '@angular/core';
import { SkillLessonService } from 'src/app/wakander/service/actions/skill-lesson.service';
import { SkillActionService } from 'src/app/wakander/service/actions/skill-action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService: SkillActionService) { }

  ngOnInit() {
    this.skillLessonService.changeCurrentLesson(null);
    this.skillActionService.buildBreadCrumbs("");
  }

}
