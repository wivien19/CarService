import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RepairServicesComponent} from "./repair-services/repair-services.component";
import {AuthGuard} from "./guards/auth.guard";
import {RepairDetailsComponent} from "./repair-details/repair-details.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {AdminAuthGuard} from "./guards/admin.auth.guard";

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
    path: 'repair', component : RepairServicesComponent, canActivate:[AuthGuard]
  },
  {
    path: 'repair/:id', component : RepairDetailsComponent, canActivate:[AuthGuard]
  },
  {
    path: 'add', component : AddServiceComponent, canActivate:[AdminAuthGuard]
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
