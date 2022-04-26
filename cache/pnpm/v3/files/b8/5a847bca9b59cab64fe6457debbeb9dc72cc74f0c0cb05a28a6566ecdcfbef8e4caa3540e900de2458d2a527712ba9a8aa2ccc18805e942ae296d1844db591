"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserConfig = void 0;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const license_webpack_plugin_1 = require("license-webpack-plugin");
const webpack_subresource_integrity_1 = require("webpack-subresource-integrity");
function getBrowserConfig(wco) {
    const { buildOptions } = wco;
    const extraPlugins = [];
    if (buildOptions.subresourceIntegrity) {
        extraPlugins.push(new webpack_subresource_integrity_1.SubresourceIntegrityPlugin());
    }
    if (buildOptions.extractLicenses) {
        extraPlugins.push(new license_webpack_plugin_1.LicenseWebpackPlugin({
            stats: {
                warnings: false,
                errors: false,
            },
            perChunkOutput: false,
            outputFilename: `3rdpartylicenses.txt`,
        }));
    }
    return {
        resolve: {
            mainFields: [
                ...(wco.supportES2015 ? ['es2015'] : []),
                'browser',
                'module',
                'main',
            ],
        },
        output: {
            crossOriginLoading: buildOptions.subresourceIntegrity
                ? 'anonymous'
                : false,
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                maxAsyncRequests: Infinity,
                cacheGroups: {
                    default: !!buildOptions.commonChunk && {
                        chunks: 'async',
                        minChunks: 2,
                        priority: 10,
                    },
                    common: !!buildOptions.commonChunk && {
                        name: 'common',
                        chunks: 'async',
                        minChunks: 2,
                        enforce: true,
                        priority: 5,
                    },
                    vendors: false,
                    vendor: !!buildOptions.vendorChunk && {
                        name: 'vendor',
                        chunks: (chunk) => chunk.name === 'main',
                        enforce: true,
                        test: /[\\/]node_modules[\\/]/,
                    },
                },
            },
        },
        plugins: extraPlugins,
        node: false,
    };
}
exports.getBrowserConfig = getBrowserConfig;
//# sourceMappingURL=browser.js.map