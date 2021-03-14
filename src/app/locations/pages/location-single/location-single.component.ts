import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-location-single',
  templateUrl: './location-single.component.html',
  styleUrls: ['./location-single.component.scss'],
})
export class LocationSingleComponent implements OnInit {
  location: Location;
  center: google.maps.LatLngLiteral;
  zoom = 10;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /* The route for the LocationSingleComponent is /locations/:id (locationId) so the route object of type ActivatedRoute 
      to get the id value from the query param as a string.


    */
    const locationId = this.route.snapshot.paramMap.get('id');

    // A subscription to the data from the resolver is made, then the Array find() method is used on the array of location objects
    // to find the one whose id matches the id from the URL.

    /* Another way this could have been done this was to make a get request for a single location
      but the request URL from the OpenWeather API wasn't available.
      Another way to implement it was by passing the location through a different stream that emitted from the LocationListComponent on clicking a card
       but it wouldn't have worked if the user accessed the URL manually from the browser or 
       if the user refreshed the page.(because there wouldn't have been any data coming from the parent)
    */
    this.route.data.subscribe((data) => {
      this.location = data.locations.find(
        (location) => String(location.id) === locationId
      );
    });

    // The coordinates property from the location object to center the map.

    this.center = {
      lat: this.location.coordinates.lat,
      lng: this.location.coordinates.lon,
    };
  }
}
