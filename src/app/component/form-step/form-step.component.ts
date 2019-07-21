import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TripService } from '../../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  stepNumber:any=1;
  profile:any={
    username:'Chen',
    profile_name:'',
    tags:['']
  }
  secondFormGroup:FormGroup;

  constructor(private _formBuilder: FormBuilder,private router: Router , public tripService: TripService) { }

  ngOnInit() {
    this.secondFormGroup = new FormGroup({
      profileName: new FormControl()
    })
  }

  nextStep(val:any){
    this.profile.profile_name=val;
    if(val){
    this.stepNumber++;
    }
  }
  backStep(){
    this.stepNumber--;
  }
  submit(){
    this.profile.tags=this.tripService.selectedTags;
    this.tripService.updateUserDestails(this.profile);
    this.router.navigate(['/filter']);
  }
}
