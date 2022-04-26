import { ExecutorContext } from '@nrwl/devkit';
import 'dotenv/config';
import { CommonNxStorybookConfig } from '../models';
export interface StorybookBuilderOptions extends CommonNxStorybookConfig {
    quiet?: boolean;
    outputPath?: string;
    docsMode?: boolean;
}
export default function buildStorybookExecutor(options: StorybookBuilderOptions, context: ExecutorContext): Promise<{
    success: boolean;
}>;
