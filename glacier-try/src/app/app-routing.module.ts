import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputdataComponent} from './view/inputdata/inputdata.component'

const routes: Routes = [
  {
    path:"getdata",
    component:InputdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
