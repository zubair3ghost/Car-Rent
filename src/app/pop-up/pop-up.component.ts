import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor( 
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  @Output()  submitevent=new EventEmitter<any>() 
   submit( value:any){
    console.log(value);
    this.submitevent.emit(value)
    
  }

 
  @Output() closePopup = new EventEmitter<void>(); // Event to signal popup closing

  onClick(event: Event) {
    event.stopPropagation();
    this.closePopup.emit(); // Emit the event
  }

}
