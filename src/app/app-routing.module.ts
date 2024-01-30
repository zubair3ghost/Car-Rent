import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { HomeCarComponent } from './home-car/home-car.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgetAccountComponent } from './authentication/forget-account/forget-account.component';
import { NewPasswordComponent } from './authentication/new-password/new-password.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { RequiredComponent } from './vehical-listing/required/required.component';
import { DetailComponent } from './vehical-listing/detail/detail.component';
import { BillingRentalComponent } from './vehical-listing/billing-rental/billing-rental.component';

const routes: Routes = [

  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'otp',
    component:OtpComponent
  },
  {
    path:'forget-account',
    component:ForgetAccountComponent
  },
  {
    path:'new-password',
    component:NewPasswordComponent
  },
  {
    path:'home',
    component:HomeCarComponent
  }
  // this is vehical listing module 
  ,{
    path:'required',
    component:RequiredComponent
  },
  {
    path:'detail',
    component:DetailComponent
  },
  {
    path:'billing-rental',
    component:BillingRentalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
