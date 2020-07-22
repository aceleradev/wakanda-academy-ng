import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from '../service/actions/skill-lesson.service';
import { SkillActionService } from '../service/actions/skill-action.service';

@Component({
  selector: 'app-skill-lesson',
  templateUrl: './skill-lesson.component.html',
  styleUrls: ['./skill-lesson.component.css']
})
export class SkillLessonComponent implements OnInit, OnChanges {
  @Input() lesson: Lesson;
  @Input() url: string;
  acessar: boolean = false;
  proxima: boolean = false;
  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService:SkillActionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    changes.acessar;
    //this.skillLessonService.lesson$.subscribe(aula => this.lesson = aula);
  }

  ngOnInit(): void {
    this.skillLessonService.lesson$.subscribe(aula => this.lesson = aula);
    this.skillLessonService.code$.subscribe(code => {
      this.url = code;
      console.log(this.url);
      
    });
  }

  onclikAcessar(){
    this.acessar = !this.acessar;
    this.skillLessonService.acessarLesson(this.url).subscribe(res => {
      if(res.status == 200)
        window.open(this.lesson.url, '_blank');
    })
   }

   onclickProxima(){
   this.proxima = !this.proxima;
  }

}
