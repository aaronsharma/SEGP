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
  }
  //tried to get data from webpage but failed
   /*async getData(){
   let httpUrl = 'http://localhost:4200//getdata/chart'
    let result = await axios.get(httpUrl);
    console.log(result.da)
  }*/
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
