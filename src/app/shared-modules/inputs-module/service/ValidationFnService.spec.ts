import { ValidationFnService } from './ValidationFnService';
import { Validators, FormControl } from '@angular/forms';

describe('ValidationFnService', () => {
    let service: ValidationFnService;

    beforeEach(() => {
        service = new ValidationFnService();
    });

    it('works', () => {
        expect(service).toBeTruthy();
    });

    it('throws error when validationFn is unknown', () => {
        const rule = {
            validationFn: 'dummy',
            validationFnValue: '',
            validationMessageKey: 'key'
        };
        expect(() => service.mapValidationFunctionNameToFunctionObjects(rule)).toThrowError();
    });

        it('properly maps required', () => {
            const rule = {
                validationFn: 'required',
                validationFnValue: '',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.required));
        });
        it('properly maps min', () => {
            const rule = {
                validationFn: 'min',
                validationFnValue: '4',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.min));
        });
        it('properly maps max', () => {
            const rule = {
                validationFn: 'max',
                validationFnValue: '4',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.max));
        });
        it('properly maps email', () => {
            const rule = {
                validationFn: 'email',
                validationFnValue: '',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.email));
        });
        it('properly maps minlength', () => {
            const rule = {
                validationFn: 'minlength',
                validationFnValue: '4',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.minLength));
        });
        it('properly maps maxlength', () => {
            const rule = {
                validationFn: 'maxlength',
                validationFnValue: '1',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.maxLength));
        });
        it('properly maps pattern', () => {
            const rule = {
                validationFn: 'pattern',
                validationFnValue: '[0-9]',
                validationMessageKey: 'key'
            };
            const validator = service.mapValidationFunctionNameToFunctionObjects(rule);
            expect(JSON.stringify(validator)).toBe(JSON.stringify(Validators.pattern));
        });
});
