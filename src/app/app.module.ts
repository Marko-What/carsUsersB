import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from  '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCarDetailsComponentComponent } from './single-car-details-component/single-car-details-component.component';
import { CarsDetailsTableComponent } from './cars-details-table/cars-details-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCarDetailsComponentComponent,
    CarsDetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    InputTextModule,	
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,  
    
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
