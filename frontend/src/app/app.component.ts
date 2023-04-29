import { Component } from '@angular/core';
import {ConnectionService} from "./utils/connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private connectionService : ConnectionService) {


  }


  title = 'CarService';
  example = ['1_elem'];
  hello(){
    console.log('hello world');
    this.connectionService.greet();
  }



}
