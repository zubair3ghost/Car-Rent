import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
// import { PopUpComponent } from '../pop-up/pop-up.component';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lower-home',
  templateUrl: './lower-home.component.html',
  styleUrls: ['./lower-home.component.scss']
})
export class LowerHomeComponent implements OnInit {

  constructor(
    private http: HttpService,
    private userservice:UserService,
    // private matdialog:MatDialog
    ) { }
  baseurl:string=' '

  ngOnInit(): void {
    // this.baseurl=this.userservice.getbaseurl()
    this.getcar()
  }

  // this  is for pop up showing method is in pending because of the  problem so kal krai gai
  // opendialogue(){
  //   console.log('here is open diallogue is working');
    
  //   this.matdialog.open(PopUpComponent,{
  //     width:"300px",
  //     height:"300px",
  //     panelClass: 'my-custom-dialog' 
      
  //   })    
  //     }



  
  getvar: any[] = [];
  getcar() {
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


  //this is favourite and unfourite on toggle condition base
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
   //toggle for heart
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
