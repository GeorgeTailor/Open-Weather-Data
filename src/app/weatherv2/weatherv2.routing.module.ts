import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WeatherV2EntryComponent } from "./component/weatherv2-entry.component";
import { Weatherv2Component } from "./component/weatherv2/weatherv2.component";

const appRoutes: Routes = [
    {
        path: '',
        component: WeatherV2EntryComponent,
        children: [
            {
                path: 'current_weather',
                component: Weatherv2Component
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
export class WeatherV2RoutingModule { }