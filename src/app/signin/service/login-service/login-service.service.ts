import * as environment from '../../../../environments/environment.js';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { ActivatedRoute } from '@angular/router';

//const API_URL_SUCCESS = 'https://run.mocky.io/v3/4b0c7281-06b4-4867-8906-5f0ebd840332';
const API_URL_SUCCESS = environment.wakanda.auth.path;
const API_URL_FAIL = 'https://run.mocky.io/v3/7e0ac305-c209-4fe9-9e4a-56dffde653ba';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

  login(email: string, senha: string, success?: boolean) {
    return this.http
              .post(API_URL_SUCCESS, 
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
