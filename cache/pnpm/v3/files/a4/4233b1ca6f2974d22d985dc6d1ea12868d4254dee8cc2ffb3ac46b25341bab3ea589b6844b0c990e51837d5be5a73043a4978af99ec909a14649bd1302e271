export declare type Reducer<S, A> = (prevState: S, action: A) => S;
export declare type ReducerWithoutAction<S> = (prevState: S) => S;
export declare type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
export declare type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
export declare type LazyValueFn<S> = () => S;
export declare type SetStateAction<S> = S | ((prevState: S) => S);
