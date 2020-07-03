import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WakandaTribe } from '../interfaces/wakanda-tribe';

const API_URL= environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class WakandaTribeslistService {

  constructor(private http: HttpClient) { }

  getTribos() {
    return this.http.get<WakandaTribe[]>(API_URL);
  }
}
