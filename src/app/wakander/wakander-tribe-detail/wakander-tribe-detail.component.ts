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

  constructor(
    private route: ActivatedRoute,
    private wakanderService: WakanderService,
    private actionService: SkillActionService) { }


    ngOnInit() {
      this.code = this.route.snapshot.params.code;
      console.log(this.code);
      
      this.wkCode = this.route.snapshot.params.wkCode;
      console.log(this.wkCode);
      
      console.log(this.code.concat(this.wkCode));
      this.wakanderService.getTribo(this.wkCode, this.code).subscribe(wakanda => {
        this.tribo = wakanda
        console.log(this.tribo);
      });
  }

}
