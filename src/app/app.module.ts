import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageChildComponent } from './Userproject/main-page-child/main-page-child.component';
import { Page2Component } from './Userproject/page2/page2.component';
import { MainPageparentComponent } from './Userproject/main-pageparent/main-pageparent.component';
import { AdduserComponent } from './Userproject/Adduser/adduser.component';
import { MainComponent } from './userproject/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageChildComponent,
    Page2Component,
    MainPageparentComponent,
    AdduserComponent,
    MainComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
