import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MuscleCarState  } from '../models/muscle-car';

const getMuscleCarFeatureState = createFeatureSelector<MuscleCarState>('muscleCar');

export const getMuscleCars = createSelector(
    getMuscleCarFeatureState,
    state => state.muscleCar
);
