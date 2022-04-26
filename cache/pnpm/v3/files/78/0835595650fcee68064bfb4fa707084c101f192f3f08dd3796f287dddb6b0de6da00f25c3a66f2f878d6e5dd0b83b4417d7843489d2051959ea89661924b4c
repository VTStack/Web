"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeWebpackConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const webpack_merge_1 = require("webpack-merge");
const config_1 = require("./config");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
function getNodePartial(options) {
    const webpackConfig = {
        output: {
            libraryTarget: 'commonjs',
        },
        target: 'node',
        node: false,
    };
    if (options.optimization) {
        webpackConfig.optimization = {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        mangle: false,
                        keep_classnames: true,
                    },
                }),
            ],
            concatenateModules: true,
        };
    }
    if (options.externalDependencies === 'all') {
        const modulesDir = `${devkit_1.workspaceRoot}/node_modules`;
        webpackConfig.externals = [nodeExternals({ modulesDir })];
    }
    else if (Array.isArray(options.externalDependencies)) {
        webpackConfig.externals = [
            function (context, callback) {
                if (options.externalDependencies.includes(context.request)) {
                    // not bundled
                    return callback(null, `commonjs ${context.request}`);
                }
                // bundled
                callback();
            },
        ];
    }
    return webpackConfig;
}
function getNodeWebpackConfig(options) {
    return (0, webpack_merge_1.merge)([(0, config_1.getBaseWebpackPartial)(options), getNodePartial(options)]);
}
exports.getNodeWebpackConfig = getNodeWebpackConfig;
//# sourceMappingURL=node.config.js.map