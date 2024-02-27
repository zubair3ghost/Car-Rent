import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(  
    private route:ActivatedRoute,
    private http :HttpService,
    private user: UserService
   
  ) { }



  data: any;

  ngOnInit(): void {
     this.geteighthtcar()

    const carId = this.route.snapshot.paramMap.get('id');
    if(carId) this.getCarById(carId)
  }
   //here we get car by id  only single car
  getCarById(id: string){
    this.http.getcarbyid(id).subscribe({
      next: (response: any) => {
        // console.log(response);

        const { data } = response;
        // console.log(data.carName,'this is car name of detail page');
        
        if(data){
          let images: string[] = [];
          let mainImage: string = this.user.getbaseurl(data.images[0]);
           data.images.forEach((item: any, index: number) => {
            if(index){
              images.push(this.user.getbaseurl(item));
            }
          })
          this.data = {...data, images, mainImage};
          console.log(this.data, 'this.data')
        }
        
      }
    })
  }

   responsedata:any[]=[]
  geteighthtcar(){    
    this.http.geteight().subscribe((res:any)=>
    {

      this.responsedata=res.data
      console.log(this.responsedata,'here is the proper data ');    
    })
  }
  
  


  //this is just testing static array for  temporary  images for design
  car =[
   
    { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },


    { name:"Honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
    { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
    { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
    { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },
    { name:"Honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
    { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
    { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
    { name:"swift",liter:'90L',manual:"manual",price:"4000/",people:"4" },
    { name:"Honda",liter:'80L',manual:"manual",price:"8000/",people:"3" },
    { name:"Mehran",liter:'70L',manual:"manual",price:"5000/",people:"5" },
    { name:"Frarri",liter:'70L',manual:"manual",price:"3000/" ,people:"4"},
 ]



 //toggle for heart
 heart:boolean=true
 toggleheart(){
this.heart=!this.heart
console.log("heart is workings");


 }

}
