import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WakandaTribe } from '../interfaces/wakanda-tribe';

//const API_URL = environment.apiUrl
const API_URL = "https://run.mocky.io/v3/4af0c27a-2547-4574-88f0-ccf8629030ef"
@Injectable({
  providedIn: 'root'
})
export class WakandaTribeslistService {

  constructor(private http: HttpClient) { }

  getTribos(userId: number) {
    //TODO: fazer busca da tribo baseado no ID do usuario
    return this.http.get<WakandaTribe[]>(API_URL);
  }
}
