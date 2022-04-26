import { ExecutorContext } from '@nrwl/devkit';
import { DeployExecutorOptions } from './schema';
import { BuildTarget } from './utils';
export default function deploy(engine: {
    run: (dir: string, options: DeployExecutorOptions) => Promise<void>;
}, context: ExecutorContext, buildTarget: BuildTarget, options: DeployExecutorOptions): Promise<void>;
