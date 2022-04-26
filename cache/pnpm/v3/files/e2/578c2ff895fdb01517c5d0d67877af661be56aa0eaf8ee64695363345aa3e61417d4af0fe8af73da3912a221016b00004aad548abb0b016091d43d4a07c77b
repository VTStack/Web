import { SetStateAction } from '../types/sharedTypes';
export declare const LOCATION_STATE_KEY = "__useLocationState";
export declare type LocationStateValue<K = unknown> = string | number | boolean | undefined | Date | Array<K>;
export declare type LocationState = Record<string, LocationStateValue>;
export declare type GlobalLocationState = {
    [LOCATION_STATE_KEY]: LocationState;
    [key: string]: unknown;
};
export declare type LocationStateOpts = {
    locationStateInterface?: LocationStateInterface;
};
export interface LocationStateInterface {
    getLocationState: () => LocationState;
    setLocationState: (newState: LocationState, opts: SetLocationStateOptions) => void;
}
export interface SetLocationStateOptions {
    method?: 'replace' | 'push';
}
export declare type SetLocationState<T> = (newValue: SetStateAction<T>, opts?: SetLocationStateOptions) => void;
