import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const access = localStorage.getItem('accessLevel');
    //console.log(access);
    if (localStorage.getItem('user') && access){
      console.log(parseInt(access));
      return parseInt(access) == 3;

    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
