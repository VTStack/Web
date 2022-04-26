"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpackExecutor = void 0;
const tslib_1 = require("tslib");
require("dotenv/config");
const devkit_1 = require("@nrwl/devkit");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const operators_1 = require("rxjs/operators");
const rxjs_for_await_1 = require("rxjs-for-await");
const path_1 = require("path");
const ts_node_1 = require("ts-node");
const node_config_1 = require("../../utils/node.config");
const normalize_1 = require("../../utils/normalize");
const generate_package_json_1 = require("../../utils/generate-package-json");
const run_webpack_1 = require("../../utils/run-webpack");
function webpackExecutor(rawOptions, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* webpackExecutor_1() {
        const { sourceRoot, root } = context.workspace.projects[context.projectName];
        if (!sourceRoot) {
            throw new Error(`${context.projectName} does not have a sourceRoot.`);
        }
        if (!root) {
            throw new Error(`${context.projectName} does not have a root.`);
        }
        const options = (0, normalize_1.normalizeBuildOptions)(rawOptions, context.root, sourceRoot, root);
        if (options.webpackConfig.some((x) => x.endsWith('.ts'))) {
            registerTsNode();
        }
        const projGraph = (0, devkit_1.readCachedProjectGraph)();
        if (!options.buildLibsFromSource) {
            const { target, dependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)(projGraph, context.root, context.projectName, context.targetName, context.configurationName);
            options.tsConfig = (0, buildable_libs_utils_1.createTmpTsConfig)(options.tsConfig, context.root, target.data.root, dependencies);
            if (!(0, buildable_libs_utils_1.checkDependentProjectsHaveBeenBuilt)(context.root, context.projectName, context.targetName, dependencies)) {
                return yield tslib_1.__await({ success: false });
            }
        }
        if (options.generatePackageJson) {
            (0, generate_package_json_1.generatePackageJson)(context.projectName, projGraph, options);
        }
        const config = yield tslib_1.__await(options.webpackConfig.reduce((currentConfig, plugin) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return require(plugin)(yield currentConfig, {
                options,
                configuration: context.configurationName,
            });
        }), Promise.resolve((0, node_config_1.getNodeWebpackConfig)(options))));
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, rxjs_for_await_1.eachValueFrom)((0, run_webpack_1.runWebpack)(config).pipe((0, operators_1.tap)((stats) => {
            console.info(stats.toString(config.stats));
        }), (0, operators_1.map)((stats) => {
            return {
                success: !stats.hasErrors(),
                outfile: (0, path_1.resolve)(context.root, options.outputPath, options.outputFileName),
            };
        })))))));
    });
}
exports.webpackExecutor = webpackExecutor;
function registerTsNode() {
    const rootTsConfig = (0, typescript_1.getRootTsConfigPath)();
    (0, ts_node_1.register)(Object.assign({}, (rootTsConfig ? { project: rootTsConfig } : null)));
}
exports.default = webpackExecutor;
//# sourceMappingURL=webpack.impl.js.map