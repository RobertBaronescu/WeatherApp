import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationsResolver } from './resolvers/locations.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      locations: LocationsResolver,
    },
  },
  // The locations module is lazy loaded in order to reduce the load time and initialize the module when the user accesses it.
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/location.module').then((m) => m.LocationModule),
  },
];

@NgModule({
  imports: [
    // The scrollPositionRestoration feature ensures that the page stays at the same position before the user left it
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
