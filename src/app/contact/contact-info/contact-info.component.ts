import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formofcontacts( form:NgForm){
    console.log(form.invalid, "form.invalid");
    console.log(form.valid, "form.valid")   
  }
  test(){
    console.log("this is testing on button");
    
  }


}
