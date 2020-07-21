import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get("https://run.mocky.io/v3/98fb6943-5d10-489a-9b34-904e1b09eaf7", {observe:'response'})
  }
}
