import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-grid-row',
  templateUrl: './weather-grid-row.component.html',
  styleUrls: ['./weather-grid-row.component.scss']
})
export class WeatherGridRowComponent implements OnInit {

  @Input('weatherData') weatherData;

  constructor() { }

  ngOnInit() {
    
  }

}
