import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 




export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    canActivate(): boolean {
      // Check if user is logged in (you can replace this with your authentication logic)
      if (localStorage.getItem('token')) {
    

        return true; // Allow access
        
      } else {
 
        this.router.navigate(['/sign-up']);
        return false; // Block access
      }
    }
  }
