import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from "jwt-decode"
import { HttpClient } from '@angular/common/http';

import { TokenService } from '../token/token.service';
import { User } from '../../interface/user';
import * as environament from '../../../../environments/environment.js'
import { TribePerformace } from '../../interface/tribe-performace';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private performace$ = new BehaviorSubject<TribePerformace>(null);
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient,
  ) { this.tokenService.hasToken() && this.decode(); }

  private decode() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decode();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.router.navigateByUrl("login");
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUser() {
    console.log(this.userSubject);
    return this.userSubject.asObservable();
  }

  getPerformace() {
    return this.performace$.asObservable();
  }

  setPerformace(pr: TribePerformace) {
    this.performace$.next(pr);
  }

  hasUser(user: User): boolean {
    if (user)
      return true;
    return false
  }

  getStats(wkCode: string) {
    return this.http.get<TribePerformace>(environament.wakanda.wakander.performace.path.replace("{wakanderCode}", wkCode),
      { observe: "response" });
  }

}
