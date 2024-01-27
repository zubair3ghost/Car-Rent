import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

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
       show2=false
    togglePasswordVisibility1() {
      this.show2 = !this.show2;
    }
}
