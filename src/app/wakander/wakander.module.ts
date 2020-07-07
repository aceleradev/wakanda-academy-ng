import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakanderTribeDetailComponent } from './wakander-tribe-detail/wakander-tribe-detail.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakanderTribeSkillListComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-list.component';
import { WakanderTribeSkillDetailComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-detail/wakander-tribe-skill-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [WakanderTribeDetailComponent, WakanderTribeSkillListComponent, WakanderTribeSkillDetailComponent]
})
export class WakanderModule { }
