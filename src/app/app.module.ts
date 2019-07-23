import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttractionComponent } from './component/attraction/attraction.component';
import { ChooseProfileComponent } from './component/choose-profile/choose-profile.component';
import { ExploreComponent } from './component/explore/explore.component';
import { FilterComponent } from './component/filter/filter.component';
import { FormStepComponent } from './component/form-step/form-step.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { MapComponent } from './component/map/map.component';
import { TripDetailsComponent } from './component/trip-details/trip-details.component';
import { TripMainComponent } from './component/trip-main/trip-main.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AgmCoreModule} from '@agm/core';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule, MatDatepickerModule,  MatNativeDateModule,


} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { AgmDirectionModule } from 'agm-direction'; 
import { LottieAnimationViewModule } from 'ng-lottie';
import { DataService } from './data.service';
import { FlightsComponent } from './component/flights/flights.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { TripService } from './trip.service';

// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("Facebook-App-Id")
//   }
// ]);
// export function provideConfig() {
//   return config;
// }

@NgModule({
  
  declarations: [
    AppComponent,
    AttractionComponent,
    ChooseProfileComponent,
    ExploreComponent,
    FilterComponent,
    FormStepComponent,
    HotelComponent,
    MapComponent,
    TripDetailsComponent,
    TripMainComponent,
    SearchBarComponent,
    FlightsComponent,
    HomeComponent,
  ],
  imports: [
    // SocialLoginModule,
    MatSelectModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    AppRoutingModule,
    HttpClientModule,
    LottieAnimationViewModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDatepickerModule, 
    MatNativeDateModule,        // <----- import for date formating(optional)
    AgmDirectionModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUAH1xG3UbqX8btjKTE80KoOMPgiknzo',
  libraries: ['geometry']
    }),
    RouterModule.forRoot([])
  ],
  providers: [DataService, TripService
  //    {
  //   provide: AuthServiceConfig,
  //   useFactory: provideConfig
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
