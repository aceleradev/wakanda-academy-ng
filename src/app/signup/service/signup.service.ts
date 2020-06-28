import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  register(newUser: NewUser) {
    return this.http.post('/wakanda/app/v1/user', newUser);
  }

  verSeJaCadastrado(email: string) {
    return this.http.get('/wakanda/app/v1/user');
  }
}
