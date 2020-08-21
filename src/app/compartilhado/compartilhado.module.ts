import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ValMessageComponent } from './val-message/val-message.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading/loading.component';
import { LoadingModule } from './loading/loading.module';
import { MetasComponent } from './modal/metas/metas.component';
import { MetasContentComponent } from './modal/content/metas-content/metas-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  declarations: [ValMessageComponent, HeaderComponent, MetasComponent, MetasContentComponent],
  exports:[ValMessageComponent, HeaderComponent, MetasComponent],
  entryComponents:[MetasContentComponent]
})
export class CompartilhadoModule { }
