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
import {Component, OnInit} from '@angular/core';
import {LoginService} from "../utils/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  username: string;
  password: string;
  email : string;

  constructor(private loginService: LoginService, private router : Router) {
    this.username = '';
    this.password = '';
    this.email = '';
  }
  register() {
    if (this.username != '' && this.password != '') {
      this.loginService.registration(this.username,this.email, this.password).subscribe(msg => {
        console.log(msg);
       // localStorage.setItem('user', this.username);
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      })
    }
    // handle registration form submission
  }

  ngOnInit(): void {
  }
}
