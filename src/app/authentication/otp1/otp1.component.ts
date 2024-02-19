 

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { NgOtpInputComponent } from 'ng-otp-input';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';
import { validateotp } from 'src/app/validate';

@Component({
  selector: 'app-otp1',
  templateUrl: './otp1.component.html',
  styleUrls: ['./otp1.component.scss']
})
export class Otp1Component implements OnInit {

  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput: NgOtpInputComponent | undefined;

  constructor(private route: Router,
     private otpservice: HttpService,
      private userService: UserService,
      private activeroute:ActivatedRoute         
      ) { }

 



  ngOnInit(): void {

    
   
  }


  test: any;
  enteredOTP: any = ''
  validateotp(value: any) {
    console.log(value);

    const email = this.userService.user.email;
    console.log(email, "email")

    this.otpservice.otpSignup({
      "email": email,
      enteredOTP: parseInt(this.enteredOTP)
      
    }).subscribe((response: any) => {
      this.enteredOTP = response;
      console.log(response, "this is the response");
      const { data } = response;

      if(data?.token){
        this.userService.token = data.token;
        this.route.navigate(['/'])
      }else{
        alert("Otp is not valid")
      }
    })
    console.log("otp method is working", value);

  }







  //this si for otp boxes functionality 
  onOtpChange(event: any) {
    this.enteredOTP = event;
  }


  ngAfterViewInit(): void {
    // The ngOtpInput component is now available here
    console.log(this.ngOtpInput);
  }

  submit(val: any) {
    console.log(val, 'this is submit and this is last event');

  }






}