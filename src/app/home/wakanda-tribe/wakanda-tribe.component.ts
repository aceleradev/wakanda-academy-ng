import { Component, OnInit, Input } from '@angular/core';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';
import { Router } from '@angular/router';
import { status } from 'src/app/compartilhado/interface/status.enum';
import { StatusColorService } from 'src/app/compartilhado/service/status-color/status-color.service';

@Component({
  selector: 'app-wakanda-tribe',
  templateUrl: './wakanda-tribe.component.html',
  styleUrls: ['./wakanda-tribe.component.css']
})
export class WakandaTribeComponent implements OnInit {

  @Input() code:string
  @Input() nome:string
  @Input() descricao:string
  @Input() icon_url:string
  @Input() status: status;

  constructor(
    private router: Router,
    private statusColor: StatusColorService) { }

  ngOnInit() {
  }

  redirect() {
    if(this.status.toString()=="CLOSED") {
      alert("Ops! você ainda não liberou esse curso!")
    }else {
      this.router.navigate(["/tribe", this.code]);
      console.log(this.router.navigate(["/tribe", this.code]));
    }
  }

  color() {
    return this.statusColor.checkStatus(this.status);
  }

}
