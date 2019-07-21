import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-trip-main',
  templateUrl: './trip-main.component.html',
  styleUrls: ['./trip-main.component.scss']
})
export class TripMainComponent implements OnInit {
  user_email: string = "ck20427@gmail.com";
  user: any;
  trips: any;
  // trips = new Array <Trip>();
  // places = new Array <Place>();
  constructor( private router: Router, public tripService: TripService) { }


  ngOnInit() {
    this.user = this.tripService.user;
    this.trips = this.tripService.user.trips;
  }
  chooseTrip(i: number) {

    this.tripService.tripNum = i;
    this.router.navigate(['/details']);
  }

}
