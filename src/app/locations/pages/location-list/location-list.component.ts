import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../interfaces/location.interface';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // I subscribed to the resovlver to get the data

    this.route.data.subscribe((data) => {
      this.locations = data.locations;
    });
  }
}
