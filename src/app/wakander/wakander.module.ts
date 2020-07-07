import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakanderTribeDetailComponent } from './wakander-tribe-detail/wakander-tribe-detail.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakanderTribeSkillListComponent } from './wakander-tribe-detail/wakander-tribe-skill-list/wakander-tribe-skill-list.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [WakanderTribeDetailComponent, WakanderTribeSkillListComponent]
})
export class WakanderModule { }
