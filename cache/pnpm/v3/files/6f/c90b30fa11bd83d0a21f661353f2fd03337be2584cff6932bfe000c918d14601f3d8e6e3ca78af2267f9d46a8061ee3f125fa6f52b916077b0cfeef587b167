import { EmittedFile } from '../run-webpack';
import { ExtraEntryPoint } from '../shared-models';
export declare type LoadOutputFileFunctionType = (file: string) => string;
export declare type CrossOriginValue = 'none' | 'anonymous' | 'use-credentials';
export interface AugmentIndexHtmlOptions {
    input: string;
    inputContent: string;
    baseHref?: string;
    deployUrl?: string;
    sri: boolean;
    /** crossorigin attribute setting of elements that provide CORS support */
    crossOrigin?: CrossOriginValue;
    files: FileInfo[];
    /** Files that should be added using 'nomodule'. */
    noModuleFiles?: FileInfo[];
    /** Files that should be added using 'module'. */
    moduleFiles?: FileInfo[];
    loadOutputFile: LoadOutputFileFunctionType;
    /** Used to sort the inseration of files in the HTML file */
    entrypoints: string[];
}
export interface FileInfo {
    file: string;
    name: string;
    extension: string;
}
export declare function augmentIndexHtml(params: AugmentIndexHtmlOptions): string;
export interface WriteIndexHtmlOptions {
    outputPath: string;
    indexPath: string;
    files?: EmittedFile[];
    noModuleFiles?: EmittedFile[];
    moduleFiles?: EmittedFile[];
    baseHref?: string;
    deployUrl?: string;
    sri?: boolean;
    scripts?: ExtraEntryPoint[];
    styles?: ExtraEntryPoint[];
    postTransform?: IndexHtmlTransform;
    crossOrigin?: CrossOriginValue;
}
export declare type IndexHtmlTransform = (content: string) => Promise<string>;
export declare function writeIndexHtml({ outputPath, indexPath, files, noModuleFiles, moduleFiles, baseHref, deployUrl, sri, scripts, styles, postTransform, crossOrigin, }: WriteIndexHtmlOptions): Promise<void>;
