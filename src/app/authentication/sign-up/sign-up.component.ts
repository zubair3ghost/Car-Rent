import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpService,private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }


signUp(value: any){
  console.log(value);
  this.http.signUp(value).subscribe({
    next: (response: any) => {
      console.log(response,"response");
      const { data } = response;
      if(data) this.userService.user = data;
    this.router.navigate(['/otp'])
      
    }
  })
}
showPassword = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

}
 