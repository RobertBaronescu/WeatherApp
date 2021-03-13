import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interfaces/location.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // Stream of data that we're going to subscribe to the last value emitted.
  locations$: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>(
    null
  );

  constructor(private http: HttpClient) {}

  /* Method that returns the data as a string so it was parsed and then the list property on that object was accessed.
  The API itself returns an object with way more fields than it's required, so a parsing is needed in order to select only the properties that we're interested in.
   An Array map() method is used to construct an array of objects of type Location.
  */
  getWeather(): Observable<any> {
    return this.http.get<string>('http://localhost:3000/').pipe(
      map((response: string) => JSON.parse(response)),
      map((response) => response.list),
      map((list) =>
        list.map((location) => {
          return {
            id: location.id,
            name: location.name,
            coordinates: { lon: location.coord.lon, lat: location.coord.lat },
            temp: location.main.temp,
            temp_max: location.main.temp_max,
            temp_min: location.main.temp_min,
            wind_speed: location.wind.speed,
            image: `/assets/images/${location.name}.jpg`,
          };
        })
      ),
      // i emitted the array of location-type objects  to the stream
      tap((response) => this.locations$.next(response))
    );
  }
}
