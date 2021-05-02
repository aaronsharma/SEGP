
//modifying bar-chart to see if we can create a gradient effect

import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

//new variable to create gradient

let blue_white_gradient = ctx.createLinearGradient(0, 0, 0, 600);  //nb 600 may be size of graph
blue_white_gradient.addColorStop(0, 'white');
blue_white_gradient.addColorStop(1, 'blue');

  public barChartLabels = ['Glacier'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {backgroundColor: blue_white_gradient,  data: [100], label: 'Original Size'}, //changed colour to gradient variable
    {backgroundColor: blue_white_gradient,  data: [85], label: 'After Power Usage'} //changed colour to gradient variable
  ];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
               
