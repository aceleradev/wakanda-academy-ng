import { Injectable } from '@angular/core';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(key, token);
  }

  getToken() {

    return window.localStorage.getItem(key);
  }

  removeToken() {
    window.localStorage.removeItem(key);
  }
    
}
