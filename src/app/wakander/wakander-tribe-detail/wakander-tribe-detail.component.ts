import { Component, OnInit } from '@angular/core';
import { WakandaTribeslistService } from 'src/app/home/services/wakanda-tribeslist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { WakanderService } from '../service/wakander.service';

@Component({
  selector: 'app-wakander-tribe-detail',
  templateUrl: './wakander-tribe-detail.component.html',
  styleUrls: ['./wakander-tribe-detail.component.css']
})
export class WakanderTribeDetailComponent implements OnInit {

  code: string = "";
  tribo: WakandaTribe;

  constructor(
    private route: ActivatedRoute,
    private wakanderService: WakanderService) { }

  ngOnInit() {
    this.code = this.route.snapshot.params.code;
    console.log(this.code);
    this.wakanderService.getTribo(this.code).subscribe(wakanda => {
      this.tribo = wakanda
      console.log(this.tribo);
    });
    
  }

}
