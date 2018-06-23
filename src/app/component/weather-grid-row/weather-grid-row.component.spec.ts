import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGridRowComponent } from './weather-grid-row.component';

describe('WeatherGridRowComponent', () => {
  let component: WeatherGridRowComponent;
  let fixture: ComponentFixture<WeatherGridRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGridRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
