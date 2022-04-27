import type { Tree } from '@nrwl/devkit';
import type { NestGeneratorWithLanguageOption } from '../utils';
export declare type ModuleGeneratorOptions = NestGeneratorWithLanguageOption & {
    module?: string;
    skipImport?: boolean;
};
export declare function moduleGenerator(tree: Tree, rawOptions: ModuleGeneratorOptions): Promise<any>;
export default moduleGenerator;
export declare const moduleSchematic: (generatorOptions: ModuleGeneratorOptions) => (tree: any, context: any) => Promise<any>;
