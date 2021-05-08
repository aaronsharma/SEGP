import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api";

  private SAVE_FROM_API = "http://localhost:3000/api/save";

  private MONGODB_SERVER = "http://localhost:3000/user"

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(this.REST_API_SERVER)
  }

  public postUser(user_name:string, password:string, power_usage: number){
    return this.httpClient.post(this.REST_API_SERVER,{
      user_name,
      password,
      power_usage
    })
  }

  // public saveUser(userName:string, password:string, power_usage: number){
  //   return this.httpClient.post(this.SAVE_FROM_API,{
  //     userName,
  //     password,
  //     power_usage
  //   })
  // }

  // public postUserToMongo(userName:string, password:string, power_usage: number){
  //   return this.httpClient.post(this.MONGODB_SERVER,{
  //     userName,
  //     password,
  //     power_usage
  //   })
  // }
}
