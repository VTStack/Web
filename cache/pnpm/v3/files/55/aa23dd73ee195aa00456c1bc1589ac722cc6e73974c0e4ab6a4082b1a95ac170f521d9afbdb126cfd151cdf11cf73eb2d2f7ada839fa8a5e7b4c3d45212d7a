"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const versions_1 = require("@nrwl/workspace/src/utils/versions");
function update(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let installNeeded = false;
        (0, executor_options_utils_1.forEachExecutorOptions)(host, '@nrwl/node:package', (_, projectName, targetName) => {
            var _a;
            installNeeded = true;
            const projectConfiguration = (0, devkit_1.readProjectConfiguration)(host, projectName);
            projectConfiguration.targets[targetName].executor = '@nrwl/js:tsc';
            const transformers = (_a = projectConfiguration.targets[targetName].options) === null || _a === void 0 ? void 0 : _a.tsPlugins;
            if (transformers) {
                delete projectConfiguration.targets[targetName].options.tsPlugins;
                projectConfiguration.targets[targetName].options.transformers =
                    transformers;
            }
            (0, devkit_1.updateProjectConfiguration)(host, projectName, projectConfiguration);
        });
        const task = installNeeded
            ? (0, devkit_1.addDependenciesToPackageJson)(host, {}, {
                '@nrwl/js': versions_1.nxVersion,
            })
            : undefined;
        yield (0, devkit_1.formatFiles)(host);
        return task;
    });
}
exports.default = update;
//# sourceMappingURL=update-package-to-tsc.js.map