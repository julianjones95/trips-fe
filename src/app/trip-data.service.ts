import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) {}


  getData(){
	return this.http.get(
		'https://trips-api-service-a2fkrtihbq-uc.a.run.app/home'
	)
  }

 deleteData(url: string){
	return this.http.delete(url)	

 }

}
