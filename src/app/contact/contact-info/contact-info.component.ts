import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(
    private http:HttpService
  ) { }

  ngOnInit(): void {
  }
  formofcontacts( vlaue:any){

    this.http.createContactUs(vlaue).subscribe((res)=>{
    console.log(res,'thsi is the response of contact info');
    

    })

    // console.log(form.invalid, "form.invalid");
    // console.log(form.valid, "form.valid")   
  }
  test(){
    console.log("this is testing on button");
    
  }


}
