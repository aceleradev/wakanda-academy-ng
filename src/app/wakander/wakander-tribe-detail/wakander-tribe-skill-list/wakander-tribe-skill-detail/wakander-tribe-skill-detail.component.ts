import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/compartilhado/interface/skill';
import { StatusColorService } from 'src/app/compartilhado/service/status-color/status-color.service';

@Component({
  selector: 'app-wakander-tribe-skill-detail',
  templateUrl: './wakander-tribe-skill-detail.component.html',
  styleUrls: ['./wakander-tribe-skill-detail.component.css']
})
export class WakanderTribeSkillDetailComponent implements OnInit {

  @Input() skill: Skill;

  constructor(private status:StatusColorService) { }

  ngOnInit() {
    console.log(this.skill.status);
  }
  
  color() {
    return this.status.checkStatus(this.skill.status);
  }
}
