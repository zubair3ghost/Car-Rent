import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show=false
  icon=true;
  toggle(){
    this.icon= !this.icon
   
    this.show= !this.show
    console.log("toggle console is working");
  }

}
