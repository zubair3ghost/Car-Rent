import { Component, Input, OnInit, HostListener, Renderer2, } from '@angular/core';


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
    private renderer: Renderer2

  ) { }
  @Input() hideHeaderFooter: boolean = false;


  ngOnInit(): void {
    if (this.userService.user) {
      this.username = this.userService.user.username;
    }


  }

  //for fixing navbar 
  fixed: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
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
 

  imgtoggle() {
    this.menue = !this.menue
  }
  
  show = false
  icon = true;
  toggle() {
    this.icon = !this.icon

    this.show = !this.show
    // console.log("toggle console is working");
  }

  loguot() {
    localStorage.clear()
  }

}
