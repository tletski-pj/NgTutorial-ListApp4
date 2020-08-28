import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IceCreamState  } from '../models/ice-cream';

const getIceCreamFeatureState = createFeatureSelector<IceCreamState>('iceCream');

export const getIceCreams = createSelector(
    getIceCreamFeatureState,
    state => state.iceCream
);
