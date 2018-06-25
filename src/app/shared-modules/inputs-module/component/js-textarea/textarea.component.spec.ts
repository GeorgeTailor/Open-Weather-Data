import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationFnService } from '../../service/ValidationFnService';
import { TextareaComponent } from './textarea.component';
import { SingleErrorPipe } from '../../pipe/single-error-pipe.pipe';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TextareaComponent', () => {
    let comp: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, ReactiveFormsModule],
                declarations: [TextareaComponent, SingleErrorPipe],
                providers: [ValidationFnService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TextareaComponent);
        comp = fixture.componentInstance;
        comp.parentFormGroup = new FormGroup({});
        comp.controlName = '1';
        comp.jsValidators = [];
        fixture.detectChanges();
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });
});
