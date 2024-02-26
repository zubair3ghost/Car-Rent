import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private http:HttpService,private userservice:UserService) { }

  ngOnInit(): void {
  }
  submit(value:any){
     
    this.http.signIn(value).subscribe((response:any)=>{
      console.log(response);
      const{data}=response


      if(data){
          delete data?.user?.otp;
          this.userservice.user = data;
          this.userservice.token = data?.token;
        this.router.navigate([''])
      }
    })
    console.log(value);
    
    }
    showPassword = false;
    
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }

}
