import { WebWebpackExecutorOptions } from '../executors/webpack/webpack.impl';
import { FileReplacement } from './normalize';
export interface OptimizationOptions {
    scripts: boolean;
    styles: boolean;
}
export interface BuildBuilderOptions {
    main: string;
    outputPath: string;
    compiler: 'babel' | 'swc';
    tsConfig: string;
    watch?: boolean;
    sourceMap?: boolean | 'hidden';
    optimization?: boolean | OptimizationOptions;
    memoryLimit?: number;
    maxWorkers?: number;
    poll?: number;
    fileReplacements?: FileReplacement[];
    assets?: any[];
    progress?: boolean;
    statsJson?: boolean;
    extractLicenses?: boolean;
    verbose?: boolean;
    outputHashing?: any;
    webpackConfig?: string;
    root?: string;
    sourceRoot?: string;
}
export interface AssetGlobPattern {
    glob: string;
    input: string;
    output: string;
    ignore?: string[];
}
export declare type AssetPattern = AssetPatternClass | string;
export interface AssetPatternClass {
    glob: string;
    ignore?: string[];
    input: string;
    output: string;
}
export declare enum Type {
    All = "all",
    AllScript = "allScript",
    Any = "any",
    AnyComponentStyle = "anyComponentStyle",
    AnyScript = "anyScript",
    Bundle = "bundle",
    Initial = "initial"
}
export declare enum CrossOrigin {
    Anonymous = "anonymous",
    None = "none",
    UseCredentials = "use-credentials"
}
export declare type IndexUnion = IndexObject | string;
export interface IndexObject {
    input: string;
    output?: string;
}
export declare type Localize = string[] | boolean;
export declare type OptimizationUnion = boolean | OptimizationClass;
export interface OptimizationClass {
    scripts?: boolean;
    styles?: boolean;
}
export declare enum OutputHashing {
    All = "all",
    Bundles = "bundles",
    Media = "media",
    None = "none"
}
export declare type ExtraEntryPoint = ExtraEntryPointClass | string;
export interface ExtraEntryPointClass {
    bundleName?: string;
    inject?: boolean;
    input: string;
    lazy?: boolean;
}
export declare type SourceMapUnion = boolean | SourceMapClass;
export interface SourceMapClass {
    hidden?: boolean;
    scripts?: boolean;
    styles?: boolean;
    vendor?: boolean;
}
export interface StylePreprocessorOptions {
    includePaths?: string[];
}
export interface WebpackConfigOptions<T = WebWebpackExecutorOptions> {
    root: string;
    projectRoot: string;
    sourceRoot?: string;
    buildOptions: T;
    tsConfig: any;
    tsConfigPath: string;
    supportES2015: boolean;
}
