import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as environment from '../../../environments/environment.js';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';
import { WakandaTribeHome } from 'src/app/compartilhado/interface/wakanda-tribe-home.js';

//const API_URL = environment.apiUrl
const userHost = "https://run.mocky.io"
//const url_tribos = "/v3/4af0c27a-2547-4574-88f0-ccf8629030ef"
const url_tribos = "/v3/9bae3330-1357-4c5a-a341-7d92b351b71e"

@Injectable({
  providedIn: 'root'
})
export class WakandaTribeslistService {

  constructor(private http: HttpClient) { }

  getTribos(userId: string) {
    //TODO: fazer busca das tribos baseado no ID do usuario
    return this.http.get<WakandaTribeHome[]>(environment.wakanda.wakander.tribe.detail.path.replace("{wakanderCode}",userId));
  }

}
