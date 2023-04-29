// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit{
//
//   constructor() {
//   }
//
//   ngOnInit(){
//
//   }
//   registerUser(event: { preventDefault: () => void; target: any; }){
//     event.preventDefault();
//     const target = event.target;
//     const username = target.querySelector('#username').value;
//     const password = target.querySelector('#password').value;
//
//     console.log(username, password);
//   }
//
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  register() {
    // handle registration form submission
  }
}
