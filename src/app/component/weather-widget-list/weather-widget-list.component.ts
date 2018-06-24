import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../service/geolocation.service';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-widget-list',
  templateUrl: './weather-widget-list.component.html',
  styleUrls: ['./weather-widget-list.component.scss']
})
export class WeatherWidgetListComponent implements OnInit {

  widgetNumber: number = 5;

  citiesIds = [2643743, 3128760, 2657896, 6539761, 3128760];

  widgets: Array<any> = [
    // {'city': 'London'}, //2643743
    // {'city': 'Lviv'}, //3128760
    // {'city': 'Zurich'}, //2657896
    // {'city': 'Rome'}, //6539761
    // {'city': 'Barcelona'} //3128760
  ];

  constructor(private geolocationService: GeolocationService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.getGeolocationCity();
    this.getListWeatherData();
  }

  getListWeatherData() {
    this.weatherService.getCurrentWeatherDataForCityGroup(...this.citiesIds).subscribe(
      res => {
        console.log(res);
        this.widgets.push(...res['list']);
      },
      error => {
        console.log(error);
      });
  }

  getGeolocationCity() {
    navigator.geolocation.getCurrentPosition(location => {
      this.geolocationService.getcityNameByLatLon(location.coords.latitude, location.coords.longitude).subscribe(
        city => {
          this.weatherService.getCurrentWeatherDataForCity(city['address'].city).subscribe(
            res => {this.widgets.push(res);}
          )
        },
        error => { 
          // do nothing, don't show geolocation weather
        }
      );
    }, () => {

    });
  }
}
