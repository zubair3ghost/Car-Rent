import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Output()  submitevent=new EventEmitter<any>() 
  //  submit( value:any){
  //   console.log(value);
  //   this.submitevent.emit(value)
    
  // }

}
