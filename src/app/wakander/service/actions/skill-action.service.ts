import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { SkillLessonService } from './skill-lesson.service';

@Injectable({
  providedIn: 'root'
})
export class SkillActionService {
  private skillArray: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>(null);
  SkillArray$ = this.skillArray.asObservable();
  private skill: BehaviorSubject<Skill> = new BehaviorSubject<Skill>(null);
  Skill$ = this.skill.asObservable();

  constructor(private skillLessonService:SkillLessonService) { }

  setSkill(skill:Skill) {
    this.skill.next(skill)
  }

  setSkillArray(skills: Skill[]) {
    this.skillArray.next(skills);
  }
  
}
