import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WakandaTribe } from '../interfaces/wakanda-tribe';

//const API_URL = environment.apiUrl
const userHost = "https://run.mocky.io"
const url_tribos = "/v3/4af0c27a-2547-4574-88f0-ccf8629030ef"
const url_tribo = "/v3/dd475f10-a4b4-4968-86dd-b40269ab6935";
@Injectable({
  providedIn: 'root'
})
export class WakandaTribeslistService {

  constructor(private http: HttpClient) { }

  getTribos(userId: number) {
    //TODO: fazer busca das tribos baseado no ID do usuario
    return this.http.get<WakandaTribe[]>(userHost + url_tribos);
  }

  getTribo(code: string) {
    //TODO: fazer busca da tribo baseado no codigo da tribo
    return this.http.get<WakandaTribe>(userHost + url_tribo);
  }
}
