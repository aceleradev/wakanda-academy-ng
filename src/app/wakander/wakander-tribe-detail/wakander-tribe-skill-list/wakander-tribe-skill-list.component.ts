import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/compartilhado/interface/lesson';
import { Skill } from 'src/app/compartilhado/interface/skill';

@Component({
  selector: 'app-wakander-tribe-skill-list',
  templateUrl: './wakander-tribe-skill-list.component.html',
  styleUrls: ['./wakander-tribe-skill-list.component.css']
})
export class WakanderTribeSkillListComponent implements OnInit {

  @Input() skills: Skill[];
  constructor() { }

  ngOnInit() {
    console.log(this.skills);
  }
  
}
