import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsResolver implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  /* The purpose of this resolver is to cache the data provided by the API.   
  We use a stream from weatherService to prevent any unnecessary repetition of the HTTP request as only a single data fetch is needed throughout the app.
  
  The resoning behing this is to always have the API called and its data available, whether the user navigates through the app or refreshes the page.
  
  The data brought by the API is stored in the locations$ stream. The resolver checks if data is available in the stream and provides that
  data to the component that accesses the resolver, or if no such data is available it performs the API call.  */

  resolve() {
    const data = this.weatherService.locations$.getValue();

    if (!data) {
      return this.weatherService.getWeather();
    } else {
      return data;
    }
  }
}
