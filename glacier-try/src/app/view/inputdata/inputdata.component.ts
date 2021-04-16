import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {

  constructor(private router:Router) { }
  Device = "";
  Hours="";
  ngOnInit(): void {
  }
  clickLinkDB(){
    this.getData();
    //this.router.navigate(['/chart',this.Device]);
  }
  async getData(){
    let httpUrl = 'http://localhost:4200//getdata/chart'
    let result = await axios.get(httpUrl);
    console.log(result.data)
  }

}
