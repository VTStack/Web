import { Tree } from '@nrwl/devkit';
import { Schema } from './schema';
export interface CypressProjectSchema extends Schema {
    projectName: string;
    projectRoot: string;
}
export declare function addLinter(host: Tree, options: CypressProjectSchema): Promise<() => void>;
export declare function cypressProjectGenerator(host: Tree, schema: Schema): Promise<() => void>;
export default cypressProjectGenerator;
export declare const cypressProjectSchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
