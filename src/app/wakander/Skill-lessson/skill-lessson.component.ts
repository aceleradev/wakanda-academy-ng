import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-lesson',
  templateUrl: './skill-lesson.component.html',
  styleUrls: ['./skill-lesson.component.css']
})
export class SkillLessonComponent implements OnInit {

  acessar: boolean = false;
  proxima: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onclikAcessar(){
    this.acessar = !this.acessar;
   }

   onclickProxima(){
   this.proxima = !this.proxima;
  }
}
