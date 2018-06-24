import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FavoritesEntryComponent } from "./component/favorites-entry.component";
import { FavoritesComponent } from "./component/favorites/favorites.component";

const appRoutes: Routes = [
    {
        path: '',
        component: FavoritesEntryComponent,
        children: [
            {
                path: 'current_fav',
                component: FavoritesComponent
            },
            {
                path: '',
                redirectTo: 'current_fav',
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
export class FavoritesRoutingModule { }