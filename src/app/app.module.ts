import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleModule } from '../../node_modules/@ng-idle/core';
import { NgIdleKeepaliveModule } from '../../node_modules/@ng-idle/keepalive';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from "./home/home.module";
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { WakanderModule } from './wakander/wakander.module';
import { LoadingModule } from './compartilhado/loading/loading.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SigninModule,
    SignupModule,
    HttpClientModule,
    WakanderModule,
    LoadingModule,
    CompartilhadoModule,
    NgIdleModule,
    NgIdleKeepaliveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
