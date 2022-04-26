import { WebWebpackExecutorOptions } from '../executors/webpack/webpack.impl';
import { AssetGlobPattern, BuildBuilderOptions, ExtraEntryPoint, ExtraEntryPointClass } from './shared-models';
export interface FileReplacement {
    replace: string;
    with: string;
}
export declare function normalizeBuildOptions<T extends BuildBuilderOptions>(options: T, root: string, sourceRoot: string): T;
export declare function normalizePluginPath(pluginPath: void | string, root: string): string;
export declare function normalizeAssets(assets: any[], root: string, sourceRoot: string): AssetGlobPattern[];
export declare function normalizeWebBuildOptions(options: WebWebpackExecutorOptions, root: string, sourceRoot: string): WebWebpackExecutorOptions;
export declare function convertBuildOptions(buildOptions: WebWebpackExecutorOptions): any;
export declare type NormalizedEntryPoint = Required<Omit<ExtraEntryPointClass, 'lazy'>>;
export declare function normalizeExtraEntryPoints(extraEntryPoints: ExtraEntryPoint[], defaultBundleName: string): NormalizedEntryPoint[];
