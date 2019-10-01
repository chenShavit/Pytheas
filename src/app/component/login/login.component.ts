import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isEmail:boolean=false;
  data:User= new User();
  emailExisit:boolean=false;
  constructor(public dataService:DataService, private router: Router,public tripService: TripService) { }

  ngOnInit() {
  }
  checkEmail(event:any){
    var val = event.target.value;
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    this.isEmail=!emailRegex.test(val); 
  }
  checkForm(){
    if(this.dataService.isLogin){
    this.dataService.isUserExisit(this.data.email);
    this.dataService.isPasswordMatch(this.data);
    if(!this.dataService.inValidPas &&this.dataService.userExisit ){
      this.tripService.user=this.data;
      this.router.navigate(['/trip']);
    }
  }
  else{
    this.tripService.user=this.data;
    this.router.navigate(['/trip']);
    //save user
  }

  }

}
