import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouteModule }  from './common/app.route.module';
import { GlobalState } from './global.state';


import {MenuComponent} from "./common/menu"
import {HomeComponent} from "./home"

import { AlertModule, ModalModule, PaginationModule } from 'ngx-bootstrap';
import { WelcomeComponent } from './home/welcome/welcome.component';



declare var jQuery:any;

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    WelcomeComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, 
    AppRouteModule,
    ModalModule.forRoot()    
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
