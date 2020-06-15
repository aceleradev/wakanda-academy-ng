import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    RouterModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
