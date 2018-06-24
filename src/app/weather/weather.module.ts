import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './component/weather-widget/weather-widget.component';
import { CityForecastComponent } from './component/city-forecast/city-forecast.component';
import { WeatherWidgetListComponent } from './component/weather-widget-list/weather-widget-list.component';
import { WeatherService } from './service/weather.service';
import { GeolocationService } from './service/geolocation.service';
import { WeatherRoutingModule } from './weather.routing.module';
import { RouterModule } from '@angular/router';
import { WeatherEntryComponent } from './component/weather-entry/weather.entry.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    WeatherService,
    GeolocationService
  ],
  declarations: [
    WeatherWidgetComponent,
    CityForecastComponent,
    WeatherWidgetListComponent,
    WeatherEntryComponent
  ]
})
export class WeatherModule { }
