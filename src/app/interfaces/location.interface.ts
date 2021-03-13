import { Coord } from './coord.interface';

export interface Location {
  id?: string;
  name: string;
  coordinates: Coord;
  temp: number;
  temp_min: number;
  temp_max: number;
  wind_speed: number;
  image: string;
}
