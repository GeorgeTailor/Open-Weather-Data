import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../service/weather.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  weatherData;
  loading: boolean = true;
  loadingError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.weatherService.getForecastWeatherForCity(params.name).pipe(
        finalize(() => this.loading = false)
      ).subscribe(
        res => {this.processResponse(res);},
        error => {this.loadingError = true;}
      );
    });
  }

  processResponse(res) {
    res.list.forEach(element => {
      const date = new Date(element.dt_txt).toLocaleString('en-GB');
      element.dt = date.substring(0, date.length - 3);
    });
    this.weatherData = res;
    console.log(this.weatherData);
  }
}
