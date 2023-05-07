import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(username: string, password: string){
    return this.http.post('http://localhost:4200/server/login', {
      username : username, password : password
    }, {responseType : 'text'});
  }
  registration(username: string, email:string, password: string){
    return this.http.post('http://localhost:4200/server/user', {
      username : username, email: email, password : password
    }, {responseType : 'text'});
  }
  logout(){
    return this.http.post('http://localhost:4200/server/logout', {}, {withCredentials: true, responseType : 'text'});
  }
}
