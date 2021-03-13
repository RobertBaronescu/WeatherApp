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
      // see resolver comments
      locations: LocationsResolver,
    },
  },
  {
    path: ':id',
    component: LocationSingleComponent,
    resolve: {
      // see resolver comments

      locations: LocationsResolver,
    },
  },
];

@NgModule({
  //.forChild instead of .forRoot because it is used inside of the child Module.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
