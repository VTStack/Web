import { ExecutorContext, Tree } from '@nrwl/devkit';
import { CompilerOptions } from 'typescript';
import { StorybookConfig } from '../executors/models';
export declare const Constants: {
    addonDependencies: string[];
    tsConfigExclusions: string[];
    pkgJsonScripts: {
        storybook: string;
    };
    jsonIndentLevel: number;
    coreAddonPrefix: string;
    uiFrameworks: {
        readonly angular: "@storybook/angular";
        readonly react: "@storybook/react";
        readonly html: "@storybook/html";
        readonly 'web-components': "@storybook/web-components";
        readonly vue: "@storybook/vue";
        readonly vue3: "@storybook/vue3";
        readonly svelte: "@storybook/svelte";
        readonly 'react-native': "@storybook/react-native";
    };
};
declare type Constants = typeof Constants;
declare type Framework = {
    type: keyof Constants['uiFrameworks'];
    uiFramework: Constants['uiFrameworks'][keyof Constants['uiFrameworks']];
};
export declare function isFramework(type: Framework['type'], schema: Pick<Framework, 'uiFramework'>): boolean;
export declare function safeFileDelete(tree: Tree, path: string): boolean;
export declare function readCurrentWorkspaceStorybookVersionFromGenerator(tree: Tree): string;
export declare function readCurrentWorkspaceStorybookVersionFromExecutor(): string;
export declare type TsConfig = {
    extends: string;
    compilerOptions: CompilerOptions;
    files?: string[];
    include?: string[];
    exclude?: string[];
    references?: Array<{
        path: string;
    }>;
};
export declare function findOrCreateConfig(config: StorybookConfig, context: ExecutorContext): string;
export {};
