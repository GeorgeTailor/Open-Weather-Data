import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './component/weather-widget/weather-widget.component';
import { LoaderComponent } from './component/loader/loader.component';
import { AppRoutingModule } from './app.router.module';
import { CityForecastComponent } from './component/city-forecast/city-forecast.component';
import { WeatherWidgetListComponent } from './component/weather-widget-list/weather-widget-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { GeolocationService } from './service/geolocation.service';
import { WeatherGridRowComponent } from './component/weather-grid-row/weather-grid-row.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    LoaderComponent,
    CityForecastComponent,
    WeatherWidgetListComponent,
    PageNotFoundComponent,
    WeatherGridRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
