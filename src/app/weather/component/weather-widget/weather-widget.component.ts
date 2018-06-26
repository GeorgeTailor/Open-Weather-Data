import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../../shared/service/weather.service';

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
    this.windDirection = this.weatherService.getWindDirection(this.widgetData.wind.deg);
    this.weatherCondition = this.weatherService.getWeatherCondition(this.widgetData.weather[0].id);
  }

  getCityInfo() {
    return this.weatherService.getCurrentWeatherDataForCity(this.widgetData.city);
  }

}
