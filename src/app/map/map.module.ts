import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapEntryComponent } from './component/map-entry.component';
import { MapComponent } from './component/map/map.component';
import { MapRoutingModule } from './map.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  declarations: [
    MapComponent,
    MapEntryComponent
  ]
})
export class MapModule { }
