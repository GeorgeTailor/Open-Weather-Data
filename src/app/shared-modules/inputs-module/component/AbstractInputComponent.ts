import { ValidationFnService } from '../service/ValidationFnService';
import { Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

export class AbstractInputComponent implements OnInit {

    /**
    * Answer values, either predefined selected answers or given by the user.
    */
    @Input('values') values: Array<any>;

    /**
    * <b>Required.</b>
    *
    * Target parent form group to properly initialize controls.
    */
    @Input('parentFormGroup') parentFormGroup: FormGroup;

    /**
    * <b>Required.</b>
    *
    * Name of the control which is defined in the parent form group.
    */
    @Input('controlName') controlName: string;

    /**
    * Input placeholder that should be displayed.
    */
    @Input('placeholder') placeholder: string;

    /**
    * <b>Optional.</b>
    *
    * Array of {@link ValidationRule}.
    * If defined, each custom https://angular.io/api/forms/Validators ValidationFn is added to the control.
    * When validation fails, the <b>CustomValidationType.validationMessage</b> is shows as error.
    */
    @Input('jsValidators') jsValidators: Array<any>;

    /**
    * <b>AbstractControl</b> for validation.
    */
    _controlName: AbstractControl;


    /**
     * Emmited when the the user has entered/changed the value of the input.
     */
    @Output('submitValue') submitValue = new EventEmitter<any>();

    _initialValues: Array<any>;

    /**
     * Injecting {@link ValidationFnService} inside constructor.
     */
    constructor(private validationFnService: ValidationFnService) { }

    /**
    * Upon initialization checks whether:
    *
    * 1) jsValidators of type Array<ValidationRule> is present as a component input,
    * if so adds it to parentFormGroup input parameter for validation.
    *
    * Additionally subscribes to value change of the input for real time save.
    */
    ngOnInit(): void {
        this._initialValues = [];
        const validators = [];
        if (this.jsValidators) {
            this.jsValidators.forEach(element => {
                if (typeof element.validationFn === 'string') {
                    try {
                        validators.push(this.validationFnService.mapValidationFunctionNameToFunctionObjects(element));
                    } catch (e) {
                        console.error(e);
                    }
                }
            });
        }
        this.parentFormGroup.addControl(this.controlName, new FormControl('', validators));
        this._controlName = this.parentFormGroup.controls[this.controlName];
    }
}
