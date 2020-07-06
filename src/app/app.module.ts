import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from "./home/home.module";
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { HttpClientModule } from '@angular/common/http';
import { WakanderModule } from './wakander/wakander.module';

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
    WakanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
