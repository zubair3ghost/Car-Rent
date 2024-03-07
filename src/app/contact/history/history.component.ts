import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(
    private http:HttpService,
    private userservice:UserService
    
  ) { }

  ngOnInit(): void {
    this.history()
  }

  getvar: any[] = [];
  history(){
    this.http.history().subscribe((res:any)=>{
      console.log(res,"there is a res of history");
      
      this.getvar = res.data.map((car: any) => {
              return{
                ...car,
                bannerImage: this.userservice.getbaseurl(car.bannerImage)
              }
            });     
    
    })
  }

}

// getvar: any[] = [];
// getAllCar() {
//   console.log("log of all car method  is working");

//   this.http.getAllCar().subscribe((res: any) => {

    
//     this.getvar = res.data.map((car: any) => {
//       return{
//         ...car,
//         bannerImage: this.userservice.getbaseurl(car.bannerImage)
//       }
//     });     
//     console.log(this.getvar,"here is baseurl for image apo");
    


//     // for getting api data and storing it in a variable

  


//   })
// }