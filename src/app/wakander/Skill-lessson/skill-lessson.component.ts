import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from '../service/actions/skill-lesson.service';
import { SkillActionService } from '../service/actions/skill-action.service';
import { LoadingService } from 'src/app/compartilhado/service/loading/loading.service';
import { Loading } from 'src/app/compartilhado/loading/loading/loading.enum';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { LessonDTO } from 'src/app/compartilhado/interface/lessonDTO';
import { StatusService } from 'src/app/compartilhado/service/status/status.service';
import { status } from 'src/app/compartilhado/interface/status.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill-lesson',
  templateUrl: './skill-lesson.component.html',
  styleUrls: ['./skill-lesson.component.css']
})
export class SkillLessonComponent implements OnInit, OnChanges, OnDestroy {
  lesson: Lesson;
  skill: Skill;
  @Input() url: string;
  loader: Loading;
  breadCrumbs: string = "";
  private subs: Subscription = new Subscription();

  constructor(
    private skillLessonService: SkillLessonService,
    private skillActionService: SkillActionService,
    private loadService: LoadingService,
    private router: Router,
    private statusService: StatusService) { }
    

  ngOnInit(): void {
    this.subs.add(
      this.skillLessonService.lesson$.subscribe(aula => {
        this.lesson = aula
        console.log("Skill-lesson aula:" + aula);
      })
    );
    this.subs.add(
      this.skillLessonService.code$.subscribe(code => {
        this.url = code;
        console.log(this.url);
      })
    );
    this.subs.add(
      this.skillActionService.Skill$.subscribe(skill => {
        this.skill = skill
        console.log("Skill-lesson skill:" + skill);
      })
    );

    this.subs.add(this.skillActionService.getBreadCrumbs().subscribe(res => {
      this.breadCrumbs = res;
      })
    );

    this.loadService.getLoading()
      .subscribe(loading => {
        this.loader = loading;
        console.log(this.loader);
      });

    this.isSkillDone();

  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.acessar;
    //this.skillLessonService.lesson$.subscribe(aula => this.lesson = aula);
  }

  onclikAcessar() {
    console.log(this.statusService.isDoing(this.lesson) || this.statusService.isDone(this.lesson));
    if (!this.statusService.isTodo(this.lesson)) {
      this.subs.add(
        this.skillLessonService.acessarLesson(this.url).subscribe(res => {
          if (res.status == 200) {
            window.open(this.lesson.link, '_blank');
            this.lesson.status = status.DONE;
            this.isSkillDone();
          }
        }, err => {
          console.log(err);
          alert("desculpe, houve um erro ao carregar a proxima aula.");
          this.router.navigateByUrl("");
        })
      );
    } else {
      alert("Você ainda não tem acesso a essa aula!");
    }
  }

  onclickProxima() {
    console.log(this.statusService.isDone(this.lesson));
    if (this.statusService.isDone(this.lesson)) {
      let code = this.url.split("/");
      let wkCode = code[0];
      this.subs.add(
        this.skillLessonService.getNextLesson(wkCode, this.lesson.lessonCode).subscribe((res) => {
          const aulaDTO: LessonDTO = res.body;
          console.log(aulaDTO);
          const lessonArry: Lesson[] = this.skill.wakanderTribeSkillLessons;
          lessonArry.forEach((lesson) => {
            if (lesson.lessonCode == aulaDTO.lessonCode) {
              if (!this.statusService.isDone(lesson)) {
                lesson.status = status.DOING;
              }
              this.skillLessonService.changeCurrentLesson(lesson);
            }
          });
        }, err => {
          console.log(err);
          alert("desculpe, houve um erro ao carregar a proxima aula.");
          this.router.navigateByUrl("");
        })
      );
    } else {
      alert("Acesse o conteudo da aula para continuar");
    }

  }

  private isSkillDone() {
    if (this.skill.wakanderTribeSkillLessons.every((lesson) => {
      return this.statusService.isDone(lesson);
    }))
      this.skill.skillStatus = status.DONE;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
