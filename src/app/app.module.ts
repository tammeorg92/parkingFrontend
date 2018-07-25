import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { FooterComponent } from './footer/footer.component';

import {ParkingModule} from './parking/parking.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ParkingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
