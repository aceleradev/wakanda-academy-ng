import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';

@Injectable({
  providedIn: 'root'
})
export class WakanderTribeService {

  private subTribe = new BehaviorSubject<WakandaTribe>(null);
  
  constructor() {}

  getTribe(): Observable<WakandaTribe> {
    return this.subTribe.asObservable();
  }

  selectTribe(tribe: WakandaTribe){
    this.subTribe.next(tribe);
  }
  
}
