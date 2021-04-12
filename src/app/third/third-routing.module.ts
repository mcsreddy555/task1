import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { First1Component } from './first1/first1.component';
import { First2Component } from './first2/first2.component';
import { ThirdComponent } from './third.component';

const routes: Routes = [
  {path:'',component:ThirdComponent, children:[
    {path:'first1',component:First1Component},
    {path:'first2', component:First2Component}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule { }
