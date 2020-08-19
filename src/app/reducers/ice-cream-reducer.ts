import { createReducer, on } from '@ngrx/store';
import { IceCream } from '../models/ice-cream';
import { AddFlavor, RemoveFlavor} from '../actions/ice-cream-actions';

// Section 1
const initialState: IceCream = {
    flavor: 'Vanilla',
    maker: 'Honey Hut'
}

// Section 2 & 3 - Version 2

export const iceCreamReducer = createReducer<IceCream[]>([initialState],
    on(AddFlavor, (state, action) => {
        return [...state, action.iceCream];
    }),
    on(RemoveFlavor, (state, action) => {
        return state.filter((flavor, index , stateArray) => (index !== action.flavorId));
    })
);
