import { Component, OnInit, Input } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss']
})
export class WeatherChartComponent implements OnInit {

  @Input('weatherData') weatherData;

  colorScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#01579b', '#7aa3e5', '#a8385d', '#00bfa5'
    ]
  };
  range: boolean = false;
  showLegend = true;
  legendTitle = 'Legend';
  gradient = false;
  showXAxis = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  timeline = false;
  showGridLines = true;

  // line interpolation
  curveType: string = 'Linear';
  curve: any = shape.curveNatural;
  roundDomains = false;

  crunchedData = [
    {
      "name": "Temperature",
      "series": []
    },
    {
      "name": "Wind",
      "series": []
    },
    {
      "name": "Clouds",
      "series": []
    }
  ];

  constructor() { }

  ngOnInit() {
    this.weatherData.forEach(el => {
      this.crunchedData[0].series.push(
        {
          "name": el.dt,
          "value": el.main.temp
        }
      );
      this.crunchedData[1].series.push(
        {
          "name": el.dt,
          "value": el.wind.speed
        }
      );
      this.crunchedData[2].series.push(
        {
          "name": el.dt,
          "value": el.clouds.all
        }
      );
    });
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }

}
