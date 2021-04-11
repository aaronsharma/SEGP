import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Glacier1Component } from './view/glacier1/glacier1.component';
import { Glacier2Component } from './view/glacier2/glacier2.component';
//import axios from 'axios';
//import {StockListService} from './service/stock-list.service';

@NgModule({
  declarations: [
    AppComponent,
    Glacier1Component,
    Glacier2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //StockListService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
