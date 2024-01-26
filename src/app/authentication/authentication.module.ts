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



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    OtpComponent,
    
    ForgetAccountComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule,FormsModule ,RouterModule 
  ],
  exports:[
    FormsModule 
  ]

})
export class AuthenticationModule { }
