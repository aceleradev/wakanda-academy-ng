import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as environment from '../../../environments/environment.js'
import { NewUser } from '../interface/new-user';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private HttpStatus: string = "401";

  constructor(
    private http: HttpClient
  ) { }

  register(newUser: NewUser) {
    return this.http.post(environment.wakanda.wakander.create.path, JSON.stringify(newUser), {observe:'response'})
    .pipe(map(res => true))
    .pipe(catchError(err => {
      return err.status == this.HttpStatus ? of(false) : throwError(err)
    }))
  }
}
