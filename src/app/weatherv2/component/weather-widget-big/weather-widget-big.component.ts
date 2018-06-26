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
    this.windDirection = this.weatherService.getWindDirection(this.widgetData.wind.deg);
    this.weatherCondition = this.weatherService.getWeatherCondition(this.widgetData.weather[0].id);
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
      element.weatherCondition = this.weatherService.getWeatherCondition(element.weather[0].id);
      element.main.temp = parseInt(element.main.temp);
    });
    this.forecastData = res;
  }

}
