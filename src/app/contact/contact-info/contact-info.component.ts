import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(
    private http:HttpService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  formofcontacts( vlaue:any){

    this.http.createContactUs(vlaue).subscribe((res:any)=>{
  console.log(res.data,"here is the result of contact");
  this.router.navigate(['/'])
    })

    // console.log(form.invalid, "form.invalid");
    // console.log(form.valid, "form.valid")   
  }
  test(){
    console.log("this is testing on button");
    
  }


}
