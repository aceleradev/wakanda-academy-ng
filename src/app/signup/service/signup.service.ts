import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';

const API_URL = "https://run.mocky.io/v3/9f87f13d-222c-4cd2-adbf-99375f9b0597";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  register(NewUser: NewUser) {
    return this.http.post(API_URL, NewUser)
  }

  verSeJaCadastrado(email: string) {
    return this.http.get(API_URL);
  }
}
