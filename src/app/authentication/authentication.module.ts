import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
 
import { ForgetAccountComponent } from './forget-account/forget-account.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    OtpComponent,
    
    ForgetAccountComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class AuthenticationModule { }
