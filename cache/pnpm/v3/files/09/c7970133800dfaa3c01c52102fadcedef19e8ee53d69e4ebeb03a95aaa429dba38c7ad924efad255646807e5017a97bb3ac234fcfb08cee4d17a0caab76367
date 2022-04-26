"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevServerConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
const path_1 = require("path");
const web_config_1 = require("./web.config");
const serve_path_1 = require("./serve-path");
const fs_extra_1 = require("fs-extra");
const index_html_webpack_plugin_1 = require(".//webpack/plugins/index-html-webpack-plugin");
const package_chunk_sort_1 = require("./webpack/package-chunk-sort");
function getDevServerConfig(workspaceRoot, projectRoot, sourceRoot, buildOptions, serveOptions) {
    const webpackConfig = (0, web_config_1.getWebConfig)(workspaceRoot, projectRoot, sourceRoot, buildOptions, true, // Don't need to support legacy browsers for dev.
    false);
    webpackConfig.devServer = getDevServerPartial(workspaceRoot, serveOptions, buildOptions);
    const { deployUrl, subresourceIntegrity, scripts = [], styles = [], index, baseHref, } = buildOptions;
    webpackConfig.plugins.push(new index_html_webpack_plugin_1.IndexHtmlWebpackPlugin({
        indexPath: (0, path_1.resolve)(workspaceRoot, index),
        outputPath: (0, path_1.basename)(index),
        baseHref,
        entrypoints: (0, package_chunk_sort_1.generateEntryPoints)({ scripts, styles }),
        deployUrl,
        sri: subresourceIntegrity,
        moduleEntrypoints: [],
        noModuleEntrypoints: ['polyfills-es5'],
    }));
    return webpackConfig;
}
exports.getDevServerConfig = getDevServerConfig;
function getDevServerPartial(root, options, buildOptions) {
    const servePath = (0, serve_path_1.buildServePath)(buildOptions);
    const { scripts: scriptsOptimization, styles: stylesOptimization } = buildOptions.optimization;
    const config = {
        host: options.host,
        port: options.port,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
            index: `${servePath}${path.basename(buildOptions.index)}`,
            disableDotRule: true,
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        },
        onListening(server) {
            devkit_1.logger.info(`NX Web Development Server is listening at ${server.options.https ? 'https' : 'http'}://${server.options.host}:${server.options.port}${(0, serve_path_1.buildServePath)(buildOptions)}`);
        },
        open: options.open,
        static: false,
        compress: scriptsOptimization || stylesOptimization,
        https: options.ssl,
        devMiddleware: {
            publicPath: servePath,
            stats: false,
        },
        client: {
            webSocketURL: options.publicHost,
            overlay: {
                errors: !(scriptsOptimization || stylesOptimization),
                warnings: false,
            },
        },
        liveReload: options.hmr ? false : options.liveReload,
        hot: options.hmr,
    };
    if (options.ssl && options.sslKey && options.sslCert) {
        config.https = getSslConfig(root, options);
    }
    if (options.proxyConfig) {
        config.proxy = getProxyConfig(root, options);
    }
    if (options.allowedHosts) {
        config.allowedHosts = options.allowedHosts.split(',');
    }
    return config;
}
function getSslConfig(root, options) {
    return {
        key: (0, fs_extra_1.readFileSync)(path.resolve(root, options.sslKey), 'utf-8'),
        cert: (0, fs_extra_1.readFileSync)(path.resolve(root, options.sslCert), 'utf-8'),
    };
}
function getProxyConfig(root, options) {
    const proxyPath = path.resolve(root, options.proxyConfig);
    return require(proxyPath);
}
//# sourceMappingURL=devserver.config.js.map