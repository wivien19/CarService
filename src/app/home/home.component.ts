import { Component } from '@angular/core';
import {ConnectionService} from "../utils/connection.service";
import {AppRoutingModule} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private connectionService : ConnectionService, private router : Router) {


  }


  title = 'CarService';
  example = ['1_elem'];
  goToLogin(){
    this.router.navigate(['login']);
  }
  hello(){
    console.log('hello world');
    this.connectionService.greet();
  }
}
