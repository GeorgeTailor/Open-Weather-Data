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

  weatherData;
  loading: boolean = true;
  loadingError: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.loadingError = false;
    let sub;
    if (this.widgetData.lat && this.widgetData.lon) {
      sub = this.getGeoPosInfo();
    } else if (this.widgetData.city) {
      sub = this.getCityInfo();
    }
    sub.pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      res => {
        console.log(res);
        this.weatherData = res;
      },
      error => {
        console.log(error);
        this.loadingError = true;
      }
    );
  }

  getCityInfo() {
    return this.weatherService.getCurrentWeatherDataForCity(this.widgetData.city);
  }

  getGeoPosInfo() {
    return this.weatherService.getCurrentWeatherDataForLatLon(this.widgetData.lat, this.widgetData.lon);
  }

}
