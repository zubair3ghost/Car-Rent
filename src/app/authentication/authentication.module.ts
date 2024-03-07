import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
 
import { ForgetAccountComponent } from './forget-account/forget-account.component';
import { NewPasswordComponent } from './new-password/new-password.component';
 
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule } from '@angular/forms';
import {   RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { Otp1Component } from './otp1/otp1.component';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    OtpComponent,
    
    ForgetAccountComponent,
    NewPasswordComponent,
    Otp1Component,

  ],
  imports: [
    CommonModule,FormsModule ,RouterModule , NgOtpInputModule,
    // BsDropdownModule,
    // ModalModule,ButtonsModule

  ],
  exports:[
    FormsModule 
  ]

})
export class AuthenticationModule { }
