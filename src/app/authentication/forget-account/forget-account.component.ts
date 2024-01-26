import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-account',
  templateUrl: './forget-account.component.html',
  styleUrls: ['./forget-account.component.scss']
})
export class ForgetAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(value:any){
    console.log(value);
    
    }
    showPassword = false;
    
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }


}
