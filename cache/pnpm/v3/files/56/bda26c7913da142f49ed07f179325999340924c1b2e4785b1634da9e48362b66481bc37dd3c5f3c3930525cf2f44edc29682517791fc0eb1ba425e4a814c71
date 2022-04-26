import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/**
 * @deprecated This function is no longer necessary and will be removed in Nx 14
 */
export declare function preprocessTypescript(config: any, customizeWebpackConfig?: (webpackConfig: any) => any): (file: any) => Promise<Promise<string>>;
export declare function getWebpackConfig(config: any): {
    resolve: {
        extensions: string[];
        plugins: TsconfigPathsPlugin[];
    };
    module: {
        rules: {
            test: RegExp;
            loader: string;
            exclude: RegExp[];
            options: {
                configFile: any;
                experimentalWatchApi: boolean;
                transpileOnly: boolean;
            };
        }[];
    };
    plugins: ForkTsCheckerWebpackPlugin[];
    externals: any[];
};
