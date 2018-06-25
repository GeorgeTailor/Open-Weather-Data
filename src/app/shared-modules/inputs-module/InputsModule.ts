import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './component/js-textarea/textarea.component';
import { InputComponent } from './component/js-input/input.component';
import { CommonModule } from '@angular/common';
import { ValidationFnService } from './service/ValidationFnService';
import { SingleErrorPipe } from './pipe/single-error-pipe.pipe';
import { SharedModule } from '../../shared/shared.module';


/**
 * NgModule which encapsulates basic input field like textarea, input, date selector etc.
 */
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    TextareaComponent,
    InputComponent,
    SingleErrorPipe
  ],
  exports: [
    TextareaComponent,
    InputComponent
  ],
  providers: [
    ValidationFnService
  ]
})
export class InputsModule {
}
