import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { HttpClient } from '@angular/common/http';
import * as environment from '../../../../environments/environment.js';
import { LessonDTO } from 'src/app/compartilhado/interface/lessonDTO.js';

@Injectable({
  providedIn: 'root'
})
export class SkillLessonService {

  private lesson: BehaviorSubject<Lesson> = new BehaviorSubject<Lesson>(null);
  lesson$ = this.lesson.asObservable();
  private code: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  code$ = this.code.asObservable();

  constructor(private http: HttpClient) { }

  changeCurrentLesson(lesson:Lesson) {
    this.lesson.next(lesson);
  }

  buildURL(wkcode:string, tribeCode:string, skillCode:string, lessonCode:string) {
    const code: string = wkcode;
    const newcode = code.concat("/" + tribeCode + "/" + skillCode + "/" + lessonCode );
    console.log(newcode + " newcode");
    
    this.code.next(newcode);
  }

  acessarLesson(url: string) {
    return this.http.get(environment.wakanda.action.unlock.path + '/' + url, {observe:'response'})
  }

  getNextLesson(wkCode:string, lessonCode:string) {
    return this.http.get<LessonDTO>(environment.wakanda.action.nextLesson.path, {
      params: {
        wakanderCode: wkCode,
        currentLessonCode: lessonCode
      },
      observe: 'response'
    });
  }
}
