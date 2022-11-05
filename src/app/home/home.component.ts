import { Component, OnInit } from '@angular/core';
import { TripDataService } from './../trip-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tripData$: any;
  constructor( private TripDataService: TripDataService) { }

  ngOnInit(): void {
	this.tripData$ = this.TripDataService.getData();
  }

}
