import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../utils/car.service";

@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.css']
})
export class RepairDetailsComponent {
  name: string;
  type: string;
  price: number;
  description: string;

  cars?: any
  constructor( private router : Router,private route : ActivatedRoute,private carservice:CarService) {
    this.name = '';
    this.type = '';
    this.price = 0;
    this.description= '';
  }


  ngOnInit(): void {
    console.log("oninit");
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.carservice.getCar(id).subscribe(
        (data) => {
          console.log(data)
          this.cars = data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
