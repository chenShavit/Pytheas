import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

declare var FB: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 

  constructor(public dataService:DataService, private router: Router) { }

  ngOnInit() {
  
  }
  onSignIn(googleUser:any) {
    debugger
    var profile = googleUser.getBasicProfile();
    debugger
    this.router.navigate(['/login']);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  login(flag:boolean){
    if(flag){
      this.dataService.isLogin=true;
    }
    else{
      this.dataService.isLogin=false;
    }
    this.router.navigate(['/login']);
  }
  }


