import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HttpService{

    BASE_PATH: string = 'http://40.117.141.7:5000';
    constructor(private http: HttpClient){}

    signUp(body: any){
        
        return this.http.post(`${this.BASE_PATH}/auth/signup`, body)
    }
    otpSignup(body:any){
        console.log(body,"otp body");
        
        return this.http.post(`${this.BASE_PATH}/auth/validateOTP`,body)
    }
    signIn(body:any){
        return this.http.post(`${this.BASE_PATH}/auth/login`,body)
    }
    forgetaccount(body:any){
        return this.http.post(`${this.BASE_PATH}/auth/forgetPassword`,body
        ,    {
            headers:new HttpHeaders({
               "Authorization"     :"Bearer "
            })
        }
        )
    }
    //after forget account api we call set new password api
    newpassword(body:any){
        return this.http.post(`${this.BASE_PATH}/auth/resetPassword`,body,
    
        )
    }
}