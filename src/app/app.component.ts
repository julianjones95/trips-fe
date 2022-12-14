import { Injectable } from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { Trips } from './Trips'
import { HttpClientModule, HttpClient} from '@angular/common/http'
import { TripDataService } from './trip-data.service'
import { tap } from 'rxjs';
import trips from './sample.json'






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  title = 'trip-FE';
  tripData: any;
  tripData$: any;
  constructor( private TripDataService: TripDataService) { }
  tripList:{entryNum:String,Title:String,Price:String, Date:String, Link:String,Rating:String}[] = trips


  ngOnInit(): void {
	this.tripData$ = this.TripDataService
	.getData()
	.pipe(tap((data) => (this.tripData = data)));

  }


  
  onDelete(entryNum: any){
	const deleteUrl = 'https://trips-api-service-a2fkrtihbq-uc.a.run.app/home?entryNum=' + entryNum

	this.TripDataService.deleteData(deleteUrl)
	.subscribe((result) => {
	    this.ngOnInit()
	})
	console.log("deleting:" + deleteUrl)
  }


}

