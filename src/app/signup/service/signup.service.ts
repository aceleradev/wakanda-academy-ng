import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';

<<<<<<< HEAD
=======
const API_URL = "https://run.mocky.io/v3/9f87f13d-222c-4cd2-adbf-99375f9b0597";
>>>>>>> projeto

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

<<<<<<< HEAD
  register(newUser: NewUser) {
    return this.http.post('/wakanda/app/v1/user/create', newUser);
  }

  verSeJaCadastrado(email: string) {
    return this.http.get('/wakanda/app/v1/user/create');
=======
  register(NewUser: NewUser) {
    return this.http.post(API_URL, NewUser)
  }

  verSeJaCadastrado(email: string) {
    return this.http.get(API_URL);
>>>>>>> projeto
  }
}
