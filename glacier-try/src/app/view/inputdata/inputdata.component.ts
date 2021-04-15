import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.router.navigate(['/chart',this.Device]);
  }

}
