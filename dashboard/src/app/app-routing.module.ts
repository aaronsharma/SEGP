import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {InputdataComponent} from './view/inputdata/inputdata.component'

//is this where i put the route to the homepage
const routes: Routes = [
  {path:"getdata/:name", component:InputdataComponent},
  {path: 'bar-chart', component: BarChartComponent},
  {path: '**', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}