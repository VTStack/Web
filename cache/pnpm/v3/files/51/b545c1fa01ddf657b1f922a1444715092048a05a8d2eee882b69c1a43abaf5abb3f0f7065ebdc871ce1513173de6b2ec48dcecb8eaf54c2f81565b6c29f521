"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const core_server_1 = require("@storybook/core-server");
require("dotenv/config");
const utils_1 = require("../utils");
function storybookExecutor(options, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* storybookExecutor_1() {
        let frameworkPath = (0, utils_1.getStorybookFrameworkPath)(options.uiFramework);
        const frameworkOptions = (yield tslib_1.__await(Promise.resolve().then(() => require(frameworkPath)))).default;
        options = (0, utils_1.normalizeAngularBuilderStylesOptions)(options, options.uiFramework);
        const option = storybookOptionMapper(options, frameworkOptions, context);
        // print warnings
        (0, utils_1.runStorybookSetupCheck)(options);
        yield tslib_1.__await(runInstance(option));
        yield yield tslib_1.__await({ success: true });
        // This Promise intentionally never resolves, leaving the process running
        yield tslib_1.__await(new Promise(() => { }));
    });
}
exports.default = storybookExecutor;
function runInstance(options) {
    var _a;
    const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development';
    process.env.NODE_ENV = env;
    return (0, core_server_1.buildDevStandalone)(Object.assign(Object.assign({}, options), { configType: env.toUpperCase() })).catch((error) => {
        var _a;
        // TODO(juri): find a better cleaner way to handle these. Taken from:
        // https://github.com/storybookjs/storybook/blob/dea23e5e9a3e7f5bb25cb6520d3011cc710796c8/lib/core-server/src/build-dev.ts#L138-L166
        if (error instanceof Error) {
            if (error.error) {
                devkit_1.logger.error(error.error);
            }
            else if (error.stats &&
                error.stats.compilation.errors) {
                error.stats.compilation.errors.forEach((e) => devkit_1.logger.log(e));
            }
            else {
                devkit_1.logger.error(error);
            }
        }
        else if ((_a = error.compilation) === null || _a === void 0 ? void 0 : _a.errors) {
            error.compilation.errors.forEach((e) => devkit_1.logger.log(e));
        }
        devkit_1.logger.log('');
        devkit_1.logger.warn(error.close
            ? `
          FATAL broken build!, will close the process,
          Fix the error below and restart storybook.
        `
            : `
          Broken build, fix the error above.
          You may need to refresh the browser.
        `);
        process.exit(1);
    });
}
function storybookOptionMapper(builderOptions, frameworkOptions, context) {
    const storybookOptions = Object.assign(Object.assign(Object.assign({}, builderOptions), (0, utils_1.resolveCommonStorybookOptionMapper)(builderOptions, frameworkOptions, context)), { mode: 'dev', watch: true });
    return storybookOptions;
}
//# sourceMappingURL=storybook.impl.js.map