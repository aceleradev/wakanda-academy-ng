import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from './skill-lesson.service';

@Injectable({
  providedIn: 'root'
})
export class SkillActionService {
  mostra:boolean = false;
  private show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  show$ = this.show.asObservable();
  private skill: BehaviorSubject<Skill> = new BehaviorSubject<Skill>(null);
  Skill$ = this.skill.asObservable();

  constructor(private skillLessonService:SkillLessonService) { }

  changeDisplay(show:boolean) {
    this.show.next(show);
    this.mostra = true
  }

  setSkill(skill:Skill) {
    this.skill.next(skill)
  }
  
  proximaAula(wk:string,l:string) {
    let lesson;
    this.skillLessonService.getNextLesson(wk,l).subscribe(res=> {lesson=res});
    let skill:Skill = null;
    this.skill.subscribe(skillRecebido => skill = skillRecebido);
    const newlesson = skill.wakanderTribeSkillLessons.find(lesson.lessonCode);
    this.skillLessonService.changeCurrentLesson(newlesson);
  }
}
