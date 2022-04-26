"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const build = require("@storybook/core/standalone");
require("dotenv/config");
const utils_1 = require("../utils");
function buildStorybookExecutor(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        devkit_1.logger.info(`NX ui framework: ${options.uiFramework}`);
        const frameworkPath = (0, utils_1.getStorybookFrameworkPath)(options.uiFramework);
        const { default: frameworkOptions } = yield Promise.resolve().then(() => require(frameworkPath));
        options = (0, utils_1.normalizeAngularBuilderStylesOptions)(options, options.uiFramework);
        const option = storybookOptionMapper(options, frameworkOptions, context);
        // print warnings
        (0, utils_1.runStorybookSetupCheck)(options);
        devkit_1.logger.info(`NX Storybook builder starting ...`);
        yield runInstance(option);
        devkit_1.logger.info(`NX Storybook builder finished ...`);
        devkit_1.logger.info(`NX Storybook files available in ${options.outputPath}`);
        return { success: true };
    });
}
exports.default = buildStorybookExecutor;
function runInstance(options) {
    var _a;
    const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'production';
    process.env.NODE_ENV = env;
    return build(Object.assign(Object.assign({}, options), { ci: true, configType: env.toUpperCase() }));
}
function storybookOptionMapper(builderOptions, frameworkOptions, context) {
    const storybookOptions = Object.assign(Object.assign(Object.assign({}, builderOptions), (0, utils_1.resolveCommonStorybookOptionMapper)(builderOptions, frameworkOptions, context)), { mode: 'static', outputDir: builderOptions.outputPath });
    return storybookOptions;
}
//# sourceMappingURL=build-storybook.impl.js.map