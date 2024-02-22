import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'car-rent';

  showHeader: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    
    

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Accessing the data property directly to check if showHeader is set
      this.showHeader = !this.activatedRoute.firstChild?.snapshot.data['showHeader'];
    });
  }











// this code is for  single component but when we have multiple comoponent then we dont apply this instead we apply upper method
  // showHeader: boolean = false;

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Check if the current route is '/sign-up' and set showHeader accordingly
  //       this.showHeader = !event.url.includes('/sign-up');
  //     }
  //   });
  // }
    

 
       
}
