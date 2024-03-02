import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})

export class HttpService{

    BASE_PATH: string = 'http://40.117.141.7:5000';
    constructor(private http: HttpClient,private userservice: UserService){}
   //here  is the authentication  module all api are handle and done

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
        , 
        )
    }
    //after forget account api we call set new password api
    newpassword(body:any){
        return this.http.post(`${this.BASE_PATH}/auth/resetPassword`,body,
        {
            headers:new HttpHeaders({
               "Authorization"     :"Bearer "+ localStorage.getItem("token")
            })
        }
    
        )
    }
    //here   i handle  car api  for getting car 
       //this method is for home page api and only 4 images  with limit of 4 can appear in  this
        getAllCar(){
            return this.http.get(`${this.BASE_PATH}/car/getAllCars?page=1&limit=4`)
        }

        getcarbyid(id :any){
          return this.http.get(`${this.BASE_PATH}/car/getOneCar/${id}`);
        }

        geteight(){
            return this.http.get(`${this.BASE_PATH}/car/getAllCars?page=1&limit=8`)    
        }

        required(){
            return this.http.get(`${this.BASE_PATH}/car/getAllCars?page=1&limit=27`)  
        }
         


          //for favourite 
        favoritecar(id:any){        
            return this.http.post(`${this.BASE_PATH}/fav/favoriteCar`,id)  
        }
        //for unfavourite  car 
        unfavoritecar(id:any){
            console.log(id,'this is unfovorrite car id');
            
            return this.http.post(`${this.BASE_PATH}/fav/unFavoriteCar`,id)  
        }






}