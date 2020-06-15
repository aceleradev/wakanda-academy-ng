import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { tap } from "rxjs/operators"

import { UserService } from 'src/app/compartilhado/service/user/user.service';

const API_URL = 'https://run.mocky.io/v3/ef75dafa-89ee-4776-bd1e-6a59daeadc7f';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {}

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
  }
}
