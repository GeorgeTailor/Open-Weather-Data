import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../service/geolocation.service';

@Component({
  selector: 'app-weather-widget-list',
  templateUrl: './weather-widget-list.component.html',
  styleUrls: ['./weather-widget-list.component.scss']
})
export class WeatherWidgetListComponent implements OnInit {

  widgetNumber: number = 5;

  widgets: Array<any> = [
    {'city': 'London'},
    {'city': 'Lviv'},
    {'city': 'Zurich'},
    {'city': 'Rome'},
    {'city': 'Barcelona'}
  ];

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(location => {
      this.geolocationService.getcityNameByLatLon(location.coords.latitude, location.coords.longitude).subscribe(
        res => {
          this.widgets.push({'city': res['address'].city});
        },
        error => {
          // do nothing, don't show geolocation weather
        }
      );
    }, () => {

    });
  }
}
