import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import axios from 'axios';
import { HttpClient, HttpParams } from "@angular/common/http"

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {
  public user:any;
  public getchart:boolean=false;
  constructor(private router: ActivatedRoute,private http:HttpClient) {
    console.log(this);
    console.log(this.router.params);
   }
  public barchart:any;
  Device = "";
  Hours:number=0;
  hours0:number=0;
  hours1:number=0;
  hours2:number=0;
  hours3:number=0;
  hours4:number=0;
  hours5:number=0;
  hours6:number=0;
  hours7:number=0;


  clickGetDvc(d:number){
    switch (d) {
      case 0:this.Device='';break;
      case 1:this.Device='Washing machine';break;
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
  }
  //tried to get data from webpage but failed
   /*async getData(){
   let httpUrl = 'http://localhost:4200//getdata/chart'
    let result = await axios.get(httpUrl);
    console.log(result.da)
  }*/
  //inputdata.component.html line 31 the button 'show' uses this function
  clickLinkDB(){
    //only if there are two inputs: device and hours will the server work and show barchart
    if((this.Hours>0)&&(this.Device!="")){
      this.getdatafromDB(this.Device,this.Hours);
      //in inputdata.component.html line 34, only if the 'getchar==true' will the picture shows. 
      //and I added a pic(not barchart) to see if it functions well, after we get it connected to DB
      //we could replace it with our barchart 
      this.getchart=true;
    }
  }
  //unfinished, need to connect with database and get data
  getdatafromDB(device:string, hrs:number){
    
  }

  setDeviceUsage(device:string, hrs:number){
    switch(device){
      case 'Washing machine': this.hours0 = hrs;break;
      case 'Kettle': this.hours1 = hrs;break;
      case 'Television(lcd)': this.hours2 = hrs;break;
      case 'Game Console': this.hours3 = hrs;break;
      case 'Tablet/hand-held game': this.hours4 = hrs;break;
      case 'Mobile phone': this.hours5 = hrs;break;
      case 'Laptop PC': this.hours6 = hrs;break;
      case 'Desktop PC': this.hours7 = hrs;break;
      default: break;
    }
    this.getchart=true;
  }

  calcTotalUsage(){
    const TotalUsage = this.hours0+this.hours1+this.hours2+this.hours3+
    this.hours4+this.hours5+this.hours6+this.hours7;

  }

  //get user's name thought the link
  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      if(params.name=='visitor')
        this.user="";
      else
      this.user=params.name;
    });
  }
}
