import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';

const userHost = "https://run.mocky.io"
const url_tribo = "/v3/c8f5bbc4-c310-4b86-badb-54849bf14ecd";

@Injectable({
  providedIn: 'root'
})
export class WakanderService {

  constructor(private http: HttpClient) { }

  getTribo(code: string) {
    //TODO: fazer busca da tribo baseado no codigo da tribo
    return this.http.get<WakandaTribe>(userHost + url_tribo);
  }
}
