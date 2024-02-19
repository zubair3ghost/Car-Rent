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
this.currentpage=this.activeroute.snapshot.url[0].path
// console.log(this.currentpage,'this is current  page of forget account ');


  }


  
  //this is just testing for email checking
  submit(value:any){
    console.log(value);
    this.http.forgetaccount(value).subscribe((result:any)=>{
  console.log(result,"this is response chechking");
  
      if(result){
        //if we not ser type any then this will show error
           let res=result.data?.email
        console.log(res);
        
        
        this.route.navigate(['/otp1'])
      }
      
    })
    }
  


}







// {state :{ 
//   useremail:result.data.email,
//     formpath:this.currentpage }}