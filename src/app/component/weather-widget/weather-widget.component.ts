import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  @Input('widgetData') widgetData;
  @Input('showButton') showButton = true;

  windDirection;
  weatherCondition;

  loading: boolean = false;
  loadingError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.widgetData.main.temp = parseInt(this.widgetData.main.temp);
    console.log(this.widgetData);
    this.windDirection = this.getWindDirection();
    this.weatherCondition = this.getWeatherCondition();
  }

  getCityInfo() {
    return this.weatherService.getCurrentWeatherDataForCity(this.widgetData.city);
  }

  getWeatherCondition() {
    const code = this.widgetData.weather[0].id;
    if (code < 300) {
      return 'wi-day-thunderstorm';
    }
    if (code < 322) {
      return 'wi-showers';
    }
    if (code < 532) {
      return 'wi-rain'
    }
    if (code < 623) {
      return 'wi-day-snow'
    }
    if (code === 800) {
      return 'wi-day-sunny'
    }
    if (code > 800) {
      return 'wi-day-cloudy'
    }
  }

  // as per https://gist.github.com/smallindine/d227743c28418f3426ed36b8969ded1a
  getWindDirection() {
    const deg = this.widgetData.wind.deg;
    if ((deg > 0 && deg < 33.75) || deg > 348.74)  {
      return 'N';
    }
    if (deg > 33.74 && deg < 78.75) {
      return 'NE';
    }
    if (deg > 78.74 && deg < 123.75) {
      return 'E';
    }
    if (deg > 123.74 && deg < 168.75) {
      return 'SE';
    }
    if (deg > 168.74 && deg < 213.75) {
      return 'S';
    }
    if (deg > 213.74 && deg < 258.75) {
      return 'SW';
    }
    if (deg > 258.74 && deg < 303.75) {
      return 'W';
    }
    if (deg > 303.74 && deg < 348.75) {
      return 'NW';
    }
  }

}
