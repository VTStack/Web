import { ExecutorContext } from '@nrwl/devkit';
export declare const LARGE_BUFFER: number;
export declare type Json = {
    [k: string]: any;
};
export interface RunCommandsBuilderOptions extends Json {
    command?: string;
    commands?: ({
        command: string;
        forwardAllArgs?: boolean;
        /**
         * description was added to allow users to document their commands inline,
         * it is not intended to be used as part of the execution of the command.
         */
        description?: string;
    } | string)[];
    color?: boolean;
    parallel?: boolean;
    readyWhen?: string;
    cwd?: string;
    args?: string;
    envFile?: string;
    outputPath?: string;
}
export interface NormalizedRunCommandsBuilderOptions extends RunCommandsBuilderOptions {
    commands: {
        command: string;
        forwardAllArgs?: boolean;
    }[];
    parsedArgs: {
        [k: string]: any;
    };
}
export default function (options: RunCommandsBuilderOptions, context: ExecutorContext): Promise<{
    success: boolean;
}>;
