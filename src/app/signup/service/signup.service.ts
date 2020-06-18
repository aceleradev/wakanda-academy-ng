import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

//const API_URL = "https://run.mocky.io/v3/9f87f13d-222c-4cd2-adbf-99375f9b0597";
const API_URL = "";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  HttpStatus: string = "404";

  constructor(
    private http: HttpClient
  ) { }

  register(NewUser: NewUser) {
    return this.http.post(API_URL, NewUser, {observe:'response'})
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status == this.HttpStatus ? of(false) : throwError(err)
      }))
  }
}
