import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalDataRoutingModule } from './historical-data.routing.module';
import { HistoricalDataEntryComponent } from './component/historical-data-entry.component';
import { CurrentDataComponent } from './component/current-data/current-data.component';

@NgModule({
  imports: [
    CommonModule,
    HistoricalDataRoutingModule
  ],
  declarations: [
    CurrentDataComponent,
    HistoricalDataEntryComponent
  ]
})
export class HistoricalDataModule { }
