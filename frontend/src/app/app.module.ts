import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {RegistrationModule} from "./registration/registration.module";
import {RepairServicesModule} from "./repair-services/repair-services.module";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    RepairServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
