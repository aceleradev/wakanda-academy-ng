import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from '../interface/new-user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  register(newUser: NewUser) {
    return this.http.post(environment.apiUrl, newUser)
  }

  verSeJaCadastrado(email: string) {
    return this.http.get(environment.apiUrl);
  }
}
