import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './view/inputdata/inputdata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { GetchartComponent } from './view/getchart/getchart.component';


@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    HttpClientModule,
    GetchartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule 
    //StockListService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
