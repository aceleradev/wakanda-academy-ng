import { Component, OnInit, Input } from '@angular/core';
import { WakandaTribe } from '../../compartilhado/interface/wakanda-tribe';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(["/tribe", this.code]);
    console.log(this.router.navigate(["/tribe", this.code]));
    
  }

}
