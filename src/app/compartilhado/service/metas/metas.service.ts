import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakanderGoal } from '../../interface/wakander-goal';

import * as environment from "../../../../environments/environment.js";
import { BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetasContentComponent } from '../../modal/content/metas-content/metas-content.component';

const API_URL: string = environment.wakanda.wakander.goal.path;
const emptyWkGoal: WakanderGoal = { nextTribeGoal: { name: "", tribeCode: "" }, weeklyGoalStudyHours: 0 }

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  private metas$: BehaviorSubject<WakanderGoal> = new BehaviorSubject<WakanderGoal>(emptyWkGoal);

  constructor(private http: HttpClient,
    private modalService: NgbModal) { }

  putMetas(wkCode: string, metas: WakanderGoal) {
    const url = this.wkCodeUrl(wkCode);
    console.log(metas);
    return this.http.put(url, {
      'weeklyGoalStudyHours': metas.weeklyGoalStudyHours,
      'nextTribeGoal': {
        'tribeCode': metas.nextTribeGoal.tribeCode,
        'name': metas.nextTribeGoal.name
      }
    },
      { observe: "response" });
  }

  getMetas(wkCode: string) {
    const url = this.wkCodeUrl(wkCode);
    return this.http.get<WakanderGoal>(url, { observe: "response" });
  }

  setMeta(meta: WakanderGoal) {
    this.metas$.next(meta);
  }

  cleanMetas() {
    this.metas$.next(emptyWkGoal);
  }

  getterMetas() {
    return this.metas$.asObservable();
  }

  private wkCodeUrl(wkCode: string) {
    return API_URL.toString().replace("{wakanderCode}", wkCode);
  }

}
