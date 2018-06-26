import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetBigComponent } from './weather-widget-big.component';

describe('WeatherWidgetBigComponent', () => {
  let component: WeatherWidgetBigComponent;
  let fixture: ComponentFixture<WeatherWidgetBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
