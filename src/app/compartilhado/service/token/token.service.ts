import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as environment from '../../../../environments/environment.js';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private expDate: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(key, token);
  }

  getToken() {
    return window.localStorage.getItem(key);
  }

  removeToken() {
    this.setExpDate(null);
    window.localStorage.removeItem(key);
  }

  // renewToken() {
  //   return this.http.post<any>(environment.wakanda.wakander.auth.renew.path,
  //     { "token": this.getToken() }, { observe: "response" });
  // }

  setExpDate(date: string) {
    this.expDate.next(date);
  }

  getExpDate() {
    return this.expDate.asObservable();
  }

}
