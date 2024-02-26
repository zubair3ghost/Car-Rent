import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  constructor( private http:HttpService,private route:Router) { }

  ngOnInit(): void {
  }
  submit(value:any){

    console.log(value,"this  is pass and confirm pass value");
    
     let password =value.newPassword
     let confirmpass= value.confirmPassword
     delete value.confirmPassword;
     console.log(value, 'value not after deleting')
console.log(password,'this is test password');
console.log(confirmpass,'this is test confirmpassword');




    let email=localStorage.getItem('email')
    console.log(email,'this is just localemail');
    
    
    // console.log(value,"this is submit value before api hitting");
     this.http.newpassword(value).subscribe((response)=>{
     console.log(response,"this is api responswe from newpassword");
     this.route.navigate([''])
     

      
    })


    
    }




    //this is for  toggle method 
    showPassword = false;
    
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
       show2=false
    togglePasswordVisibility1() {
      this.show2 = !this.show2;
      
      
    }
}
