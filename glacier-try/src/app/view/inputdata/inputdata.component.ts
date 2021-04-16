import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import axios from 'axios';
import { HttpClient } from "@angular/common/http"
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }
  public barchart:any;
  Device = "";
  Hours="";

  clickGetDvc(d:number){
    switch (d) {
      case 0:this.Device='';break;
      case 1:this.Device='Wash machine';break;
      case 2:this.Device='Kettle';break;
      case 3:this.Device='Television(lcd)';break;
      case 4:this.Device='Game Console';break;
      case 5:this.Device='Tablet/hand-held game';break;
      case 6:this.Device='Mobile phone';break;
      case 7:this.Device='Laptop PC';break;
      case 8:this.Device='Desktop PC';break;
      default:
        break;
    }
    
    this.getData();
    //this.router.navigate(['/chart',this.Device]);
  }
   /*async getData(){
   let httpUrl = 'http://localhost:4200//getdata/chart'
    let result = await axios.get(httpUrl);
    console.log(result.da)
  }*/
  clickLinkDB(){
      
  }
  getData(){
    /*let httpUrl = 'https://media.nationalgeographic.org/assets/photos/000/213/21366.jpg'
    this.http.get(httpUrl).subscribe(res=>{ this.barchart = res })*/
  }
  ngOnInit(): void {
    
  }
}
