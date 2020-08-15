import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakanderGoal } from '../../interface/wakander-goal';

import * as environment from "../../../../environments/environment.js";
import { BehaviorSubject } from 'rxjs';

const API_URL: string = environment.wakanda.wakander.goal.path;
const wkEmptyGoal: WakanderGoal = { nextTribeGoal: { name: "", tribeCode: "" }, weeklyGoalStudyHours: 0 }

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  private metas$: BehaviorSubject<WakanderGoal> = new BehaviorSubject<WakanderGoal>(wkEmptyGoal);

  constructor(private http: HttpClient) { }

  enviarMetas(wkCode: string, metas: WakanderGoal) {
    const url = API_URL.toString().replace("{wakanderCode}", wkCode);
    return this.http.put(url, { metas }, { observe: "response" })
  }

  setMeta(meta:WakanderGoal) {
    this.metas$.next(meta);
  }

  getMetas() {
    return this.metas$.asObservable();
  }
}
