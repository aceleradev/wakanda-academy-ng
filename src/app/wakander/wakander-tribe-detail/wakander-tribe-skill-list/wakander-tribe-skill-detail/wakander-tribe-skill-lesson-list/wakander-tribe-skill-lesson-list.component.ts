import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { Skill } from 'src/app/compartilhado/interface/skill';

@Component({
  selector: 'app-wakander-tribe-skill-lesson-list',
  templateUrl: './wakander-tribe-skill-lesson-list.component.html'
})
export class WakanderTribeSkillLessonListComponent implements OnInit {

@Input() skill: Skill;

  constructor() { }

  ngOnInit() {
    console.log(this.skill.wakanderTribeSkillLessons);
  }

}
