import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss'],
})
export class HomepageCardComponent implements OnInit {
  @Input() location: Location;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToLocationSingle() {
    this.router.navigate([`/locations/${this.location.id}`]);
  }
}
