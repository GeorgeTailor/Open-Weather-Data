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
      currentGroupWeather: 'http://api.openweathermap.org/data/2.5/group',
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

  getCurrentWeatherDataForCityGroup(...cityIds: number[]) {
    const url = this.apiEndpoints.currentGroupWeather + '?id=' + cityIds + '&units=metric' + this.apiKeyParam;
    return this.http.get(url);
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
  getWindDirection(deg) {
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
