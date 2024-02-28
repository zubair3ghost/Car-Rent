import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.scss']
})
export class RequiredComponent implements OnInit {

  currentPage: number = 1;
  totalItems: number= 26;
  // itemsPerPage: number = 15;
  itemsPerPage: number = 9;

  constructor(
    private http:HttpService,
    private user:UserService
  ) { }

  ngOnInit(): void {
    this.geteighthtcar()
  }
car =[
   
     { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },
     { name:"honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
     { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
     { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
     { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },
     { name:"honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
     { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
     { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
     { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },
     { name:"honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
     { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
     { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
  ]

  responsedata:any[]=[]

  geteighthtcar(){    
    this.http.geteight().subscribe((res:any)=>
    {
       
      this.responsedata =res.data.map((car: any) => {
        return{
          ...car,
          bannerImage: this.user.getbaseurl(car.bannerImage)
        }
      }); 
      // console.log(this.responsedata,'here is the proper data ');    
    })
  }

  pageChange(page: number){
    this.currentPage = page;
    
  }



  //this is for heart toggle
  heart:boolean=true

  toggleheart(){
this.heart=!this.heart
console.log("heart is workings");


  }

}
