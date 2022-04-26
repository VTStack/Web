"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCustomWebpackConfig = exports.tsNodeRegister = void 0;
function tsNodeRegister(file = '', tsConfig) {
    if (!(file === null || file === void 0 ? void 0 : file.endsWith('.ts')))
        return;
    // Register TS compiler lazily
    require('ts-node').register({
        project: tsConfig,
        compilerOptions: {
            module: 'CommonJS',
            types: ['node'],
        },
    });
    // Register paths in tsConfig
    const tsconfigPaths = require('tsconfig-paths');
    const { absoluteBaseUrl: baseUrl, paths } = tsconfigPaths.loadConfig(tsConfig);
    if (baseUrl && paths) {
        tsconfigPaths.register({ baseUrl, paths });
    }
}
exports.tsNodeRegister = tsNodeRegister;
function resolveCustomWebpackConfig(path, tsConfig) {
    tsNodeRegister(path, tsConfig);
    const customWebpackConfig = require(path);
    // If the user provides a configuration in TS file
    // then there are 2 cases for exporing an object. The first one is:
    // `module.exports = { ... }`. And the second one is:
    // `export default { ... }`. The ESM format is compiled into:
    // `{ default: { ... } }`
    return customWebpackConfig.default || customWebpackConfig;
}
exports.resolveCustomWebpackConfig = resolveCustomWebpackConfig;
//# sourceMappingURL=custom-webpack.js.map