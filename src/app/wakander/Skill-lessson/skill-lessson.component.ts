import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from '../service/actions/skill-lesson.service';
import { SkillActionService } from '../service/actions/skill-action.service';
import { LoadingService } from 'src/app/compartilhado/service/loading/loading.service';
import { Loading } from 'src/app/compartilhado/loading/loading/loading.enum';

@Component({
  selector: 'app-skill-lesson',
  templateUrl: './skill-lesson.component.html',
  styleUrls: ['./skill-lesson.component.css']
})
export class SkillLessonComponent implements OnInit, OnChanges {
  @Input() lesson: Lesson;
  @Input() url: string;
  loader: Loading;
  proxima: boolean = false;
  spin:boolean = true;

  constructor(
    private skillLessonService:SkillLessonService,
    private skillActionService:SkillActionService,
    private loadService: LoadingService) { }

    
    ngOnInit(): void {
      this.skillLessonService.lesson$.subscribe(aula => this.lesson = aula);
      this.skillLessonService.code$.subscribe(code => {
        this.url = code;
        console.log(this.url);
      });

      this.loadService.getLoading()
        .subscribe(loading => {
          this.loader = loading;
          console.log(this.loader);
        });
      
    }
    
    ngOnChanges(changes: SimpleChanges): void {
      changes.acessar;
      //this.skillLessonService.lesson$.subscribe(aula => this.lesson = aula);
    }
  onclikAcessar(){
    //this.acessar = !this.acessar;
    this.skillLessonService.acessarLesson(this.url).subscribe(res => {
      this.spin=false;
      if(res.status == 200) {
        window.open(this.lesson.link, '_blank');
        this.spin=true;
      } else {
        alert("Houve um erro ao carregar a aula, tente novamente.");
        this.spin=true;
      }
    })
   }

   onclickProxima(){
   this.proxima = !this.proxima;
   let code = this.url.split("/");
   let wkCode = code[0];
   this.skillActionService.proximaAula(wkCode,this.lesson.lessonCode);
  }

}
