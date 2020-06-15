import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    RouterModule
  ],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})
export class SigninModule { }
