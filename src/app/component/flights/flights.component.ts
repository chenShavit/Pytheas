import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  details= {
    from:'Tel Aviv',
    to: 'CDG',
    dateFrom : '18/11/2019',
    dateTo : '23/11/2019'
  }
  constructor(private router: Router, public tripService: TripService) {
 
   }

  ngOnInit() {
 this.tripService.loadAnimation();
   
   this.tripService.getFilght(this.details);
  

  }
  
  route(flight:any){
    window.open(flight.deep_link, '_blank') 
  }
}
