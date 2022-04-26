import { GeneratorCallback, Tree } from '@nrwl/devkit';
import { Schema } from './schema';
export interface NormalizedSchema extends Schema {
    name: string;
    fileName: string;
    projectRoot: string;
    routePath: string;
    projectDirectory: string;
    parsedTags: string[];
    appMain?: string;
    appSourceRoot?: string;
}
export declare function libraryGenerator(host: Tree, schema: Schema): Promise<GeneratorCallback>;
export default libraryGenerator;
export declare const librarySchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
