import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-list',
  templateUrl: './weather-widget-list.component.html',
  styleUrls: ['./weather-widget-list.component.scss']
})
export class WeatherWidgetListComponent implements OnInit {

  widgetNumber: number = 5;

  widgets: Array<any> = [
    {
      'city': 'London'
    },
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

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(location => {
      this.widgets.push(
        {
          'city': 'Current Position',
          'lat': location.coords.latitude,
          'lon': location.coords.longitude
        }
      );
    });
  }

  goToForecast(widgetData) {
    console.log(widgetData);
  }

}
