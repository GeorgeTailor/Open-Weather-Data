import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractInputComponent } from '../AbstractInputComponent';
import { ValidationFnService } from '../../service/ValidationFnService';

/**
 * Reusable input component .
 */
@Component({
    selector: 'js-input',
    templateUrl: 'input.component.html',
    styleUrls: ['./input-component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class InputComponent extends AbstractInputComponent implements OnInit {

    /**
    * Type of input according to web standards. Possible values are: number, text, email, tel etc.
    */
    @Input('type') type: string;

    /**
    * Empty constructor.
    */
    constructor(validationFnService: ValidationFnService) {
        super(validationFnService);
    }

    /**
     * When type of the input is not defined, the default type will be text.
     */
    ngOnInit() {
        super.ngOnInit();
        if (!this.type) {
            this.type = 'text';
        }
        if (this.values && this.values.length > 0) {
            this._controlName.setValue(this.values[0]);
            this._initialValues = this.values;
        }
    }
}
