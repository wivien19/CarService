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
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RepairDetailsComponent } from './repair-details/repair-details.component';
import { AddServiceComponent } from './add-service/add-service.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RepairDetailsComponent,
    AddServiceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    RepairServicesModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
