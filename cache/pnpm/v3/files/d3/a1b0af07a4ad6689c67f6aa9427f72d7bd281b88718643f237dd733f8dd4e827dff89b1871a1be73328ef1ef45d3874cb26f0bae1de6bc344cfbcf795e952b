import { LocationStateOpts, SetLocationStateOptions } from './useLocationState.types';
export declare type LocationDispatch<A> = (value: A, opts?: SetLocationStateOptions) => void;
export declare type LocationReducerFn<State, Action> = (state: State, action: Action) => State;
export declare function useLocationReducer<State, Action>(itemName: string, reducer: LocationReducerFn<State, Action>, initialState: State, opts?: LocationStateOpts): [State, LocationDispatch<Action>];
export declare function useLocationReducer<State, Action, InitialArg>(itemName: string, reducer: LocationReducerFn<State, Action>, initialArg: InitialArg, initStateFn: (initialArg: InitialArg) => State, opts?: LocationStateOpts): [State, LocationDispatch<Action>];
