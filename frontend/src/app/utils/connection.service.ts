import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }
  greet(){
    console.log('hello ebbol a connection servicebol');
    return this.http.get('http://localhost:3000',{responseType:'text', withCredentials: true} )
  }
}
