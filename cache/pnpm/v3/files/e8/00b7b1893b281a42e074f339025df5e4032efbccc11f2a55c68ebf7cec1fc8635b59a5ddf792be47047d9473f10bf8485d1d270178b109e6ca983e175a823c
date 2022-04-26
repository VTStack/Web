import { Tree } from '@nrwl/devkit';
import { Schema } from './schema';
export interface NormalizedSchema extends Schema {
    name: string;
    prefix: string;
    fileName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
    compiler: 'swc' | 'tsc';
}
export declare function libraryGenerator(tree: Tree, schema: Schema): Promise<import("@nrwl/devkit").GeneratorCallback>;
export default libraryGenerator;
export declare const librarySchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
