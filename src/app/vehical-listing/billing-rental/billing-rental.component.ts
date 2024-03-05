import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-billing-rental',
  templateUrl: './billing-rental.component.html',
  styleUrls: ['./billing-rental.component.scss']
})
export class BillingRentalComponent implements OnInit {

  constructor(
    private http:HttpService
  ) { }

  ngOnInit(): void {
  }

submitbilling(value:any){
     console.log(value,"this is billling form this shows form is working propely");
this.http.createOrder(value).subscribe((res)=>{
console.log(res,"thsi is the response  of  billing info ");

  
})
     

}
}
