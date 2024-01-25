import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { HomeCarComponent } from './home-car/home-car.component';

const routes: Routes = [

  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
