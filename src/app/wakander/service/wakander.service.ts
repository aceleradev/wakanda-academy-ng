import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';

const userHost = "https://run.mocky.io"
const url_tribo = "/v3/98fb6943-5d10-489a-9b34-904e1b09eaf7";

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
