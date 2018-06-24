import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {
        path: 'weather',
        loadChildren: "../app/weather/weather.module#WeatherModule"
    },
    {
        path: 'map',
        loadChildren: "../app/map/map.module#MapModule"
    },
    {
        path: 'historical-data',
        loadChildren: "../app/historical-data/historical-data.module#HistoricalDataModule"
    },
    {
        path: 'favorites',
        loadChildren: "../app/favorites/favorites.module#FavoritesModule"
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }