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

  public barChartLabels = ['Glacier'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {backgroundColor: 'rgba(0, 0, 255, 0.9)',  data: [100], label: 'Original Size'},
    {backgroundColor: 'rgba(0, 0, 255, 0.3)',  data: [85], label: 'After Power Usage'}
  ];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getAll().subscribe(
        data => {
          this.stats = data;
          // now let's update the fields
          this.barChartLabels = this.stats.barChartLabels;
          this.barChartData = this.stats.barChartData;
        },
        error => {
          console.log(error);
        });
  }
}
