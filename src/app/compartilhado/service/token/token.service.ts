import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private expDate: BehaviorSubject<string> = new BehaviorSubject<string>(null);

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

  setExpDate(date: string) {
    this.expDate.next(date);
  }

  getExpDate() {
    return this.expDate.asObservable();
  }

}
