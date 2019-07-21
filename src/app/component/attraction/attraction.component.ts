import { Component, OnInit } from '@angular/core';
import  {TripService} from '../../trip.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  constructor(public tripService: TripService, private router: Router) {

  }
  trip:any;
  attraction:any;
  ngOnInit() {
    this.trip=this.tripService.trip;
    this.attraction=this.tripService.attraction;

  }

}
