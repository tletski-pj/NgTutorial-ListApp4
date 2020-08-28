import { createReducer } from '@ngrx/store';
import { User } from '../models/user';

const initialState: User = {
    name: 'Tex'
};

export const iceCreamReducer = createReducer<User>(initialState);
