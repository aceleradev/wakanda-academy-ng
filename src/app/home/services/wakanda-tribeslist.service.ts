import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';

//const API_URL = environment.apiUrl
const userHost = "https://run.mocky.io"
//const url_tribos = "/v3/4af0c27a-2547-4574-88f0-ccf8629030ef"
const url_tribos = "/v3/9bae3330-1357-4c5a-a341-7d92b351b71e"

@Injectable({
  providedIn: 'root'
})
export class WakandaTribeslistService {

  constructor(private http: HttpClient) { }

  getTribos(userId: number) {
    //TODO: fazer busca das tribos baseado no ID do usuario
    return this.http.get<WakandaTribe[]>(userHost + url_tribos);
  }

}
