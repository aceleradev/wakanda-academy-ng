import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import * as environment from '../../../../environments/environment.js';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service.js';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private expDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);

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
    this.setTokenExpDate(null);
    window.localStorage.removeItem(key);
  }

  renewToken() {
    return this.http.get<any>(environment.wakanda.wakander.auth.renew.path,
      { observe: "response" });
  }

  setTokenExpDate(dateString: string) {
    const date = new Date(dateString);
    const dateLocalTime = new Date(date.getTime() - (3 * 60 * 60 * 1000));
    console.log(dateLocalTime);
    this.expDate.next(dateLocalTime);
  }

  getTokenExpDate() {
    console.log(this.expDate.value);
    return this.expDate.asObservable();
  }

}
