import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredComponent } from './required/required.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RequiredComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class VehicalListingModule { }
