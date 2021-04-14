import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){  }

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
