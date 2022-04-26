import { AssetGlobPattern } from '../../../utils/shared-models';
import { WebRollupOptions } from '../schema';
export interface NormalizedWebRollupOptions extends WebRollupOptions {
    entryRoot: string;
    projectRoot: string;
    assets: AssetGlobPattern[];
    rollupConfig: string[];
}
export declare function normalizeWebRollupOptions(options: WebRollupOptions, root: string, sourceRoot: string): NormalizedWebRollupOptions;
