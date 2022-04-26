import { WebpackConfigOptions } from '../../shared-models';
export declare function getBrowserConfig(wco: WebpackConfigOptions): {
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
