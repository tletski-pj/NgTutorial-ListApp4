import { createReducer, on } from '@ngrx/store';
import { AddMuscleCar, RemoveMuscleCar} from '../actions/muscle-car-actions';
import { MuscleCarState } from '../models/muscle-car';

export const muscleCarReducer = createReducer<MuscleCarState>(
    { muscleCar: [] },
    on(AddMuscleCar, (state: MuscleCarState, action) => {
        return {muscleCar: [...state.muscleCar, action.muscleCar]};
    }),
    on(RemoveMuscleCar, (state: MuscleCarState, action) => {
        const muscleCarArray = state.muscleCar.filter((flavor, index , stateArray) => (index !== action.muscleCarId));
        return {muscleCar: muscleCarArray};
    })
);
