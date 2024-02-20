import {
    HttpEvent, 
    HttpHandler,
    HttpInterceptor, 
    HttpRequest 
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private userservice:UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token= this.userservice.token
    console.log('Request before the  interception:', req);
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

 // Log the request after interception
 console.log('Request after interception:', authReq);

     // pass the cloned request to the next handler

    return next.handle(authReq);

        

    throw new Error('Method not implemented.');
  }
}
