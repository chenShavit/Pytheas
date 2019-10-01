import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/component/home/home.component';
import { FormStepComponent } from '../app/component/form-step/form-step.component';
import { TripMainComponent } from '../app/component/trip-main/trip-main.component';
import { ChooseProfileComponent } from '../app/component/choose-profile/choose-profile.component';
import { FilterComponent } from '../app/component/filter/filter.component';
import { ExploreComponent } from '../app/component/explore/explore.component';
import { TripDetailsComponent } from '../app/component/trip-details/trip-details.component';
import { AttractionComponent } from '../app/component/attraction/attraction.component';
import { FlightsComponent } from '../app/component/flights/flights.component';
import { MapComponent } from '../app/component/map/map.component';
import { HotelComponent } from '../app/component/hotel/hotel.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormStepComponent },
  { path: 'trip', component: TripMainComponent },
  { path: 'choose', component: ChooseProfileComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'details', component: TripDetailsComponent },
  { path: 'attraction', component: AttractionComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent },


];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}
