import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { First1Component } from './first1/first1.component';
import { First2Component } from './first2/first2.component';


@NgModule({
  declarations: [
    First1Component,
    First2Component
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
