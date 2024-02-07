import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private http:HttpService) { }

  ngOnInit(): void {
  }
  submit(value:any){
     
    this.http.signIn(value).subscribe((data)=>{
      console.log(data);
      if(data){
        this.router.navigate(['/otp'])
      }
    })
    console.log(value);
    
    }
    showPassword = false;
    
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }

}
