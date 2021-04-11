import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Glacier1Component} from './view/glacier1/glacier1.component'
import {Glacier2Component} from './view/glacier2/glacier2.component'

const routes: Routes = [
  {
    path:"glacier1",
    component:Glacier1Component
  },
  {
    path:"glacier2",
    component:Glacier2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
