import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glacier-try';
  username = "";
  password = "";
  clickEvent(){
    console.log(this.username)
    console.log(this.password)
  }
  getContent(input1: any,input2: any){
    console.log(input1)
    console.log(input2)
  }

}
