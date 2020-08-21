import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakanderGoal } from '../../interface/wakander-goal';

import * as environment from "../../../../environments/environment.js";
import { BehaviorSubject } from 'rxjs';

const API_URL: string = environment.wakanda.wakander.goal.path;
const wkEmptyGoal: WakanderGoal = { wakanderCode: "", nextTribeGoal: { name: "", tribeCode: "" }, weeklyGoalStudyHours: 0 }

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  private metas$: BehaviorSubject<WakanderGoal> = new BehaviorSubject<WakanderGoal>(wkEmptyGoal);

  constructor(private http: HttpClient) { }

  putMetas(wkCode: string, metas: WakanderGoal) {
    const url = this.wkCodeUrl(wkCode);
    return this.http.put(url, { metas }, { observe: "response" })
  }


  getMetas(wkCode: string) {
    const url = this.wkCodeUrl(wkCode);
    return this.http.get<WakanderGoal>(url, { observe: "response" });
  }

  setMeta(meta: WakanderGoal) {
    this.metas$.next(meta);
  }

  getterMetas() {
    return this.metas$.asObservable();
  }

  private wkCodeUrl(wkCode: string) {
    return API_URL.toString().replace("{wakanderCode}", wkCode);
  }
}
