import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { PopupMessageComponent } from './component/popup-message/popup-message.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LoaderComponent,
    PopupMessageComponent
  ],
  exports: [
    LoaderComponent,
    PopupMessageComponent,
    TranslateModule
  ]
})
export class SharedModule { }
