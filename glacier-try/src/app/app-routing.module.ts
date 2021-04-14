import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserloginComponent} from './view/userlogin/userlogin.component'
import {VisitorsComponent} from './view/visitors/visitors.component'

const routes: Routes = [
  {
    path:"login",
    component:UserloginComponent
  },
  {
    path:"visitor",
    component:VisitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
