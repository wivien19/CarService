import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CarService} from "../utils/car.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit{
  name: string;
  type: string;
  price: number;
  description: string;
  constructor( private router : Router, private carservice:CarService) {
    this.name = '';
    this.type = '';
    this.price = 0;
    this.description= '';
  }


  addProduct() {
       this.carservice.pushCar(this.name, this.type, this.price, this.description).subscribe(msg => {
         console.log(msg);

         this.router.navigate(['/home']);

       })
  }
 ngOnInit(): void {
  }
}
