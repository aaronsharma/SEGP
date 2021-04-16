import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputdataComponent} from './view/inputdata/inputdata.component'
import {GetchartComponent} from './view/getchart/getchart.component'

const routes: Routes = [
  {
    path:"getdata/:name",
    component:InputdataComponent
  },
  {
    path:"getdata/:name/chart+device",
    component:GetchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
