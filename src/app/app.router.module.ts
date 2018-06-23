import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetListComponent } from "./component/weather-widget-list/weather-widget-list.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { CityForecastComponent } from "./component/city-forecast/city-forecast.component";

const appRoutes: Routes = [
    { 
        path: 'city/forecast/:name', 
        component: CityForecastComponent
    },
    {
        path: 'main',
        component: WeatherWidgetListComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ]
})
export class AppRoutingModule { }