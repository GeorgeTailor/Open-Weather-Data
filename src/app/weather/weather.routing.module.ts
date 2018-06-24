import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CityForecastComponent } from "./component/city-forecast/city-forecast.component";
import { WeatherWidgetListComponent } from "./component/weather-widget-list/weather-widget-list.component";
import { WeatherEntryComponent } from "./component/weather-entry/weather.entry.component";

const appRoutes: Routes = [
    {
        path: '',
        component: WeatherEntryComponent,
        children: [
            { 
                path: 'city/forecast/:name', 
                component: CityForecastComponent
            },
            {
                path: 'current_weather',
                component: WeatherWidgetListComponent
            },
            {
                path: '',
                redirectTo: 'current_weather',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class WeatherRoutingModule { }