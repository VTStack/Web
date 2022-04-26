"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmittedFiles = exports.runWebpackDevServer = exports.runWebpack = void 0;
const tslib_1 = require("tslib");
const webpack = require("webpack");
const rxjs_1 = require("rxjs");
const path_1 = require("path");
function runWebpack(config) {
    return new rxjs_1.Observable((subscriber) => {
        // Passing `watch` option here will result in a warning due to missing callback.
        // We manually call `.watch` or `.run` later so this option isn't needed here.
        const { watch } = config, normalizedConfig = tslib_1.__rest(config, ["watch"]);
        const webpackCompiler = webpack(normalizedConfig);
        const callback = (err, stats) => {
            if (err) {
                subscriber.error(err);
            }
            subscriber.next(stats);
        };
        if (config.watch) {
            const watchOptions = config.watchOptions || {};
            const watching = webpackCompiler.watch(watchOptions, callback);
            return () => watching.close(() => subscriber.complete());
        }
        else {
            webpackCompiler.run((err, stats) => {
                callback(err, stats);
                webpackCompiler.close((closeErr) => {
                    if (closeErr)
                        subscriber.error(closeErr);
                    subscriber.complete();
                });
            });
        }
    });
}
exports.runWebpack = runWebpack;
function runWebpackDevServer(config, webpack, WebpackDevServer) {
    return new rxjs_1.Observable((subscriber) => {
        const webpackCompiler = webpack(config);
        let baseUrl;
        webpackCompiler.hooks.done.tap('build-webpack', (stats) => {
            subscriber.next({ stats, baseUrl });
        });
        const devServerConfig = config.devServer || {};
        const originalOnListen = devServerConfig.onListening;
        devServerConfig.onListening = function (server) {
            originalOnListen(server);
            const devServerOptions = server.options;
            baseUrl = `${server.options.https ? 'https' : 'http'}://${server.options.host}:${server.options.port}${devServerOptions.devMiddleware.publicPath}`;
        };
        const webpackServer = new WebpackDevServer(devServerConfig, webpackCompiler);
        try {
            webpackServer.start().catch((err) => subscriber.error(err));
            return () => webpackServer.stop();
        }
        catch (e) {
            throw new Error('Could not start start dev server');
        }
    });
}
exports.runWebpackDevServer = runWebpackDevServer;
function getEmittedFiles(stats) {
    const { compilation } = stats;
    const files = [];
    // adds all chunks to the list of emitted files such as lazy loaded modules
    for (const chunk of compilation.chunks) {
        for (const file of chunk.files) {
            files.push({
                // The id is guaranteed to exist at this point in the compilation process
                // tslint:disable-next-line: no-non-null-assertion
                id: chunk.id.toString(),
                name: chunk.name,
                file,
                extension: (0, path_1.extname)(file),
                initial: chunk.isOnlyInitial(),
            });
        }
    }
    // other all files
    for (const file of Object.keys(compilation.assets)) {
        files.push({
            file,
            extension: (0, path_1.extname)(file),
            initial: false,
            asset: true,
        });
    }
    // dedupe
    return files.filter(({ file, name }, index) => files.findIndex((f) => f.file === file && (!name || name === f.name)) ===
        index);
}
exports.getEmittedFiles = getEmittedFiles;
//# sourceMappingURL=run-webpack.js.map