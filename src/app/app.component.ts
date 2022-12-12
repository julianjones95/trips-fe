import { Component, OnInit } from '@angular/core';
import { Trips } from './Trips'
import { HttpClientModule } from '@angular/common/http'
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
  onSubmit(nums: {entryNum: string}){
	console.log(nums)
  }	

  ngOnInit(): void {
	this.tripData$ = this.TripDataService
	.getData()
	.pipe(tap((data) => (this.tripData = data)));

  }

}

