import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './view/inputdata/inputdata.component';


@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //StockListService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
