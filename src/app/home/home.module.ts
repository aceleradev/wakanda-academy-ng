import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakandaTribeslistComponent } from './wakanda-tribeslist/wakanda-tribeslist.component';
import { WakandaTribeComponent } from './wakanda-tribe/wakanda-tribe.component';
import { RouterModule } from '@angular/router';
import { WakanderProfileComponent } from './wakander-profile/wakander-profile.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    RouterModule
  ],
  declarations: 
  [
    HomeComponent, 
    WakandaTribeslistComponent, 
    WakandaTribeComponent,
    WakanderProfileComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
