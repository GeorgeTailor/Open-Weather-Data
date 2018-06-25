import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFnService } from '../../service/ValidationFnService';
import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { SingleErrorPipe } from '../../pipe/single-error-pipe.pipe';
import { AbstractInputComponent } from '../AbstractInputComponent';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    const requiredMessage = 'Value is required';
    const minLengthMessage = 'Min length is not met';
    const maxLengthMessage = 'Max length is not met';
    const defaultValue = 'default value';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            providers: [ValidationFnService],
            declarations: [
                InputComponent,
                SingleErrorPipe
            ]
        }).compileComponents();
    }));

    it('should create', () => {
        initValidationRuleAndComponent(null, '', 'text');
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            spyOn(AbstractInputComponent.prototype, 'ngOnInit');
            component.ngOnInit();
            expect(AbstractInputComponent.prototype.ngOnInit).toHaveBeenCalled();
        });
    });

    function initValidationRuleAndComponent(rule, inputValue, type) {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.parentFormGroup = new FormGroup({});
        component.controlName = '1';
        component.jsValidators = [];
        component.placeholder = '';

        if (rule) {
            component.jsValidators.push(rule);
        }
        component.type = type;
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css('input')).nativeElement;
        input.value = inputValue;
        input.dispatchEvent(new Event('input'));

        const control = component.parentFormGroup.controls[component.controlName];
        control.markAsTouched({ onlySelf: true });

        fixture.detectChanges();
    }

    it('should validate component to be required', (done) => {
        const rule = {
            validationFn: 'required',
            validationFnValue: '',
            validationMessageKey: requiredMessage
        };
        initValidationRuleAndComponent(rule, '', 'text');

        const de = fixture.debugElement.query(By.css('.errorMsg'));
        if (null === de) {
            done.fail('Element with error message did not show up');
            return;
        }
        const el = de.nativeElement;

        expect(component.parentFormGroup.controls[component.controlName].invalid).toBeTruthy();
        expect(el.textContent).toContain(requiredMessage);
        done();
    });

    it('should validate component minLength', (done) => {
        const rule = {
            validationFn: 'minlength',
            validationFnValue: 4,
            validationMessageKey: minLengthMessage
        };
        initValidationRuleAndComponent(rule, 'a', 'text');

        const de = fixture.debugElement.query(By.css('.errorMsg'));
        if (null === de) {
            done.fail('Element with error message did not show up');
            return;
        }
        const el = de.nativeElement;

        expect(component.parentFormGroup.controls[component.controlName].invalid).toBeTruthy();
        expect(el.textContent).toContain(minLengthMessage);
        done();
    });
    it('should validate component maxLength', (done) => {
        const rule = {
            validationFn: 'maxlength',
            validationFnValue: 2,
            validationMessageKey: maxLengthMessage
        };
        initValidationRuleAndComponent(rule, 'aaa', 'text');

        const de = fixture.debugElement.query(By.css('.errorMsg'));
        if (null === de) {
            done.fail('Element with error message did not show up');
            return;
        }
        const el = de.nativeElement;

        expect(component.parentFormGroup.controls[component.controlName].invalid).toBeTruthy();
        expect(el.textContent).toContain(maxLengthMessage);
        done();
    });

    it('should validate component minValue', (done) => {
        const rule = {
            validationFn: 'min',
            validationFnValue: 4,
            validationMessageKey: minLengthMessage
        };
        initValidationRuleAndComponent(rule, 1, 'number');

        const de = fixture.debugElement.query(By.css('.errorMsg'));
        if (null === de) {
            done.fail('Element with error message did not show up');
            return;
        }
        const el = de.nativeElement;

        expect(component.parentFormGroup.controls[component.controlName].invalid).toBeTruthy();
        expect(el.textContent).toContain(minLengthMessage);
        done();
    });

    it('should validate component maxValue', (done) => {
        const rule = {
            validationFn: 'max',
            validationFnValue: 4,
            validationMessageKey: minLengthMessage
        };
        initValidationRuleAndComponent(rule, 5, 'number');

        const de = fixture.debugElement.query(By.css('.errorMsg'));
        if (null === de) {
            done.fail('Element with error message did not show up');
            return;
        }
        const el = de.nativeElement;

        expect(component.parentFormGroup.controls[component.controlName].invalid).toBeTruthy();
        expect(el.textContent).toContain(minLengthMessage);
        done();
    });

    it('should validate component defaultValue', () => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.parentFormGroup = new FormGroup({});
        component.controlName = '1';
        component.jsValidators = [];
        component.placeholder = '';
        component.type = 'text';
        fixture.detectChanges();
        expect(component.parentFormGroup.controls[component.controlName].value).toContain(defaultValue);
    });

    it('should default to text type', () => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.parentFormGroup = new FormGroup({});
        component.controlName = '1';
        component.jsValidators = [];
        component.placeholder = '';
        component.type = undefined;
        fixture.detectChanges();
        expect(component.type).toBe('text');
    });
});
