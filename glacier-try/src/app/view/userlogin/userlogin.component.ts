import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
