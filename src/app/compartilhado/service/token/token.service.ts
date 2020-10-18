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
    window.localStorage.removeItem('tokenExpirationDate')
    window.localStorage.removeItem(key);
  }

  renewToken() {
    return this.http.get<any>(environment.wakanda.wakander.auth.renew.path,
      { observe: "response" });
  }

  setTokenExpDate(dateString: string) {
    window.localStorage.setItem('tokenExpirationDate', dateString);
  }

  getTokenExpDate() {
    let expirationDateString = window.localStorage.getItem('tokenExpirationDate');
    return expirationDateString == null ? null : new Date(expirationDateString);
  }

  tokenHasExpired(): boolean {
    return new Date() < this.expDate.value;
  }

}
