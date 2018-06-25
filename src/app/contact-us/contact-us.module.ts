import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contact-us.routing.module';
import { ContactUsEntryComponent } from './component/contact-us-entry.component';
import { ContactUsFormComponent } from './component/contact-us-form/contact-us-form.component';
import { InputsModule } from '../shared-modules/inputs-module/InputsModule';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    InputsModule,
    SharedModule
  ],
  declarations: [
    ContactUsEntryComponent,
    ContactUsFormComponent
  ]
})
export class ContactUsModule { }
