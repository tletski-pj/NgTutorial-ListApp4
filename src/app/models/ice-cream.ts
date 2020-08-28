import { AppState as BaseAppState } from '../app.state';

export interface IceCream {
    flavor: string;
    maker: string;
}

export interface IceCreamState {
    iceCream: IceCream[];
}

export interface AppState extends BaseAppState {
    iceCream: IceCreamState;
}
