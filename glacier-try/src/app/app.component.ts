import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideMenu', [
      state('false', style({
        transform: 'translateX(-250px)'
      })),
      state('true', style({
        transform: 'translateX(0)'
      })),
      transition('true <=> false', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  constructor(private router:Router){  }
  public fontSize : string ="2em";
  public borderRadius: string = "10px";
  title = 'glacier-try';
  public userchoose:boolean=false;
  public pageswitch:boolean=false;
  username = "";
  password = "";
  visitor = "visitor";
  clickLogin(){
    this.userchoose=true;
  }
  clickBack(){
    this.userchoose=false;
  }
  clickRegister(){

  }
  clickVisitor(){
    this.pageswitch=true;
    this.router.navigate(['/getdata',this.visitor]);
  }
  clickgetData(){
    this.pageswitch=true;
    this.router.navigate(['/getdata',this.username]);
  }
  /*toggleChoose(){
    this.userchoose = this.userchoose=='log in'
  }*/
  getContent(input1: any,input2: any){
    console.log(input1)
    console.log(input2)
  }

  /*constructor(public GlacierData:GlacierDataService){
    let httpUrl = '';
    axios.getUri.then((res)=>{
      console.log(res.data)
    
    })
    GlacierData.superStocks().then((res)=>{
      this.superSrocks = res.
    })
  }*/
}
