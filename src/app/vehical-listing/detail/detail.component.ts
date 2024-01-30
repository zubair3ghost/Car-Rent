import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

}
