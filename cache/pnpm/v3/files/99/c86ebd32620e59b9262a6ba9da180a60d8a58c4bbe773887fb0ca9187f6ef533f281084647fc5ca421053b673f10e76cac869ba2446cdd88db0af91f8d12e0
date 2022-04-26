import { ExecutorContext } from '@nrwl/devkit';
import type { BuildBuilderOptions } from '../../utils/shared-models';
import { ExtraEntryPoint } from '../../utils/shared-models';
import { CrossOriginValue } from '../../utils/webpack/write-index-html';
export interface WebWebpackExecutorOptions extends BuildBuilderOptions {
    index: string;
    budgets?: any[];
    baseHref?: string;
    deployUrl?: string;
    crossOrigin?: CrossOriginValue;
    polyfills?: string;
    es2015Polyfills?: string;
    scripts: ExtraEntryPoint[];
    styles: ExtraEntryPoint[];
    vendorChunk?: boolean;
    commonChunk?: boolean;
    namedChunks?: boolean;
    stylePreprocessorOptions?: any;
    subresourceIntegrity?: boolean;
    verbose?: boolean;
    buildLibsFromSource?: boolean;
    deleteOutputPath?: boolean;
    generateIndexHtml?: boolean;
    postcssConfig?: string;
}
export declare function run(options: WebWebpackExecutorOptions, context: ExecutorContext): AsyncGenerator<{
    success: boolean;
    emittedFiles: import("../../utils/run-webpack").EmittedFile[];
}, any, undefined>;
export default run;
