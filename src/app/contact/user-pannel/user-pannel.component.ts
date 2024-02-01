import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pannel',
  templateUrl: './user-pannel.component.html',
  styleUrls: ['./user-pannel.component.scss']
})
export class UserPannelComponent implements OnInit {

  constructor() { }

  handleUpload(event: any){
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
  }

  ngOnInit(): void {
  }
  pannelform(val:any){
console.log("pannel from is working", val);

  }

}
