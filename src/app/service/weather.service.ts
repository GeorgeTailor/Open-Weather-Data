import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiEndpoints;
  apiKeyParam;

  constructor(private http: HttpClient) {
    this.apiEndpoints = {
      currentWeather: 'http://api.openweathermap.org/data/2.5/weather',
      forecastWeather: 'http://api.openweathermap.org/data/2.5/forecast'
    };
    this.apiKeyParam = '&APPID=802b1c394ea2b5a24cfc1b5e501ddcdf';
  }

  getCurrentWeatherDataForCity(cityName: string) {
    const url = this.apiEndpoints.currentWeather + '?units=metric&q=' + cityName + this.apiKeyParam;
    return this.http.get(url);
  }

  getForecastWeatherForCity(cityName: string) {
    const url = this.apiEndpoints.forecastWeather + '?units=metric&q=' + cityName + this.apiKeyParam;
    return this.http.get(url);
  }

}
