import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WakandaTribe } from '../interfaces/wakanda-tribe';

//const API_URL = environment.apiUrl
const API_URL = "https://run.mocky.io/v3/e5005ad8-8ed4-421d-bda7-9902f4fbadf8"
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
