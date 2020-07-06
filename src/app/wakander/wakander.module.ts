import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakanderTribeDetailComponent } from './wakander-tribe-detail/wakander-tribe-detail.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [WakanderTribeDetailComponent]
})
export class WakanderModule { }
