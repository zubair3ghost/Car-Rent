import { Component, Input, OnInit, HostListener, Renderer2, } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = ''
    usertokkken: string | null = this.userService.token
  menue: boolean = false

  constructor(
    public userService: UserService,
    private renderer: Renderer2,
    private router:Router

  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Close the menu when navigation starts
        this.menue = false;
      }
    });
   }
  @Input() hideHeaderFooter: boolean = false;


  ngOnInit(): void {
    if (this.userService.user) {
      this.username = this.userService.user.username;
    }


  }

  //for fixing navbar when we scroll the content to y axis 
  fixed: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.menue=false
    const navbar = document.querySelector('.nav-container') as HTMLElement; // Cast to HTMLElement
    const navbarOffsetTop = navbar.getBoundingClientRect().top;
    if (window.scrollY > navbarOffsetTop) {
      this.renderer.addClass(navbar, 'fixed');
      this.fixed = true;
    } else {
      this.renderer.removeClass(navbar, 'fixed');
      this.fixed = false;
    }
  }
//  for mouse listner when we click outside are inside the this block 
@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.user')) {
      this.menue = false;
    }
  }



// this is for showing full user pannel if user log in
  imgtoggle() {
    this.menue = !this.menue
  }
  

// this  is for  shwoing burger icons and cross icons
  show = false
  burgericon = true;
  toggle() {
    this.burgericon = !this.burgericon
    this.show = !this.show
  }

  //to logout user and delete the user data from localstorage
  loguot() {
    localStorage.clear()
  }

}
