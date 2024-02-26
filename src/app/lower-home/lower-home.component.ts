import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lower-home',
  templateUrl: './lower-home.component.html',
  styleUrls: ['./lower-home.component.scss']
})
export class LowerHomeComponent implements OnInit {

  constructor(private http: HttpService,private userservice:UserService) { }
  baseurl:string=' '

  ngOnInit(): void {
    // this.baseurl=this.userservice.getbaseurl()
    this.getcar()
  }
  getvar: {

    price: number
    companyName: string,
    carType: string
    capcity: string,
    bannerImage: string
    capacity: string,
    carDesc: string
    fuelCapacity: string
  }[] = []; 

  


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


  //for styling pop up

}
