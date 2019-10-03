import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TripService } from '../../trip.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  stepNumber:any=1;
  profile:any={
    username:'Chen',
    profile_name:''
  }
  secondFormGroup:FormGroup;
  selectable: boolean = true
  constructor(public dataService:DataService, private _formBuilder: FormBuilder,private router: Router , public tripService: TripService) { }

  ngOnInit() {
    this.secondFormGroup = new FormGroup({
      profileName: new FormControl()
    })
    this.dataService.getTags();
  }
  isSelected(tag: any): boolean {
    this.dataService.selectedTags.push(tag);
    return tag.isClicked = !tag.isClicked;
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
