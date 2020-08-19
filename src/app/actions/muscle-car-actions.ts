import { createAction, props } from '@ngrx/store';
import { MuscleCar } from '../models/muscle-car';


// Use createAction to define a function that will produce a desired Action
// with the data that is defined on the Action.

export const AddMuscleCar = createAction('[MUSCLECAR] Add', props< {muscleCar: MuscleCar} >());
export const RemoveMuscleCar = createAction('[MUSCLECAR] Remove', props< {muscleCarId: number} >());
