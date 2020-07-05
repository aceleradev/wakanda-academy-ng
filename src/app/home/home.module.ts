import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakandaTribeslistComponent } from './wakanda-tribeslist/wakanda-tribeslist.component';
import { WakandaTribeComponent } from './wakanda-tribe/wakanda-tribe.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [HomeComponent, WakandaTribeslistComponent, WakandaTribeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
