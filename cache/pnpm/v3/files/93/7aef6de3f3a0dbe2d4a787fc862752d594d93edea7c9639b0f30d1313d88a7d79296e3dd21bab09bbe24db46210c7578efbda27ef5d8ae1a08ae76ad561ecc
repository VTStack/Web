import { QueryStateOpts, SetQueryStringOptions } from './useQueryState.types';
import { ReducerState } from 'react';
import { Reducer, ReducerAction } from '../types/sharedTypes';
export declare type QueryDispatch<A> = (value: A | null, opts?: SetQueryStringOptions) => void;
export declare function useQueryReducer<R extends Reducer<ReducerState<R>, ReducerAction<R>>>(itemName: string, reducer: R, initialState: ReducerState<R>, queryStateOpts?: QueryStateOpts): [ReducerState<R>, QueryDispatch<ReducerAction<R>>];
export declare function useQueryReducer<R extends Reducer<ReducerState<R>, ReducerAction<R>>, InitialArg>(itemName: string, reducer: R, initialArg: InitialArg, initStateFn: (initialArg: InitialArg) => ReducerState<R>, queryStateOpts?: QueryStateOpts): [ReducerState<R>, QueryDispatch<ReducerAction<R>>];
