import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hidden: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 500) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
    this.menuToggle.emit(this.hidden);
  }

  @Output() menuToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 500) {
      this.hidden = true;
      this.menuToggle.emit(true);
    }
  }

  toggleMenu() {
    this.hidden = !this.hidden;
    this.menuToggle.emit(this.hidden);
  }

}
