import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Options } from 'ng5-slider';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cities:any;
  minValue: number = 300;
  maxValue: number = 500;
  options: Options = {
    floor: 200,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  filterForm: FormGroup;
  pepole:any =[1,2,3,4,5];
  constructor(private fb: FormBuilder, public dataService: DataService,public tripService: TripService) { }

  ngOnInit() {
this.dataService.getCities();
  }
  onSelectedOption(event:any){
    document.getElementById("myUL").style.display = "initial";
    var val = event.target.value;
    const filterValue = val.toLowerCase();
    this.cities= this.dataService.cities.filter(city => city.city.toLowerCase().indexOf(filterValue) === 0);
    
  }
  chooseCity(city:string){
    document.getElementById("myUL").style.display = "none";
    debugger
    var search = document.getElementById("search");
    search.innerHTML=city;
    this.tripService.filterObj.city=city;
  }
  updateStartDate(event:any){
    this.tripService.filterObj.startDate=event.value;
  }
  updateEndDate(event:any){
    this.tripService.filterObj.startEnd=event.value;
  }
  onRangeChange( event:any){
     var minVal= event.value;
     var maxVal= event.highValue;
     this.tripService.filterObj.minPrice=minVal;
     this.tripService.filterObj.maxPrice=maxVal;
  }
  onChange(event:any){
    debugger
    var selectVal= event.source._value;
    this.tripService.filterObj.pepoleNum=selectVal;
    console.log(this.tripService.filterObj);
  }
}
