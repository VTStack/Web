import { Configuration } from 'webpack';
import { WebWebpackExecutorOptions } from '../executors/webpack/webpack.impl';
export declare function getWebConfig(workspaceRoot: any, projectRoot: any, sourceRoot: any, options: WebWebpackExecutorOptions, esm?: boolean, isScriptOptimizeOn?: boolean, configuration?: string): Configuration | {
    resolve: {
        mainFields: string[];
    };
    output: {
        crossOriginLoading: string | boolean;
    };
    optimization: {
        runtimeChunk: string;
        splitChunks: {
            maxAsyncRequests: number;
            cacheGroups: {
                default: {
                    chunks: string;
                    minChunks: number;
                    priority: number;
                };
                common: {
                    name: string;
                    chunks: string;
                    minChunks: number;
                    enforce: boolean;
                    priority: number;
                };
                vendors: boolean;
                vendor: {
                    name: string;
                    chunks: (chunk: any) => boolean;
                    enforce: boolean;
                    test: RegExp;
                };
            };
        };
    };
    plugins: any[];
    node: boolean;
};
export declare function getStylesPartial(workspaceRoot: string, projectRoot: string, options: any, extractCss: boolean, postcssConfig?: string): Configuration;
export declare function getPolyfillsPartial(polyfills: string, es2015Polyfills: string, esm: boolean, isScriptOptimizeOn: boolean): Configuration;
