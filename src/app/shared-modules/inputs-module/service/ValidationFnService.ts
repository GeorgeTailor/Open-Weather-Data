import { Injectable } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

/**
 *
 * Holds functions for validation rules.
 */
@Injectable()
export class ValidationFnService {

    /**
     * Mapper function that translates string names of validation functions to Angular validation objects.
     */
    mapValidationFunctionNameToFunctionObjects(validationRule): ValidatorFn {
        switch (validationRule.validationFn) {
            case 'required':
                return Validators.required;
            case 'min':
                return Validators.min(validationRule.validationFnValue);
            case 'max':
                return Validators.max(validationRule.validationFnValue);
            case 'email':
                return Validators.email;
            case 'minlength':
                return Validators.minLength(validationRule.validationFnValue);
            case 'maxlength':
                return Validators.maxLength(validationRule.validationFnValue);
            case 'pattern':
                return Validators.pattern(validationRule.validationFnValue);
            default:
                throw new Error('provided validationRule does not have validationFn known to module');
        }
    }
}
