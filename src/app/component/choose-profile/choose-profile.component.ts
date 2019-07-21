import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-profile',
  templateUrl: './choose-profile.component.html',
  styleUrls: ['./choose-profile.component.scss']
})
export class ChooseProfileComponent implements OnInit {

  constructor() { }

    tags=[{name:'Art', icon:"/assets/user.png"},{name:'Bachelors',icon:"/assets/user.png"},{name:'Family', icon:"/assets/user.png"},{ name:'Add Profile', icon:"/assets/plus-black-symbol.png"}];
  ngOnInit() {

   
    }
  }
