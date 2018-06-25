import { Component, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../AbstractInputComponent';
import { ValidationFnService } from '../../service/ValidationFnService';

/**
 * Reusable textarea component.
 */
@Component({
    selector: 'js-textarea',
    templateUrl: 'textarea.component.html',
    styleUrls: ['./textarea-component.scss']
})
export class TextareaComponent extends AbstractInputComponent implements OnInit {

    /**
    * Empty constructor.
    */
    constructor(validationFnService: ValidationFnService) {
        super(validationFnService);
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.values && this.values.length > 0) {
            this._controlName.setValue(this.values[0]);
            this._initialValues = this.values;
        }
    }
}
