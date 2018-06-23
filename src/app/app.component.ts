import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  widgetNumber: number = 5;

  widgets: Array<any> = [
    {
      'city': 'London'
    }
    ,
    {
      'city': 'Lviv'
    },
    {
      'city': 'Zurich'
    },
    {
      'city': 'Rome'
    },
    {
      'city': 'Barcelona'
    }
  ];

  ngOnInit() {
  }

}
