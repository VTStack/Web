"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const webpack = require("webpack");
const devkit_1 = require("@nrwl/devkit");
const rxjs_for_await_1 = require("rxjs-for-await");
const operators_1 = require("rxjs/operators");
const WebpackDevServer = require("webpack-dev-server");
const normalize_1 = require("../../utils/normalize");
const devserver_config_1 = require("../../utils/devserver.config");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
const devkit_2 = require("@nrwl/devkit");
const run_webpack_1 = require("../../utils/run-webpack");
const custom_webpack_1 = require("../../utils/webpack/custom-webpack");
function devServerExecutor(serveOptions, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* devServerExecutor_1() {
        const { root: projectRoot, sourceRoot } = context.workspace.projects[context.projectName];
        const buildOptions = (0, normalize_1.normalizeWebBuildOptions)(getBuildOptions(serveOptions, context), context.root, sourceRoot);
        if (!buildOptions.buildLibsFromSource) {
            const { target, dependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)((0, devkit_2.readCachedProjectGraph)(), context.root, context.projectName, 'build', // should be generalized
            context.configurationName);
            buildOptions.tsConfig = (0, buildable_libs_utils_1.createTmpTsConfig)(buildOptions.tsConfig, context.root, target.data.root, dependencies);
        }
        let webpackConfig = (0, devserver_config_1.getDevServerConfig)(context.root, projectRoot, sourceRoot, buildOptions, serveOptions);
        if (buildOptions.webpackConfig) {
            let customWebpack = (0, custom_webpack_1.resolveCustomWebpackConfig)(buildOptions.webpackConfig, buildOptions.tsConfig);
            if (typeof customWebpack.then === 'function') {
                customWebpack = yield tslib_1.__await(customWebpack);
            }
            webpackConfig = customWebpack(webpackConfig, {
                buildOptions,
                configuration: serveOptions.buildTarget.split(':')[2],
            });
        }
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, rxjs_for_await_1.eachValueFrom)((0, run_webpack_1.runWebpackDevServer)(webpackConfig, webpack, WebpackDevServer).pipe((0, operators_1.tap)(({ stats }) => {
            console.info(stats.toString(webpackConfig.stats));
        }), (0, operators_1.map)(({ baseUrl, stats }) => {
            return {
                baseUrl,
                emittedFiles: (0, run_webpack_1.getEmittedFiles)(stats),
                success: !stats.hasErrors(),
            };
        })))))));
    });
}
exports.default = devServerExecutor;
function getBuildOptions(options, context) {
    var _a;
    const target = (0, devkit_1.parseTargetString)(options.buildTarget);
    // TODO(jack): [Nx 14] Remove this line once we generate `development` configuration by default + add migration for it if missing
    (_a = target.configuration) !== null && _a !== void 0 ? _a : (target.configuration = '');
    const overrides = {
        watch: false,
    };
    if (options.maxWorkers) {
        overrides.maxWorkers = options.maxWorkers;
    }
    if (options.memoryLimit) {
        overrides.memoryLimit = options.memoryLimit;
    }
    if (options.baseHref) {
        overrides.baseHref = options.baseHref;
    }
    const buildOptions = (0, devkit_1.readTargetOptions)(target, context);
    return Object.assign(Object.assign({}, buildOptions), overrides);
}
//# sourceMappingURL=dev-server.impl.js.map