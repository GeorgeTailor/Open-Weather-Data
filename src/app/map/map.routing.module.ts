import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MapEntryComponent } from "./component/map-entry.component";
import { MapComponent } from "./component/map/map.component";

const appRoutes: Routes = [
    {
        path: '',
        component: MapEntryComponent,
        children: [
            {
                path: 'current_map',
                component: MapComponent
            },
            {
                path: '',
                redirectTo: 'current_map',
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
export class MapRoutingModule { }