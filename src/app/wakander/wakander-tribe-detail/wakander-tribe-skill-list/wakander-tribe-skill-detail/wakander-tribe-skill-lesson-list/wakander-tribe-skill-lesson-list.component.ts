import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';

@Component({
  selector: 'app-wakander-tribe-skill-lesson-list',
  templateUrl: './wakander-tribe-skill-lesson-list.component.html'
})
export class WakanderTribeSkillLessonListComponent implements OnInit {

@Input() lessons: Lesson[];
@Input() code: string;

  constructor() { }

  ngOnInit() {
    console.log(this.lessons);
  }

}
