"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebpackConfig = exports.preprocessTypescript = void 0;
const tslib_1 = require("tslib");
const wp = require("@cypress/webpack-preprocessor");
const tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const devkit_1 = require("@nrwl/devkit");
const cypress_version_1 = require("@nrwl/cypress/src/utils/cypress-version");
const nodeExternals = require("webpack-node-externals");
/**
 * @deprecated This function is no longer necessary and will be removed in Nx 14
 */
function preprocessTypescript(config, customizeWebpackConfig) {
    if ((0, cypress_version_1.installedCypressVersion)() >= 7) {
        console.log((0, devkit_1.stripIndents) `
    preprocessTypescript is now deprecated since Cypress has added typescript support.
    If you would still like preprocess files with webpack, use the "@cypress/webpack-preprocessor" package.`);
    }
    if (!config.env.tsConfig) {
        throw new Error('Please provide an absolute path to a tsconfig.json as cypressConfig.env.tsConfig');
    }
    return (file) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const webpackOptions = customizeWebpackConfig
            ? customizeWebpackConfig(getWebpackConfig(config))
            : getWebpackConfig(config);
        return wp({ webpackOptions })(file);
    });
}
exports.preprocessTypescript = preprocessTypescript;
function getWebpackConfig(config) {
    const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
    return {
        resolve: {
            extensions,
            plugins: [
                new tsconfig_paths_webpack_plugin_1.TsconfigPathsPlugin({
                    configFile: config.env.tsConfig,
                    extensions,
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.([jt])sx?$/,
                    loader: require.resolve('ts-loader'),
                    exclude: [/node_modules/],
                    options: {
                        configFile: config.env.tsConfig,
                        // https://github.com/TypeStrong/ts-loader/pull/685
                        experimentalWatchApi: true,
                        transpileOnly: true,
                    },
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    enabled: true,
                    configFile: config.env.tsConfig,
                },
            }),
        ],
        externals: [nodeExternals()],
    };
}
exports.getWebpackConfig = getWebpackConfig;
//# sourceMappingURL=preprocessor.js.map