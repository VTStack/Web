import * as webpack from 'webpack';
import { Observable } from 'rxjs';
export declare function runWebpack(config: webpack.Configuration): Observable<any>;
export declare function runWebpackDevServer(config: any, webpack: typeof import('webpack'), WebpackDevServer: typeof import('webpack-dev-server')): Observable<{
    stats: any;
    baseUrl: string;
}>;
export interface EmittedFile {
    id?: string;
    name?: string;
    file: string;
    extension: string;
    initial: boolean;
    asset?: boolean;
}
export declare function getEmittedFiles(stats: webpack.Stats): EmittedFile[];
