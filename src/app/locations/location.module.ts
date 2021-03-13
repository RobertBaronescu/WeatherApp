import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { LocationSingleComponent } from './pages/location-single/location-single.component';
import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    LocationCardComponent,
    LocationSingleComponent,
    LocationListComponent,
  ],
  imports: [CommonModule, LocationRoutingModule, GoogleMapsModule],
})
export class LocationModule {}
