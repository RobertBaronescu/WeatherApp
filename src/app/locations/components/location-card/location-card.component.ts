import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/interfaces/location.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {
  @Input() location: Location;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToSingleLocation() {
    // The user is redirected to another page using the id property from the location that was passed from the parent component
    this.router.navigate([`/locations/${this.location.id}`]);
  }
}
