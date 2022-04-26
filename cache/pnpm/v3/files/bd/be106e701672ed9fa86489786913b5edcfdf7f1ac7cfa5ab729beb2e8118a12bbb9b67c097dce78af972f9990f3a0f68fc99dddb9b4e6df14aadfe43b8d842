import { ExecutorContext } from '@nrwl/devkit';
import { WebDevServerOptions } from '@nrwl/web/src/executors/dev-server/dev-server.impl';
declare type ModuleFederationDevServerOptions = WebDevServerOptions & {
    devRemotes?: string | string[];
};
export default function moduleFederationDevServer(options: ModuleFederationDevServerOptions, context: ExecutorContext): AsyncGenerator<{
    baseUrl: string;
    emittedFiles: import("../../../../../build/packages/web/src/utils/run-webpack").EmittedFile[];
    success: boolean;
}, any, undefined>;
export {};
