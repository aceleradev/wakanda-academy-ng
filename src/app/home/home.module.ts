import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
