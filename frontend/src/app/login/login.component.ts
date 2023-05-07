import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginService} from "../utils/login.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router : Router, private route : ActivatedRoute) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService.logout().subscribe(msg => {
        console.log(msg);
      }, error => {
        console.log(error);
      })
    }
  }

  login() {
    if (this.username != '' && this.password != '') {
      this.loginService.login(this.username, this.password).subscribe(msg => {
        console.log(msg);
        localStorage.setItem('user', this.username);

        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      })
      this.loginService.getUser(this.username).subscribe((data : any) => {
        console.log(data);
        localStorage.setItem('accessLevel', data[0].accessLevel);
      }, error => {
        console.log(error);
      })
    }

  }
}
