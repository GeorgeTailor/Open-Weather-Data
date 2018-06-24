import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesEntryComponent } from './component/favorites-entry.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ],
  declarations: [
    FavoritesEntryComponent,
    FavoritesComponent
  ]
})
export class FavoritesModule { }
