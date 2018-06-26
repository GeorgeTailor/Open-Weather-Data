import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './component/weather-widget/weather-widget.component';
import { CityForecastComponent } from './component/city-forecast/city-forecast.component';
import { WeatherWidgetListComponent } from './component/weather-widget-list/weather-widget-list.component';
import { WeatherRoutingModule } from './weather.routing.module';
import { RouterModule } from '@angular/router';
import { WeatherEntryComponent } from './component/weather-entry/weather.entry.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherChartComponent } from './component/weather-chart/weather-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    RouterModule,
    SharedModule,
    NgxChartsModule
  ],
  declarations: [
    WeatherWidgetComponent,
    CityForecastComponent,
    WeatherWidgetListComponent,
    WeatherEntryComponent,
    WeatherChartComponent
  ]
})
export class WeatherModule { }
