import type { Tree } from '@nrwl/devkit';
import type { NestGeneratorWithLanguageOption, NestGeneratorWithTestOption } from '../utils';
export declare type ControllerGeneratorOptions = NestGeneratorWithLanguageOption & NestGeneratorWithTestOption & {
    module?: string;
    skipImport?: boolean;
};
export declare function controllerGenerator(tree: Tree, rawOptions: ControllerGeneratorOptions): Promise<any>;
export default controllerGenerator;
export declare const controllerSchematic: (generatorOptions: ControllerGeneratorOptions) => (tree: any, context: any) => Promise<any>;
