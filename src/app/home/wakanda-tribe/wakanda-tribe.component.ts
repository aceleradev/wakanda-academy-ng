import { Component, OnInit, Input } from '@angular/core';
import { WakandaTribe } from '../interfaces/wakanda-tribe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wakanda-tribe',
  templateUrl: './wakanda-tribe.component.html',
  styleUrls: ['./wakanda-tribe.component.css']
})
export class WakandaTribeComponent implements OnInit {

  @Input() id:string
  @Input() nome:string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(["/tribe", this.id])
  }

}
