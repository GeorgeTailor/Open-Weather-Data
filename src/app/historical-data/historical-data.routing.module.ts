import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HistoricalDataEntryComponent } from "./component/historical-data-entry.component";
import { CurrentDataComponent } from "./component/current-data/current-data.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HistoricalDataEntryComponent,
        children: [
            {
                path: 'current_data',
                component: CurrentDataComponent
            },
            {
                path: '',
                redirectTo: 'current_data',
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
export class HistoricalDataRoutingModule { }