import { ExecutorContext } from '@nrwl/devkit';
export interface WebDevServerOptions {
    host: string;
    port: number;
    publicHost?: string;
    ssl: boolean;
    sslKey?: string;
    sslCert?: string;
    proxyConfig?: string;
    buildTarget: string;
    open: boolean;
    liveReload: boolean;
    hmr: boolean;
    watch: boolean;
    allowedHosts: string;
    maxWorkers?: number;
    memoryLimit?: number;
    baseHref?: string;
}
export default function devServerExecutor(serveOptions: WebDevServerOptions, context: ExecutorContext): AsyncGenerator<{
    baseUrl: string;
    emittedFiles: import("../../utils/run-webpack").EmittedFile[];
    success: boolean;
}, any, undefined>;
