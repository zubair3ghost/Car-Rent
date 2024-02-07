import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredComponent } from './required/required.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { BillingRentalComponent } from './billing-rental/billing-rental.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RequiredComponent,
    DetailComponent,
    BillingRentalComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
})
export class VehicalListingModule { }