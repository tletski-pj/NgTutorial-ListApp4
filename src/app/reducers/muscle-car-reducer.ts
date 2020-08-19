import { createReducer, on } from '@ngrx/store';
import { MuscleCar } from '../models/muscle-car';
import { AddMuscleCar, RemoveMuscleCar} from '../actions/muscle-car-actions';


export const muscleCarReducer = createReducer<MuscleCar[]>([],
    on(AddMuscleCar, (state, action) => {
        return [...state, action.muscleCar];
    }),
    on(RemoveMuscleCar, (state, action) => {
        return state.filter((flavor, index , stateArray) => (index !== action.muscleCarId));
    })
);
