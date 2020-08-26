import { Component, OnInit } from '@angular/core';
import { SkillLessonService } from 'src/app/wakander/service/actions/skill-lesson.service';
import { SkillActionService } from 'src/app/wakander/service/actions/skill-action.service';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService: SkillActionService,
    private ngModalConfig: NgbModalConfig) { }

  ngOnInit() {
    this.ngModalConfig.keyboard = false;
    this.ngModalConfig.backdrop = 'static';
    this.skillLessonService.changeCurrentLesson(null);
    this.skillActionService.buildBreadCrumbs("");
  }

}
