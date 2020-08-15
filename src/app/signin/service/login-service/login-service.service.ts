import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';
import * as environment from '../../../../environments/environment.js';
import { TokenService } from 'src/app/compartilhado/service/token/token.service.js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private tokenService: TokenService) { }

  login(email: string, senha: string) {
    return this.http
      .post(environment.wakanda.wakander.auth.login.path,
        { 'username': email, 'password': senha },
        { observe: "response" })
      .pipe(tap((res: HttpResponse<any>) => {
        if (res.body) {
          const authToken = res.body.token;
          const expTime:string = res.body.expiresAt;
          console.log(expTime);
          
          this.tokenService.setTokenExpDate(expTime);
          this.userService.setToken(authToken);
        }
      }));
  }
}
