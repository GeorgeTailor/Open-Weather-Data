import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetListComponent } from './weather-widget-list.component';

describe('WeatherWidgetListComponent', () => {
  let component: WeatherWidgetListComponent;
  let fixture: ComponentFixture<WeatherWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
