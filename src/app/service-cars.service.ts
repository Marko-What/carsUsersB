import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

<<<<<<< HEAD


import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

=======
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
import { CarUser } from './carUser';


@Injectable({
  providedIn: 'root'
})
export class ServiceCarsService {
<<<<<<< HEAD
	 baseurl: string = "http://localhost:3155/";
=======
	 baseurl: string = "http://localhost:3095/";
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
		//public dataA: any = [];
		public cars:any = [];
		public carsingle:any = [];
		public currentCar:any = {};
<<<<<<< HEAD
	 	public counting:number;
=======
	 
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
/*http://localhost:4206/carstable*/

  constructor(private httpClient: HttpClient) {

<<<<<<< HEAD
		} /* end of constructor */




	 private subject = new Subject<any>();
		
    userDeleted() {
        this.subject.next({ text: "user Deleted" });
    }

		 getMessage(): Observable<any> {
        return this.subject.asObservable();
    }





/* debugging */
	numberOfUsers(){
	
			this.httpClient.get(this.baseurl + 'carusers').subscribe((data:any) => {
							let a = data.length + 1;
					localStorage.setItem("counter", a);
							 console.log(a);
				});	
	}
/* debugging */
=======
		
	 } /* end of constructor */

>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d


	getUserCarsdata(){
		this.cars = [];
		
	this.httpClient.get(this.baseurl + 'carusers').subscribe((data:any) => {
							let i;
							for (i = 0; i < data.length; i++) {
									this.cars.push(data[i]);
				}
				}, error => {
<<<<<<< HEAD
				  console.log("something went wrong");
				});
						 
		return this.cars;
		
=======
				  console.log("There was an error generating the proper GUID on the server", error);
				});
		
		console.log(this.cars);
		return this.cars;
		

>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
	 } /* end of getUserCarsdata */

	


	readSingleCar(id=null){
			
		this.httpClient.get(this.baseurl + 'carusers/single?id='+id).subscribe((data:any) => {
			this.carsingle = data;
    }, error => {
<<<<<<< HEAD
   		console.log('something went wrong'+ error);
=======
    console.log("There was an error generating the proper GUID on the server", error);
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
		});
		
		return this.carsingle;

	}/* end of readSingleCars */




	updateCars(car:CarUser){
		let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');   
        let options = {
            headers: httpHeaders
        }; 
<<<<<<< HEAD
		return this.httpClient.put(this.baseurl + 'carusers/update', car, options);
=======
		 this.httpClient.post(this.baseurl + 'carusers/update', car, options).subscribe(data => {
				console.log(data);
		 },
		 err => {
				  console.log('Error: ' + err.error);
			});
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d

		}/* end of updateCars */
		




	createNewCarUser(car:CarUser){
   
	let  carUserA = { ...car };

    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
<<<<<<< HEAD
        }; 
		    return this.httpClient.post(this.baseurl + 'carusers', carUserA, options);
	
=======
        };

		
		   this.httpClient.post(this.baseurl + 'carusers', carUserA, options).subscribe(data => {
				  console.log(data);	
		   },
		   err => {
				    //console.log('Error: ' + err.error);
			  });
				
>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
	}/* end of createCar */





	deleteCars(carU:CarUser){
<<<<<<< HEAD

		const httpOptions = {
				headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: carU
		};
	
   return this.httpClient.delete(this.baseurl + 'carusers/delete', httpOptions);       
            
=======
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

>>>>>>> a5cd1b71702d0c7779b822596692d310d941e61d
	}/* end of deleteCars */







}
