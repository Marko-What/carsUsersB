import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CarUser } from './carUser';


@Injectable({
  providedIn: 'root'
})
export class ServiceCarsService {
	 baseurl: string = "http://localhost:3095/";
		//public dataA: any = [];
		public cars:any = [];
		public carsingle:any = [];
		public currentCar:any = {};
	 
/*http://localhost:4206/carstable*/

  constructor(private httpClient: HttpClient) {

		
	 } /* end of constructor */



	getUserCarsdata(){
		this.cars = [];
		
	this.httpClient.get(this.baseurl + 'carusers').subscribe((data:any) => {
							let i;
							for (i = 0; i < data.length; i++) {
									this.cars.push(data[i]);
				}
				}, error => {
				  console.log("There was an error generating the proper GUID on the server", error);
				});
		
		console.log(this.cars);
		return this.cars;
		

	 } /* end of getUserCarsdata */

	


	readSingleCar(id=null){
			
		this.httpClient.get(this.baseurl + 'carusers/single?id='+id).subscribe((data:any) => {
			this.carsingle = data;
    }, error => {
    console.log("There was an error generating the proper GUID on the server", error);
		});
		
		return this.carsingle;

	}/* end of readSingleCars */




	updateCars(car:CarUser){
		let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');   
        let options = {
            headers: httpHeaders
        }; 
		 this.httpClient.post(this.baseurl + 'carusers/update', car, options).subscribe(data => {
				console.log(data);
		 },
		 err => {
				  console.log('Error: ' + err.error);
			});

		}/* end of updateCars */
		




	createNewCarUser(car:CarUser){
   
	let  carUserA = { ...car };

    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };

		
		   this.httpClient.post(this.baseurl + 'carusers', carUserA, options).subscribe(data => {
				  console.log(data);	
		   },
		   err => {
				    //console.log('Error: ' + err.error);
			  });
				
	}/* end of createCar */





	deleteCars(carU:CarUser){
        let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };

		
		 this.httpClient.post(this.baseurl + 'carusers/delete', carU, options).subscribe(data => {
				console.log(data);
		 },
		 err => {
				  console.log('Error: ' + err.error);
			});

	}/* end of deleteCars */







}
