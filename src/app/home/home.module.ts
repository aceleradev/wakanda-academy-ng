import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { WakandaTribeslistComponent } from './wakanda-tribeslist/wakanda-tribeslist.component';
import { WakandaTribeComponent } from './wakanda-tribe/wakanda-tribe.component';
import { RouterModule } from '@angular/router';
import { WakanderProfileComponent } from './wakander-profile/wakander-profile.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { DesempenhoComponent } from './desempenho/desempenho.component';
import { SemanalComponent } from './desempenho/semanal/semanal.component';
import { GeralComponent } from './desempenho/geral/geral.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    RouterModule,
    NgbProgressbarModule
  ],
  declarations:
    [
      HomeComponent,
      WakandaTribeslistComponent,
      WakandaTribeComponent,
      WakanderProfileComponent,
      DesempenhoComponent,
      SemanalComponent,
      GeralComponent,
    ],
  exports: [HomeComponent]
})
export class HomeModule { }
