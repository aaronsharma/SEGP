import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  constructor() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Glacier'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartstart = 0;
  public barChartData = [
    {backgroundColor: 'rgba(0, 0, 255, 0.9)',  data: [100], label: 'Original Size'},
    {backgroundColor: 'rgba(0, 0, 255, 0.3)',  data: [85], label: 'After Power Usage'}
  ];

  ngOnInit() { }
}
