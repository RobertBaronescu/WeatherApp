import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsResolver implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  /*The resolve method get the current value from the locations$ stream and if there isn't any data on the stream then it calls the getWeather method
  from the weatherService that i injected in the constructor above. If there is data on the stream which means the array of objects was emitted to it,
  then it simply returns that data.
  */
  resolve() {
    const data = this.weatherService.locations$.getValue();

    if (!data) {
      return this.weatherService.getWeather();
    } else {
      return data;
    }
  }
}
