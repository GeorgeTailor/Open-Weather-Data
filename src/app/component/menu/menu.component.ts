import { Component, OnInit, HostListener, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterContentInit {

  hidden: boolean = false;

  idx: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 580) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.menuToggle.emit(this.hidden);
  }

  @Output() menuToggle: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkWindowWidth();
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkWindowWidth();
        this.checkCurrentMenuIdx();
      }
    });
  }

  ngAfterContentInit() {
    this.checkCurrentMenuIdx();
  }

  checkCurrentMenuIdx() {
    setTimeout(() => {
      const menuItems = document.getElementsByClassName('menu-item');
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].classList.contains('active-link')){
          this.idx = i;
        }
      }
    }, 110);
  }

  checkWindowWidth() {
    if (window.innerWidth < 500) {
      this.hidden = true;
      this.menuToggle.emit(true);
    }
  }

  toggleMenu(event) {
    event.stopPropagation();
    this.hidden = !this.hidden;
    this.menuToggle.emit(this.hidden);
  }

  changeColor(event, colour) {
    if (colour === 'standard') {
      document.documentElement.style.setProperty('--headerTextColor', '#373737');
      document.documentElement.style.setProperty('--headerColor', '#FFFFFF');
      document.documentElement.style.setProperty('--textColor', '#373737');
      document.documentElement.style.setProperty('--textColorDiff', '#373737');
      document.documentElement.style.setProperty('--backgroundFirst', '#EFEFEF');
      document.documentElement.style.setProperty('--backgroundSecond', '#F4F4F4');
      document.documentElement.style.setProperty('--backgroundThird', '#373737');
    } else if (colour === 'colours') {
      document.documentElement.style.setProperty('--headerTextColor', '#000000');
      document.documentElement.style.setProperty('--headerColor', '#EC576B');
      document.documentElement.style.setProperty('--textColor', '#000000');
      document.documentElement.style.setProperty('--textColorDiff', '#000000');
      document.documentElement.style.setProperty('--backgroundFirst', '#FFFFFF');
      document.documentElement.style.setProperty('--backgroundSecond', '#4EC5C1');
      document.documentElement.style.setProperty('--backgroundThird', '#FF533D');
    } else if (colour === 'coffee') {
      document.documentElement.style.setProperty('--headerTextColor', '#EA5B28');
      document.documentElement.style.setProperty('--headerColor', '#FFFCF2');
      document.documentElement.style.setProperty('--textColor', '#252422');
      document.documentElement.style.setProperty('--textColorDiff', '#EA5B28');
      document.documentElement.style.setProperty('--backgroundFirst', '#CCC5B9');
      document.documentElement.style.setProperty('--backgroundSecond', '#FFFCF2');
      document.documentElement.style.setProperty('--backgroundThird', '#403D39');
    }
  } 

}
