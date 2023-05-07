import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {

  }
  getCars(){
    return this.http.get('http://localhost:4200/server/car', {
    });
  }
  getCar(id: string){
    return this.http.get(`http://localhost:4200/server/car/${id}`, {
    });
  }
  pushCar(name : string, type: string, price:number, description: string){
    return this.http.post('http://localhost:4200/server/car', {
      name : name, type: type, price : price, description : description
    }, {responseType : 'text'});
  }
  deleteCar(name: string){
    return this.http.delete(`http://localhost:4200/server/car/${name}`, {
    });
  }
  logout(){
    return this.http.post('http://localhost:4200/server/logout', {}, {withCredentials: true, responseType : 'text'});
  }
}
