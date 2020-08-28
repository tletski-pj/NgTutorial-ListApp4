import { AppState as BaseAppState } from '../app.state';

export interface MuscleCar {
    make: string;
    model: string;
    year: string;
}

export interface MuscleCarState {
    muscleCar: MuscleCar[];
}

export interface AppState extends BaseAppState {
    muscleCar: MuscleCarState;
}
