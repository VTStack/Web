"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/node:execute', (_, projectName, targetName) => {
            const projectConfiguration = (0, devkit_1.readProjectConfiguration)(tree, projectName);
            projectConfiguration.targets[targetName].executor = '@nrwl/node:node';
            (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfiguration);
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
//# sourceMappingURL=rename-execute-to-node.js.map