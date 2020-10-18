import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { status } from 'src/app/compartilhado/interface/status.enum';
import { WakandaTribeHome } from 'src/app/compartilhado/interface/wakanda-tribe-home';
import { StatusService } from 'src/app/compartilhado/service/status/status.service';

@Component({
  selector: 'app-wakanda-tribe',
  templateUrl: './wakanda-tribe.component.html',
  styleUrls: ['./wakanda-tribe.component.css']
})
export class WakandaTribeComponent implements OnInit {

  @Input() numero: number;
  @Input() tribe: WakandaTribeHome;
  @Input() wkCode: string;
  @Input() status: status;

  constructor(
    private router: Router,
    private statusColor: StatusService) { }

  ngOnInit() {
    console.log(this.tribe.completedPercentageTribe);
    // if (this.tribe.completedPercentageTribe==null)
    //   this.tribe.completedPercentageTribe = 50;
  }

  redirect() {
    console.log((["/tribe", this.wkCode, this.tribe.tribeCode]));
    this.router.navigate(["/tribe", this.wkCode, this.tribe.tribeCode]);
  }

  color() {
    return this.statusColor.checkStatus(this.tribe.status);
  }

}
