import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakanderTribeDetailComponent } from './wakander-tribe-detail/wakander-tribe-detail.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakanderTribeSkillListComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-list.component';
import { WakanderTribeSkillDetailComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-detail/wakander-tribe-skill-detail.component';
import { SkillLessonComponent } from './Skill-lessson/skill-lessson.component';
import { WakanderTribeSkillLessonListComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-detail/wakander-tribe-skill-lesson-list/wakander-tribe-skill-lesson-list.component';
import { WakanderTribeSkillLessonComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-detail/wakander-tribe-skill-lesson-list/wakander-tribe-skill-lesson/wakander-lesson.component';


@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [
    WakanderTribeDetailComponent,
    WakanderTribeSkillListComponent,
    WakanderTribeSkillDetailComponent,
    SkillLessonComponent,
    WakanderTribeSkillLessonListComponent,
    WakanderTribeSkillLessonComponent
  ]
})
export class WakanderModule { }
