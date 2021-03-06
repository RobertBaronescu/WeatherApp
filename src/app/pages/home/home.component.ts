import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/interfaces/location.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hottestLocations: Location[];
  coldestLocations: Location[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /* Once the component is created, a subscription to the data from the resolver is made, which is sorted depending on the needs.
    Objects are passed by reference, so the spread operator is used to clone the array from the locations property to ensure 
    that the original array isn't affected by the sort() or the splice() method.   
    The hottestLocations array is sorted in descending order by temp property, showing only the top three results 
    because the Array splice() method was used on it to remove the items
    starting from the third index. The same thing was done to the coldestLocations array, but in ascending order.
    */

    this.route.data.subscribe((data) => {
      this.hottestLocations = [...data.locations].sort(
        (a, b) => b.temp - a.temp
      );
      this.hottestLocations.splice(3);

      this.coldestLocations = [...data.locations].sort(
        (a, b) => a.temp - b.temp
      );
      this.coldestLocations.splice(3);
    });
  }

  redirectToAllLocations() {
    this.router.navigate(['/locations']);
  }
}
