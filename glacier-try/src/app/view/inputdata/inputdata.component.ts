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
  constructor(private router: ActivatedRoute, private http:HttpClient) {
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
   /*async getData(){
   let httpUrl = 'http://localhost:4200//getdata/chart'
    let result = await axios.get(httpUrl);
    console.log(result.da)
  }*/
  clickLinkDB(){
    if((this.Hours>0)&&(this.Device!=""))
      this.getData();
    //this.router.navigate(['/chart',this.Device]);
  }
  getData(){
    /*let httpUrl = 'https://media.nationalgeographic.org/assets/photos/000/213/21366.jpg'
    this.http.get(httpUrl).subscribe(res=>{ this.barchart = res })*/
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
