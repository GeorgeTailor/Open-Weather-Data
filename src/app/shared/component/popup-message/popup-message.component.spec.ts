import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMessageComponent } from './popup-message.component';

describe('PopupMessageComponent', () => {
    let component: PopupMessageComponent;
    let fixture: ComponentFixture<PopupMessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopupMessageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupMessageComponent);
        component = fixture.componentInstance;
        component.popupTextObject = {
            headerText: '',
            buttonAcceptText: '',
            buttonRejectText: '',
            messageText: ''
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('visible defaults to: true', () => {
        expect(component.visible).toEqual(true);
    });

    it('should emit hide on emitting reject', () => {
        component.emitAccept({});
        expect(component.visible).toBeFalsy();
    });

    it('should emit hide on emitting accept', () => {
      component.emitReject({});
      expect(component.visible).toBeFalsy();
  });
});
