import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private HttpStatus: string = "404";

  constructor(
    private http: HttpClient
  ) { }

  register(newUser: NewUser) {
    return this.http.post('/wakanda/app/v1/user/create', newUser, {observe:'response'})
    .pipe(map(res => true))
    .pipe(catchError(err => {
      return err.status == this.HttpStatus ? of(false) : throwError(err)
    }))
  }
}
