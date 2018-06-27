import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../../shared/service/geolocation.service';
import { WeatherService } from '../../../shared/service/weather.service';

@Component({
  selector: 'app-weatherv2',
  templateUrl: './weatherv2.component.html',
  styleUrls: ['./weatherv2.component.scss']
})
export class Weatherv2Component implements OnInit {

  citiesIds = [2643743, 3128760, 2657896, 6539761, 703448];
  widgets = [];
  idx = 0;

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

  moveCarouselLeft(event) {
    if (this.idx === 0) {
      this.idx = -(this.widgets.length-1)*100;//this.widgets.length - 1;
    } else {
      this.idx += 100;//this.idx - 1;
    }
  }

  moveCarouselRight(event) {
    if (Math.abs(this.idx / 100) === this.widgets.length - 1) {
      this.idx = 0;
    } else {
      this.idx -= 100;// this.idx + 1;
    }
  }

}
