import { ExecutorContext, TargetConfiguration, Tree } from '@nrwl/devkit';
import 'dotenv/config';
import { StorybookBuilderOptions } from './build-storybook/build-storybook.impl';
import { CommonNxStorybookConfig } from './models';
import { StorybookExecutorOptions } from './storybook/storybook.impl';
export interface NodePackage {
    name: string;
    version: string;
}
export declare function getStorybookFrameworkPath(uiFramework: any): any;
export declare function setStorybookAppProject(context: ExecutorContext, leadStorybookProject: string): void;
export declare function runStorybookSetupCheck(options: CommonNxStorybookConfig): void;
export declare function resolveCommonStorybookOptionMapper(builderOptions: CommonNxStorybookConfig, frameworkOptions: any, context: ExecutorContext): any;
export declare function customProjectBuildConfigIsValid(tree: Tree, projectBuildConfig: string): boolean;
export declare function findStorybookAndBuildTargets(targets: {
    [targetName: string]: TargetConfiguration;
}): {
    storybookBuildTarget?: string;
    storybookTarget?: string;
    buildTarget?: string;
};
export declare function normalizeAngularBuilderStylesOptions(builderOptions: StorybookBuilderOptions | StorybookExecutorOptions, uiFramework: '@storybook/angular' | '@storybook/react' | '@storybook/html' | '@storybook/web-components' | '@storybook/vue' | '@storybook/vue3' | '@storybook/svelte' | '@storybook/react-native'): StorybookBuilderOptions | StorybookExecutorOptions;
