import { Component, OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { WeatherService } from '../../../shared/service/weather.service';


@Component({
  selector: 'app-weather-widget-big',
  templateUrl: './weather-widget-big.component.html',
  styleUrls: ['./weather-widget-big.component.scss']
})
export class WeatherWidgetBigComponent implements OnInit {

  @Input('widgetData') widgetData;

  weatherCondition;
  windDirection;
  showForecast: boolean = false;
  loading = false;
  loadingError: boolean = false;
  forecastData;
 
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.widgetData.main.temp = parseInt(this.widgetData.main.temp);
    this.windDirection = this.getWindDirection();
    this.weatherCondition = this.getWeatherCondition(this.widgetData.weather[0].id);
  }

  getWeatherCondition(code) {
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

  toggleForecast(event) {
    this.showForecast = !this.showForecast;

    this.weatherService.getForecastWeatherForCity(this.widgetData.name).pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      res => {this.processResponse(res);},
      error => {this.loadingError = true;}
    );
  }

  processResponse(res) {
    res.list.forEach(element => {
      const date = new Date(element.dt_txt).toLocaleString('en-GB');
      element.dt = date.substring(0, date.length - 3);
      element.weatherCondition = this.getWeatherCondition(element.weather[0].id);
      element.main.temp = parseInt(element.main.temp);
    });
    this.forecastData = res;
  }

}
