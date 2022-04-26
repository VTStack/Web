"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const utilities_1 = require("../../utils/utilities");
const core_1 = require("@angular-devkit/core");
const devkit_1 = require("@nrwl/devkit");
function default_1(tree, context) {
    return (0, schematics_1.chain)([update, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
function update(tree, context) {
    return (0, workspace_1.updateWorkspaceInTree)((config, context, tree) => {
        Object.entries(config.projects).forEach(([projectName, projectConfig]) => {
            updateTsconfigInclude(tree, context, { projectName, projectConfig });
        });
        return config;
    });
}
function updateTsconfigInclude(tree, context, options) {
    var _a;
    const architect = options.projectConfig.architect;
    const paths = {
        tsConfigStorybook: (0, core_1.normalize)(path.join(options.projectConfig.root, '.storybook/tsconfig.json')),
    };
    const hasStorybookConfig = architect.storybook && tree.exists(paths.tsConfigStorybook);
    if (!hasStorybookConfig) {
        context.logger.info(`${options.projectName}: no storybook configured. skipping migration...`);
        return;
    }
    const isReactProject = (0, utilities_1.isFramework)('react', {
        uiFramework: (_a = architect.storybook.options) === null || _a === void 0 ? void 0 : _a.uiFramework,
    });
    const tsConfig = {
        storybook: (0, workspace_1.readJsonInTree)(tree, paths.tsConfigStorybook),
    };
    if (isReactProject && Array.isArray(tsConfig.storybook.include)) {
        tsConfig.storybook.include = uniqueArray([
            ...tsConfig.storybook.include,
            './*.js',
        ]);
        tree.overwrite(paths.tsConfigStorybook, (0, devkit_1.serializeJson)(tsConfig.storybook));
    }
}
function uniqueArray(value) {
    return [...new Set(value)];
}
//# sourceMappingURL=update-lint-ignores.js.map