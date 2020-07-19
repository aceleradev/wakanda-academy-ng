import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ValMessageComponent } from './val-message/val-message.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading/loading.component';
import { LoadingModule } from './loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ValMessageComponent, HeaderComponent],
  exports:[ValMessageComponent, HeaderComponent]
})
export class CompartilhadoModule { }
