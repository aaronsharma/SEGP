import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-getchart',
  templateUrl: './getchart.component.html',
  styleUrls: ['./getchart.component.css']
})
export class GetchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async getData(){
    let result = await axios.get('http://localhost:4200/')
  }
}
