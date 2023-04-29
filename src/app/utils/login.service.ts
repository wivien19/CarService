import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(username: string, password: string){
    return this.http.post('http://localhost:3000/login', {
      username : username, password : password
    }, {responseType : 'text'});
  }
  logout(){
    return this.http.post('http://localhost:3000/logout', {}, {withCredentials: true, responseType : 'text'});
  }
}
