import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpResponse } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { ActivatedRoute } from '@angular/router';

const API_URL_SUCCESS = 'https://run.mocky.io/v3/45273b8d-b9f8-41a4-9f68-f35e4f7a7abf';
const API_URL_FAIL = 'https://run.mocky.io/v3/7e0ac305-c209-4fe9-9e4a-56dffde653ba';
=======
import { HttpClient } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';

const API_URL = 'https://run.mocky.io/v3/ef75dafa-89ee-4776-bd1e-6a59daeadc7f';
>>>>>>> projeto

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

<<<<<<< HEAD
  login(email: string, senha: string, success?: boolean) {
    return this.http
              .post(success? API_URL_SUCCESS : API_URL_FAIL + "", 
                {'email': email, 'password': senha},
                {observe: "response"})
              .pipe(tap((res: HttpResponse<any>)=> {
                if(res.body){
                  const authToken = res.body.token;
                  console.log(authToken);
                  this.userService.setToken(authToken);
                }
              }));
=======
  login(email: string, senha: string) {
    return this.http
      .post(API_URL + "", 
        {email, senha},
        {observe: "response"})
      .pipe(tap((res)=> {
        const authToken = res.headers.get("token");
        console.log(authToken);
        this.userService.setToken(authToken);
      }));
>>>>>>> projeto
  }
}
