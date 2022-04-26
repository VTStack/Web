import { QueryStateMerge } from 'query-state-core';
export declare type QueryString = string;
export declare type SetQueryStateFn<T> = (newState: QueryStateMerge, opts?: SetQueryStringOptions) => void;
export interface QueryStringInterface {
    getQueryString: () => QueryString;
    setQueryString: (newQueryString: QueryString, opts: SetQueryStringOptions) => void;
}
export interface SetQueryStringOptions {
    method?: 'replace' | 'push';
}
export declare type QueryStateOpts = {
    stripDefaults?: boolean;
    queryStringInterface?: QueryStringInterface;
};
export declare type QueryStateOptsSetInterface = {
    stripDefaults?: boolean;
};
export declare type QueryStateType = string | number | boolean | Date | string[];
