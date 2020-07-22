import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';
import * as environment from '../../../../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

  login(email: string, senha: string) {
    return this.http
              .post(environment.wakanda.wakander.auth.path, 
                {'username': email, 'password': senha},
                {observe: "response"})
              .pipe(tap((res: HttpResponse<any>)=> {
                if(res.body){
                  const authToken = res.body.token;
                  //console.log(authToken);
                  this.userService.setToken(authToken);
                }
              }));
  }
}
