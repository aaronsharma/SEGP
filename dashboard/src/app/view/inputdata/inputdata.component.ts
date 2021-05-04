import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import axios from 'axios';
import { HttpClient, HttpParams } from "@angular/common/http";
import { DataService } from '../../data.service';


@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {
  public user:any;
  constructor(private router: ActivatedRoute,private http:HttpClient,private dataService: DataService) {
    console.log(this);
    console.log(this.router.params);
   }
  public barchart:any;
  Device = "";
  deviceCount:number=0;
  Hours:number=0;
  TotalUsage:number=0;
  hours0:number=0;
  hours1:number=0;
  hours2:number=0;
  hours3:number=0;
  hours4:number=0;
  hours5:number=0;
  hours6:number=0;
  hours7:number=0;


  clickGetDvc(){
    switch (this.deviceCount) {
      case 0:this.Device='Washing machine';break;
      case 1:this.Device='Kettle';break;
      case 2:this.Device='Television(lcd)';break;
      case 3:this.Device='Game Console';break;
      case 4:this.Device='Tablet/hand-held game';break;
      case 5:this.Device='Mobile phone';break;
      case 6:this.Device='Laptop PC';break;
      case 7:this.Device='Desktop PC';break;
      default:
        break;
    }
  }

  back(){
    if(this.deviceCount>0)
      this.deviceCount--;
    this.clickGetDvc();
    this.Hours=0;
  }

  setDeviceUsage(){
    this.clickGetDvc();
    switch(this.Device){
      case 'Washing machine': this.hours0 = this.Hours;break;
      case 'Kettle': this.hours1 = this.Hours;break;
      case 'Television(lcd)': this.hours2 = this.Hours;break;
      case 'Game Console': this.hours3 = this.Hours;break;
      case 'Tablet/hand-held game': this.hours4 = this.Hours;break;
      case 'Mobile phone': this.hours5 = this.Hours;break;
      case 'Laptop PC': this.hours6 = this.Hours;break;
      case 'Desktop PC': this.hours7 = this.Hours;break;
      default: break;
    }
    if(this.deviceCount<8)
      this.deviceCount++;
      console.log('increment device');
    this.Hours=0;
    if(this.deviceCount==8){
      this.calcTotalUsage();
      console.log('calc total usage');
    }
  }



  calcTotalUsage(){
    this.TotalUsage = +this.hours0 + +this.hours1 + +this.hours2 + +this.hours3 +
    +this.hours4 + +this.hours5 + +this.hours6 + +this.hours7;
    console.log(this.TotalUsage);
    this.dataService.postUser('visitor', 'password', this.TotalUsage);

  }

  
  ngOnInit(): void {
    this.clickGetDvc();
    this.router.params.subscribe((params)=>{
      if(params.name=='visitor')
        this.user="";
      else
      this.user=params.name;
    });
  }
}
