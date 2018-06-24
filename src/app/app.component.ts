import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadingRouteConfig = false;
  hiddenMenu: boolean = false;
  param = {value: 'world'};

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });

    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
 
    this.translate.use('en');
  }

  handleMenuToggle(menuHidden) {
    if (menuHidden) {
      this.hiddenMenu = true;
    } else {
      this.hiddenMenu = false;
    }
  }

}
