import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WakandaTribe } from 'src/app/compartilhado/interface/wakanda-tribe';
import { WakanderService } from '../service/wakander.service';
import { SkillLessonService } from '../service/actions/skill-lesson.service';
import { SkillActionService } from '../service/actions/skill-action.service';

@Component({
  selector: 'app-wakander-tribe-detail',
  templateUrl: './wakander-tribe-detail.component.html',
  styleUrls: ['./wakander-tribe-detail.component.css']
})
export class WakanderTribeDetailComponent implements OnInit {

  code: string = "";
  wkCode: string = "";
  tribo: WakandaTribe;
  show: boolean;
  breadCrumbs: string = "Home > ";
  baseBreadCrumbs:string = "Home > ";
  percent: number;

  constructor(
    private route: ActivatedRoute,
    private wakanderService: WakanderService,
    private skillActionService: SkillActionService) { }


  ngOnInit() {
    this.code = this.route.snapshot.params.code;
    console.log(this.code);

    this.wkCode = this.route.snapshot.params.wkCode;
    console.log(this.wkCode);

    console.log(this.code.concat(this.wkCode));
    this.wakanderService.getTribo(this.wkCode, this.code).subscribe(wakanda => {
      this.tribo = wakanda
      this.percent = this.tribo.completedPercentageTribe;
      console.log(this.tribo);
      this.breadCrumbs = this.breadCrumbs.concat(this.tribo.nameTribe);
      this.baseBreadCrumbs = this.breadCrumbs;
    });
    this.skillActionService.getBreadCrumbs().subscribe(res => {
      const string = res.replace("/", " > ").replace("/", " > ").replace(this.wkCode, "");
      this.breadCrumbs = this.baseBreadCrumbs;
      this.breadCrumbs = this.breadCrumbs.concat(string);

    });
  }

}
