import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(
    private http:HttpService,
    private userservice:UserService

  ) { }

  ngOnInit(): void {
    this.getAllCar()
  }
  getvar: any[] = [];
  getAllCar() {
    console.log("log of all car method  is working");

    this.http.getAllCar().subscribe((res: any) => {

      
      this.getvar = res.data.map((car: any) => {
        return{
          ...car,
          bannerImage: this.userservice.getbaseurl(car.bannerImage)
        }
      });     
      console.log(this.getvar,"here is baseurl for image apo");
      
 

      // for getting api data and storing it in a variable

    


    })
  }

  favourite(id:any){
    this.http.favoritecar(id).subscribe((res)=>{
        console.log(res,'here  is favourite api id');
        
    })
   } 
   unfavourite(id:any){
    this.http.unfavoritecar(id).subscribe((res)=>{
        console.log(res,'here  is favourite api id');
        
    })
   }
  heart:boolean=true
  toggleheart(item:any){
   const carId = item._id;
  
 if(item.isFavourite==false){
   this.favourite({carId})
 }else{
   this.unfavourite({carId})
 }
  
 item.isFavourite = !item.isFavourite;
 
 // 
 
  }

}
