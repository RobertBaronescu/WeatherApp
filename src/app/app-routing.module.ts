import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationsResolver } from './resolvers/locations.resolver';

const routes: Routes = [

  // This is the default path - 
  {
    path: '',
    component: HomeComponent,
    resolve: {
      locations: LocationsResolver,
    },
  },
  // The locations module is lazy loade because i wanted to reduce the load time and only load it if the user requests it.
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/location.module').then((m) => m.LocationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
