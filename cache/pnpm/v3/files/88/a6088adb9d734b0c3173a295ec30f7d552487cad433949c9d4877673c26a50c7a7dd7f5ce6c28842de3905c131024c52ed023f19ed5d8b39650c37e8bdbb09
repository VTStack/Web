"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseWebpackPartial = exports.OUT_FILENAME_TEMPLATE = void 0;
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const license_webpack_plugin_1 = require("license-webpack-plugin");
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const ts = require("typescript");
const webpack = require("webpack");
const load_ts_transformers_1 = require("./load-ts-transformers");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const runtime_lint_utils_1 = require("@nrwl/workspace/src/utils/runtime-lint-utils");
exports.OUT_FILENAME_TEMPLATE = '[name].js';
function getBaseWebpackPartial(options) {
    var _a, _b, _c;
    const { options: compilerOptions } = (0, typescript_1.readTsConfig)(options.tsConfig);
    const supportsEs2015 = compilerOptions.target !== ts.ScriptTarget.ES3 &&
        compilerOptions.target !== ts.ScriptTarget.ES5;
    const mainFields = [...(supportsEs2015 ? ['es2015'] : []), 'module', 'main'];
    const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
    const { compilerPluginHooks, hasPlugin } = (0, load_ts_transformers_1.loadTsTransformers)(options.transformers);
    const additionalEntryPoints = (_b = (_a = options.additionalEntryPoints) === null || _a === void 0 ? void 0 : _a.reduce((obj, current) => (Object.assign(Object.assign({}, obj), { [current.entryName]: current.entryPath })), {})) !== null && _b !== void 0 ? _b : {};
    const mainEntry = options.outputFileName
        ? (0, runtime_lint_utils_1.removeExt)(options.outputFileName)
        : 'main';
    const webpackConfig = {
        entry: Object.assign({ [mainEntry]: [options.main] }, additionalEntryPoints),
        devtool: options.sourceMap ? 'source-map' : false,
        mode: options.optimization ? 'production' : 'development',
        output: {
            path: options.outputPath,
            filename: ((_c = options.additionalEntryPoints) === null || _c === void 0 ? void 0 : _c.length) > 0
                ? exports.OUT_FILENAME_TEMPLATE
                : options.outputFileName,
            hashFunction: 'xxhash64',
            // Disabled for performance
            pathinfo: false,
        },
        module: {
            // Enabled for performance
            unsafeCache: true,
            rules: [
                {
                    test: /\.([jt])sx?$/,
                    loader: require.resolve(`ts-loader`),
                    exclude: /node_modules/,
                    options: {
                        configFile: options.tsConfig,
                        transpileOnly: !hasPlugin,
                        // https://github.com/TypeStrong/ts-loader/pull/685
                        experimentalWatchApi: true,
                        getCustomTransformers: (program) => ({
                            before: compilerPluginHooks.beforeHooks.map((hook) => hook(program)),
                            after: compilerPluginHooks.afterHooks.map((hook) => hook(program)),
                            afterDeclarations: compilerPluginHooks.afterDeclarationsHooks.map((hook) => hook(program)),
                        }),
                    },
                },
            ],
        },
        resolve: {
            extensions,
            alias: getAliases(options),
            plugins: [
                new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin({
                    configFile: options.tsConfig,
                    extensions,
                    mainFields,
                }),
            ],
            mainFields,
        },
        performance: {
            hints: false,
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                // For watch mode, type errors should result in failure.
                async: false,
                typescript: {
                    enabled: true,
                    configFile: options.tsConfig,
                    memoryLimit: options.memoryLimit || 2018,
                },
            }),
        ],
        watch: options.watch,
        watchOptions: {
            // Delay the next rebuild from first file change, otherwise can lead to
            // two builds on a single file change.
            aggregateTimeout: 200,
            poll: options.poll,
        },
        stats: getStatsConfig(options),
        experiments: {
            cacheUnaffected: true,
        },
    };
    const extraPlugins = [];
    if (options.progress) {
        extraPlugins.push(new webpack.ProgressPlugin());
    }
    if (options.extractLicenses) {
        extraPlugins.push(new license_webpack_plugin_1.LicenseWebpackPlugin({
            stats: {
                errors: false,
            },
            perChunkOutput: false,
            outputFilename: `3rdpartylicenses.txt`,
        }));
    }
    // process asset entries
    if (Array.isArray(options.assets) && options.assets.length > 0) {
        const copyWebpackPluginInstance = new CopyWebpackPlugin({
            patterns: options.assets.map((asset) => {
                var _a;
                return {
                    context: asset.input,
                    // Now we remove starting slash to make Webpack place it from the output root.
                    to: asset.output,
                    from: asset.glob,
                    globOptions: {
                        ignore: [
                            '.gitkeep',
                            '**/.DS_Store',
                            '**/Thumbs.db',
                            ...((_a = asset.ignore) !== null && _a !== void 0 ? _a : []),
                        ],
                        dot: true,
                    },
                };
            }),
        });
        new CopyWebpackPlugin({
            patterns: options.assets.map((asset) => {
                var _a;
                return {
                    context: asset.input,
                    // Now we remove starting slash to make Webpack place it from the output root.
                    to: asset.output,
                    from: asset.glob,
                    globOptions: {
                        ignore: [
                            '.gitkeep',
                            '**/.DS_Store',
                            '**/Thumbs.db',
                            ...((_a = asset.ignore) !== null && _a !== void 0 ? _a : []),
                        ],
                        dot: true,
                    },
                };
            }),
        });
        extraPlugins.push(copyWebpackPluginInstance);
    }
    webpackConfig.plugins = [...webpackConfig.plugins, ...extraPlugins];
    return webpackConfig;
}
exports.getBaseWebpackPartial = getBaseWebpackPartial;
function getAliases(options) {
    return options.fileReplacements.reduce((aliases, replacement) => (Object.assign(Object.assign({}, aliases), { [replacement.replace]: replacement.with })), {});
}
function getStatsConfig(options) {
    return {
        hash: true,
        timings: false,
        cached: false,
        cachedAssets: false,
        modules: false,
        warnings: true,
        errors: true,
        colors: !options.verbose && !options.statsJson,
        chunks: !options.verbose,
        assets: !!options.verbose,
        chunkOrigins: !!options.verbose,
        chunkModules: !!options.verbose,
        children: !!options.verbose,
        reasons: !!options.verbose,
        version: !!options.verbose,
        errorDetails: !!options.verbose,
        moduleTrace: !!options.verbose,
        usedExports: !!options.verbose,
    };
}
//# sourceMappingURL=config.js.map