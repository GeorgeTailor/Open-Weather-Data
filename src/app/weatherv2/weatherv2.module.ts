import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weatherv2Component } from './component/weatherv2/weatherv2.component';
import { WeatherV2EntryComponent } from './component/weatherv2-entry.component';
import { WeatherV2RoutingModule } from './weatherv2.routing.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherWidgetBigComponent } from './component/weather-widget-big/weather-widget-big.component';

@NgModule({
  imports: [
    CommonModule,
    WeatherV2RoutingModule,
    SharedModule
  ],
  declarations: [
    Weatherv2Component,
    WeatherWidgetBigComponent,
    WeatherV2EntryComponent
  ]
})
export class Weatherv2Module { }
