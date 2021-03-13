import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsResolver } from '../resolvers/locations.resolver';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { LocationSingleComponent } from './pages/location-single/location-single.component';

const routes: Routes = [
  // This module is lazy loaded 

  {
    path: '',
    component: LocationListComponent,
    resolve: {
      locations: LocationsResolver,
    },
  },
  {
    path: ':id',
    component: LocationSingleComponent,
    resolve: {
      locations: LocationsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
