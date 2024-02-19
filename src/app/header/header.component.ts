import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = ''

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.user){
      this.username = this.userService.user.username;
    }
  }
 
  menue:boolean=false
imgtoggle(){
this.menue=!this.menue
// console.log("toggel  of image  is working");

}




  show=false
  icon=true;
  toggle(){
    this.icon= !this.icon
   
    this.show= !this.show
    // console.log("toggle console is working");
  }

  loguot(){
    localStorage.clear()
  }

}
