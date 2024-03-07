import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-billing-rental',
  templateUrl: './billing-rental.component.html',
  styleUrls: ['./billing-rental.component.scss']
})
export class BillingRentalComponent implements OnInit {

  constructor(
    private http:HttpService,
    private route:ActivatedRoute
  ) { }
carId: any;
  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    console.log(this.carId,"here is the car id of routing method");
    
  }

submitbilling(value:any){
value.carId=this.carId
     console.log(value,"this is billling form this shows form is working propely");
this.http.createOrder(value).subscribe((res)=>{
console.log(res,"this  is the response  of  billing info ");     
    
  
})
     

}
}
