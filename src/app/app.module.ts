import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from  '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
<<<<<<< HEAD



import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/primeng';


=======
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
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
<<<<<<< HEAD
    InputTextModule,
    MessagesModule,	
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
=======
    InputTextModule,	
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,  
    
  ],
  providers: [],
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
