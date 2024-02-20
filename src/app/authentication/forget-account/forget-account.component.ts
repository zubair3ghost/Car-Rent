import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-forget-account',
  templateUrl: './forget-account.component.html',
  styleUrls: ['./forget-account.component.scss']
})
export class ForgetAccountComponent implements OnInit {

  constructor(private http:HttpService,private route:Router,private activeroute:ActivatedRoute) { }
currentpage:string=""
ngOnInit(): void {
  const email = 'example@example.com'; // Replace with the actual email value
  this.set(email);
}

set(email: string): void {
  localStorage.setItem("email", email);
}

// set(email: string): void {
//   localStorage.setItem("email", email);
// }
  
  //this is just testing for email checking
  submit(value:any){
    console.log(value);
    this.http.forgetaccount(value).subscribe((result:any)=>{
        console.log(result,"result of emial valid response");
        let email=result.data.email
        localStorage.setItem("email", email);
           
      
        this.route.navigate(['/otp1'])
       
      
    })
    }
  


}







// {state :{ 
//   useremail:result.data.email,
//     formpath:this.currentpage }}