import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdRoutingModule } from './third/third-routing.module';
import { ThirdComponent } from './third/third.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { FormsModule } from '@angular/forms';
import { ThirdModule } from './third/third.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstParentComponent,
    // ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThirdRoutingModule,
    ThirdModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
