import { HttpClient } from "@angular/common/http";
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
        return this.http.post(`${this.BASE_PATH}/auth/validateOTP`,body)
    }
    signIn(body:any){
        return this.http.post(`${this.BASE_PATH}/auth/login`,body)
    }
}