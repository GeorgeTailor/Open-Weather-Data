import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    TranslateModule
  ]
})
export class SharedModule { }
