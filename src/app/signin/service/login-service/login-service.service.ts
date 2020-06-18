import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { tap, map, catchError } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';
import { of, throwError } from 'rxjs';

//const API_URL = 'https://run.mocky.io/v3/ef75dafa-89ee-4776-bd1e-6a59daeadc7f';
const API_URL = "";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  HttpStatus: string = "404";

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

  login(email: string, senha: string) {
    return this.http
      .post(API_URL + "", 
        {email, senha},
        {observe: "response"})
      .pipe(map((res)=> {
        const authToken = res.headers.get("token");
        //console.log(authToken);
        this.userService.setToken(authToken);
        return true
      }))
      .pipe(catchError(err => {
        return err.status == this.HttpStatus ? of(false) : throwError(err)
      }))
  }
}

