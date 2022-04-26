"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const rxjs_for_await_1 = require("rxjs-for-await");
const child_process_1 = require("child_process");
const semver_1 = require("semver");
const path_1 = require("path");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const normalize_1 = require("../../utils/normalize");
const web_config_1 = require("../../utils/web.config");
const run_webpack_1 = require("../../utils/run-webpack");
const build_browser_features_1 = require("../../utils/webpack/build-browser-features");
const fs_1 = require("../../utils/fs");
const write_index_html_1 = require("../../utils/webpack/write-index-html");
const custom_webpack_1 = require("../../utils/webpack/custom-webpack");
function getWebpackConfigs(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const metadata = context.workspace.projects[context.projectName];
        const sourceRoot = metadata.sourceRoot;
        const projectRoot = metadata.root;
        options = (0, normalize_1.normalizeWebBuildOptions)(options, context.root, sourceRoot);
        const isScriptOptimizeOn = typeof options.optimization === 'boolean'
            ? options.optimization
            : options.optimization && options.optimization.scripts
                ? options.optimization.scripts
                : false;
        const tsConfig = (0, typescript_1.readTsConfig)(options.tsConfig);
        const scriptTarget = tsConfig.options.target;
        const buildBrowserFeatures = new build_browser_features_1.BuildBrowserFeatures(projectRoot, scriptTarget);
        let customWebpack = null;
        if (options.webpackConfig) {
            customWebpack = (0, custom_webpack_1.resolveCustomWebpackConfig)(options.webpackConfig, options.tsConfig);
            if (typeof customWebpack.then === 'function') {
                customWebpack = yield customWebpack;
            }
        }
        return [
            // ESM build for modern browsers.
            (0, web_config_1.getWebConfig)(context.root, projectRoot, sourceRoot, options, true, isScriptOptimizeOn, context.configurationName),
            // ES5 build for legacy browsers.
            isScriptOptimizeOn && buildBrowserFeatures.isDifferentialLoadingNeeded()
                ? (0, web_config_1.getWebConfig)(context.root, projectRoot, sourceRoot, options, false, isScriptOptimizeOn, context.configurationName)
                : undefined,
        ]
            .filter(Boolean)
            .map((config) => {
            if (customWebpack) {
                return customWebpack(config, {
                    options,
                    configuration: context.configurationName,
                });
            }
            else {
                return config;
            }
        });
    });
}
function run(options, context) {
    var _a;
    return tslib_1.__asyncGenerator(this, arguments, function* run_1() {
        // Node versions 12.2-12.8 has a bug where prod builds will hang for 2-3 minutes
        // after the program exits.
        const nodeVersion = (0, child_process_1.execSync)(`node --version`).toString('utf-8').trim();
        const supportedRange = new semver_1.Range('10 || >=12.9');
        if (!(0, semver_1.satisfies)(nodeVersion, supportedRange)) {
            throw new Error(`Node version ${nodeVersion} is not supported. Supported range is "${supportedRange.raw}".`);
        }
        const isScriptOptimizeOn = typeof options.optimization === 'boolean'
            ? options.optimization
            : options.optimization && options.optimization.scripts
                ? options.optimization.scripts
                : false;
        (_a = process.env).NODE_ENV || (_a.NODE_ENV = isScriptOptimizeOn ? 'production' : 'development');
        const metadata = context.workspace.projects[context.projectName];
        if (options.compiler === 'swc') {
            try {
                require.resolve('swc-loader');
                require.resolve('@swc/core');
            }
            catch (_b) {
                devkit_1.logger.error(`Missing SWC dependencies: @swc/core, swc-loader. Make sure you install them first.`);
                return yield tslib_1.__await({ success: false });
            }
        }
        if (!options.buildLibsFromSource && context.targetName) {
            const { dependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)((0, devkit_1.readCachedProjectGraph)(), context.root, context.projectName, context.targetName, context.configurationName);
            options.tsConfig = (0, buildable_libs_utils_1.createTmpTsConfig)((0, path_1.join)(context.root, options.tsConfig), context.root, metadata.root, dependencies);
            if (!(0, buildable_libs_utils_1.checkDependentProjectsHaveBeenBuilt)(context.root, context.projectName, context.targetName, dependencies)) {
                throw new Error();
            }
        }
        // Delete output path before bundling
        if (options.deleteOutputPath) {
            (0, fs_1.deleteOutputDir)(context.root, options.outputPath);
        }
        const configs = yield tslib_1.__await(getWebpackConfigs(options, context));
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, rxjs_for_await_1.eachValueFrom)((0, rxjs_1.from)(configs).pipe((0, operators_1.mergeMap)((config) => (Array.isArray(config) ? (0, rxjs_1.from)(config) : (0, rxjs_1.of)(config))), 
        // Run build sequentially and bail when first one fails.
        (0, operators_1.mergeScan)((acc, config) => {
            if (!acc.hasErrors()) {
                return (0, run_webpack_1.runWebpack)(config).pipe((0, operators_1.tap)((stats) => {
                    console.info(stats.toString(config.stats));
                }));
            }
            else {
                return (0, rxjs_1.of)();
            }
        }, { hasErrors: () => false }, 1), 
        // Collect build results as an array.
        (0, operators_1.bufferCount)(configs.length), (0, operators_1.switchMap)(([result1, result2]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const success = result1 && !result1.hasErrors() && (!result2 || !result2.hasErrors());
            const emittedFiles1 = (0, run_webpack_1.getEmittedFiles)(result1);
            const emittedFiles2 = result2 ? (0, run_webpack_1.getEmittedFiles)(result2) : [];
            if (options.generateIndexHtml) {
                yield (0, write_index_html_1.writeIndexHtml)({
                    crossOrigin: options.crossOrigin,
                    outputPath: (0, path_1.join)(options.outputPath, (0, path_1.basename)(options.index)),
                    indexPath: (0, path_1.join)(context.root, options.index),
                    files: emittedFiles1.filter((x) => x.extension === '.css'),
                    noModuleFiles: emittedFiles2,
                    moduleFiles: emittedFiles1,
                    baseHref: options.baseHref,
                    deployUrl: options.deployUrl,
                    scripts: options.scripts,
                    styles: options.styles,
                });
            }
            return { success, emittedFiles: [...emittedFiles1, ...emittedFiles2] };
        }))))))));
    });
}
exports.run = run;
exports.default = run;
//# sourceMappingURL=webpack.impl.js.map