import { ExecutorContext } from '@nrwl/devkit';
import 'dotenv/config';
import { CommonNxStorybookConfig } from '../models';
export interface StorybookExecutorOptions extends CommonNxStorybookConfig {
    host?: string;
    port?: number;
    quiet?: boolean;
    https?: boolean;
    sslCert?: string;
    sslKey?: string;
    staticDir?: string[];
    watch?: boolean;
    docsMode?: boolean;
}
export default function storybookExecutor(options: StorybookExecutorOptions, context: ExecutorContext): AsyncGenerator<{
    success: boolean;
}>;
