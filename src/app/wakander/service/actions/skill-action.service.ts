import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillActionService {
  mostra:boolean = false;
  private show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  show$ = this.show.asObservable();

  constructor() { }

  changeDisplay(show:boolean) {
    this.show.next(show);
    this.mostra = true
  }
  
}
