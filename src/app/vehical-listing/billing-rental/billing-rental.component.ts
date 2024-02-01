import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-rental',
  templateUrl: './billing-rental.component.html',
  styleUrls: ['./billing-rental.component.scss']
})
export class BillingRentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

submitbilling(value:any){
     console.log(value,"this is billling form this shows form is working propely");
     

}
}
