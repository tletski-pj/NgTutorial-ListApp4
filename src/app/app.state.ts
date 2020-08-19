import { IceCream } from './models/ice-cream';
import { MuscleCar } from './models/muscle-car';

export interface AppState {
  readonly iceCream: IceCream[];
  readonly muscleCar: MuscleCar[];
}
