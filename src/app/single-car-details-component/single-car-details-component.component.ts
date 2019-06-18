import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from "@angular/router";

import {NgForm} from '@angular/forms';
import { ServiceCarsService } from './../service-cars.service';


import { CarUser } from './../carUser';
import { CarRow } from './../carRow';

@Component({
  selector: 'app-single-car-details-component',
  templateUrl: './single-car-details-component.component.html',
  styleUrls: ['./single-car-details-component.component.css']
})

export class SingleCarDetailsComponentComponent implements OnInit {

  constructor(private _ServiceCarsService: ServiceCarsService, private router: Router) { }

		@ViewChild('carEditInputs',{static:false}) formValues; // Added this
	
		public cars: any = [];
		/*public rowDataa:CarRow = [];
		public clonedCars:CarRow = [];*/
		public rowDataa:any = [];
		public clonedCars:any = [];
		


  ngOnInit() {
		this.cars[0] = this._ServiceCarsService.currentCar;
			this.rowDataa = { ...this.cars[0] };	
	  }


	 onRowEditInit() {
        this.clonedCars = this.cars[0];				
	   }




    onRowEditSave() {
			let carUser: CarUser = {...this.rowDataa }
				this._ServiceCarsService.updateCars(carUser);			
    }




 onRowdelete() {
	let carUser: CarUser = { ...this.rowDataa }
        this._ServiceCarsService.deleteCars(carUser);		
					this.router.navigate(['/carstable']);	
	   }


    onRowEditCancel() {
			this.rowDataa = { ...this.clonedCars }
    }


		backCarsTable(){
			this.router.navigate(['/carstable']);
		} /* end of backCarsTable */


}
