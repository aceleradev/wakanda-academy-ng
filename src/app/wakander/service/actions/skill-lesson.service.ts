import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lesson } from 'src/app/compartilhado/interface/lesson';

@Injectable({
  providedIn: 'root'
})
export class SkillLessonService {

  private lesson: BehaviorSubject<Lesson> = new BehaviorSubject<Lesson>(null);
  lesson$ = this.lesson.asObservable();
  private code: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  code$ = this.code.asObservable();

  constructor() { }

  changeCurrentLesson(lesson:Lesson) {
    this.lesson.next(lesson);
  }

  buildURL(wkcode:string, tribeCode:string, skillCode:string, lessonCode:string) {
    const code: string = wkcode;
    code.concat("/" + tribeCode + "/" + skillCode + "/" + lessonCode );
    this.code.next(code);
  }
}
