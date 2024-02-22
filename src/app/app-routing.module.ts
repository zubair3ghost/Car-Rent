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
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { UserPannelComponent } from './contact/user-pannel/user-pannel.component';
import { HistoryComponent } from './contact/history/history.component';
import { FavouriteComponent } from './contact/favourite/favourite.component';
import { Otp1Component } from './authentication/otp1/otp1.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path:'sign-up',
    component:SignUpComponent,
     data: { showHeader: true }
    
  },
  {
    path:'login',
    component:LoginComponent,
    data: { showHeader: true }
  },
  {
    path:'otp',
     component:OtpComponent,
     data: { showHeader: true }
    
  },
  {
    path:'otp1',
    component:Otp1Component,
    data: { showHeader: true }
  },


  {
    path:'forget-account',
    component:ForgetAccountComponent,
    data: { showHeader: true }
 
  },
  {
    path:'new-password',
    component:NewPasswordComponent,
    data: { showHeader: true }
    
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
  // contact us module here route is here
  {
    path:'contact-info',
    component:ContactInfoComponent
  },
  {
    path:'user-pannel',
    component:UserPannelComponent,
    canActivate: [AuthGuard], 
  },
  {
    path:'history',
    component:HistoryComponent,
    canActivate: [AuthGuard], 
  },
  {
    path:'favourite',
    component:FavouriteComponent,
    canActivate: [AuthGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
