import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
// data goes here
  public single = [
    {
      "name": "test1",
      "value": 1.2
    },
    {
      "name": "test2",
      "value": .8
    },
    {
      "name": "test3",
      "value": .5
    }
  ];

  public multi = [
    {
      "name": "test1",
      "series": [
        {
          "name": "0",
          "value": 0
        },
        {
          "name": "5",
          "value": 2
        }
      ]
    },

    {
      "name": "test2",
      "series": [
        {
          "name": "0",
          "value": 0
        },
        {
          "name": "5",
          "value": 3
        }
      ]
    },

    {
      "name": "test3",
      "series": [
        {
          "name": "0",
          "value": 0
        },
        {
          "name": "5",
          "value": 5
        }
      ]
    }
  ];


  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Epoch';
  showYAxisLabel = true;
  yAxisLabel = 'Loss';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
}

