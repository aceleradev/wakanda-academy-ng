import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';
import * as environment from '../../../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class WakanderService {

  constructor(private http: HttpClient) { }

  getTribo(code: string) {
    //TODO: fazer busca da tribo baseado no codigo da tribo
    return this.http.get<WakandaTribe>(environment.wakanda.wakander.tribe.detail.path);
  }

}
