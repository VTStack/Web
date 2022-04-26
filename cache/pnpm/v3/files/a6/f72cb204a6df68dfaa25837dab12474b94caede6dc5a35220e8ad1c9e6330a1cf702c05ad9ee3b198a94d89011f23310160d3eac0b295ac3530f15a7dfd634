import * as ts from 'typescript';
import { Tree } from '@nrwl/devkit';
export interface CreateComponentSpecFileSchema {
    project: string;
    componentPath: string;
    js?: boolean;
    cypressProject?: string;
}
export declare function componentCypressGenerator(host: Tree, schema: CreateComponentSpecFileSchema): void;
export declare function getArgsDefaultValue(property: ts.SyntaxKind): string;
export declare function createComponentSpecFile(tree: Tree, { project, componentPath, js, cypressProject }: CreateComponentSpecFileSchema): void;
export default componentCypressGenerator;
export declare const componentCypressSchematic: (generatorOptions: CreateComponentSpecFileSchema) => (tree: any, context: any) => Promise<any>;
