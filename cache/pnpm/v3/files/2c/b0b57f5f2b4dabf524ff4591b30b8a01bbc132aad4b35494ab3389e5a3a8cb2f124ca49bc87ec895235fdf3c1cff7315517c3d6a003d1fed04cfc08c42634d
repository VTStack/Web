import { IndexHtmlGenerator, IndexHtmlGeneratorOptions, IndexHtmlGeneratorProcessOptions } from './index-file/index-html-generator';
export interface IndexHtmlWebpackPluginOptions extends IndexHtmlGeneratorOptions, Omit<IndexHtmlGeneratorProcessOptions, 'files' | 'noModuleFiles' | 'moduleFiles'> {
    noModuleEntrypoints: string[];
    moduleEntrypoints: string[];
}
declare type Compiler = any;
export declare class IndexHtmlWebpackPlugin extends IndexHtmlGenerator {
    readonly options: IndexHtmlWebpackPluginOptions;
    private _compilation;
    get compilation(): any;
    constructor(options: IndexHtmlWebpackPluginOptions);
    apply(compiler: Compiler): void;
    readAsset(path: string): Promise<string>;
    protected readIndex(path: string): Promise<string>;
}
export {};
