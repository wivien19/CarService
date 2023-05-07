import {Component, OnInit} from '@angular/core';
import {LoginService} from "../utils/login.service";
import {Router} from "@angular/router";
import {CarService} from "../utils/car.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-repair-services',
  templateUrl: './repair-services.component.html',
  styleUrls: ['./repair-services.component.css']
})
export class RepairServicesComponent implements OnInit {
  name: string;
  type: string;
  price: number;
  description: string;

  cars?: any
  constructor( private router : Router, private carservice:CarService) {
    this.name = '';
    this.type = '';
    this.price = 0;
    this.description= '';
  }


  ngOnInit(): void {
    console.log("oninit");

      this.carservice.getCars().subscribe(msg => {
        console.log(msg);
        this.cars = msg;
      }, error => {
        console.log(error);
      })

  }
}
