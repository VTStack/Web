import * as rollup from 'rollup';
import type { ExecutorContext } from '@nrwl/devkit';
import { DependentBuildableProjectNode } from '@nrwl/workspace/src/utilities/buildable-libs-utils';
import { WebRollupOptions } from './schema';
import { NormalizedWebRollupOptions } from './lib/normalize';
export default function rollupExecutor(rawOptions: WebRollupOptions, context: ExecutorContext): AsyncGenerator<{
    success: boolean;
}, any, undefined>;
export declare function createRollupOptions(options: NormalizedWebRollupOptions, dependencies: DependentBuildableProjectNode[], context: ExecutorContext, packageJson: any, sourceRoot: string, npmDeps: string[]): rollup.InputOptions[];
