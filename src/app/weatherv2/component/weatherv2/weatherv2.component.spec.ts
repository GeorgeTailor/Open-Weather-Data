import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weatherv2Component } from './weatherv2.component';

describe('Weatherv2Component', () => {
  let component: Weatherv2Component;
  let fixture: ComponentFixture<Weatherv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weatherv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weatherv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
