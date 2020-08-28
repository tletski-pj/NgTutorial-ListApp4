import { createReducer, on } from '@ngrx/store';
import { AddFlavor, RemoveFlavor} from '../actions/ice-cream-actions';
import { IceCreamState  } from '../models/ice-cream';

const initialState: IceCreamState = {
    iceCream: [
        { flavor: 'Vanilla', maker: 'Honey Hut'}
    ]
};

export const iceCreamReducer = createReducer<IceCreamState>(
    initialState,
    on(AddFlavor, (state: IceCreamState, action) => {
        return {iceCream: [...state.iceCream, action.iceCream]};
    }),
    on(RemoveFlavor, (state: IceCreamState, action) => {
        const iceCreamArray = state.iceCream.filter((flavor, index , stateArray) => (index !== action.flavorId));
        return {iceCream: iceCreamArray};
    })
);
