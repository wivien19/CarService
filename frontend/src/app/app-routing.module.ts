import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RepairServicesComponent} from "./repair-services/repair-services.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component : RegistrationComponent
  },
  {
    path: 'repair', component : RepairServicesComponent
  },
  {
    path: 'logout', redirectTo: 'login', pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
