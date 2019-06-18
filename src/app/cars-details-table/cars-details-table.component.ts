import { Component, OnInit, ViewChild } from '@angular/core';

import { ServiceCarsService } from './../service-cars.service';

import {NgForm} from '@angular/forms';



import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


import {TableModule} from 'primeng/table';
import { Router } from '@angular/router';




//import carsVars.ts;

@Component({
  selector: 'app-cars-details-table',
  templateUrl: './cars-details-table.component.html',
  styleUrls: ['./cars-details-table.component.css']
})
export class CarsDetailsTableComponent implements OnInit {	




  constructor(private _ServiceCarsService: ServiceCarsService, private router: Router) {
	}


	 @ViewChild('carUserInputs',{static:false}) formValues; // Added this
		
		public cars: any = [];
		public userInsert: any = [];
		display: boolean =false;




 	 ngOnInit() {
		this.cars = this._ServiceCarsService.getUserCarsdata();
		
		this.userInsert.avto = "volvo";
	
	}/* end of ngOnInit */


	newCarUser(){
		 this.display = true;
	}/* end of newCarUser */


	selectCar(avto){
		this.userInsert.avto = avto;
	}/* end of selectCar */



	singleCarDetails(car){
		this._ServiceCarsService.currentCar = car;
			//$window.location.href = '/cardetail';
			this.router.navigate(['/cardetail', { car: car}]);	 	
	} /* end of singleCarDetails */




	confirmNewCarUser(){
			this._ServiceCarsService.createNewCarUser(this.userInsert);
				this.cars = this._ServiceCarsService.getUserCarsdata();	
				this.formValues.resetForm();	
					this.display = false;
	} /* end of a confirmNewCarUser */






	cancelNewCarUser(){
		this.formValues.resetForm();
			 this.display = false;
	} /* end of a newCarUser */





	

	



}
