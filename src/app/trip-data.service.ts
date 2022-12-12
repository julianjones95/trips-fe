import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) {}


  getData(){
	return this.http.get(
	//	'https://dummyjson.com/products'
		'https://trips-api-service-a2fkrtihbq-uc.a.run.app/home'
	)
  }
}
