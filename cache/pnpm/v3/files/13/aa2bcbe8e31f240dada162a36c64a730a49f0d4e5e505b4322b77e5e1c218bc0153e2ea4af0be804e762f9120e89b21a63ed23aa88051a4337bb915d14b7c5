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
            updateLintTarget(tree, context, { projectName, projectConfig });
        });
        return config;
    });
}
function updateLintTarget(tree, context, options) {
    var _a;
    const architect = options.projectConfig.architect;
    const paths = {
        tsConfig: path.join(options.projectConfig.root, 'tsconfig.json'),
        tsConfigLib: path.join(options.projectConfig.root, 'tsconfig.lib.json'),
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
    const mainTsConfigContent = (0, workspace_1.readJsonInTree)(tree, paths.tsConfig);
    const tsConfig = {
        main: mainTsConfigContent,
        lib: tree.exists(paths.tsConfigLib)
            ? (0, workspace_1.readJsonInTree)(tree, paths.tsConfigLib)
            : mainTsConfigContent,
        storybook: (0, workspace_1.readJsonInTree)(tree, paths.tsConfigStorybook),
    };
    if (isReactProject && Array.isArray(tsConfig.lib.exclude)) {
        tsConfig.lib.exclude = uniqueArray([
            ...tsConfig.lib.exclude,
            '**/*.stories.jsx',
            '**/*.stories.tsx',
        ]);
        tree.overwrite(paths.tsConfigLib, (0, devkit_1.serializeJson)(tsConfig.lib));
    }
    if (Array.isArray(tsConfig.main.references) &&
        tsConfig.main.references.every((ref) => ref.path !== './.storybook/tsconfig.json')) {
        tsConfig.main.references.push({
            path: (0, core_1.normalize)('./.storybook/tsconfig.json'),
        });
        tree.overwrite(paths.tsConfig, (0, devkit_1.serializeJson)(tsConfig.main));
    }
    if (isReactProject && Array.isArray(tsConfig.storybook.exclude)) {
        tsConfig.storybook.exclude = uniqueArray([
            ...tsConfig.storybook.exclude,
            '../**/*.spec.js',
            '../**/*.spec.tsx',
            '../**/*.spec.jsx',
        ]);
        tree.overwrite(paths.tsConfigStorybook, (0, devkit_1.serializeJson)(tsConfig.storybook));
    }
    // update workspace
    if (architect.lint &&
        architect.lint.options &&
        Array.isArray(architect.lint.options.tsConfig)) {
        architect.lint.options.tsConfig = uniqueArray([
            ...architect.lint.options.tsConfig,
            paths.tsConfigStorybook,
        ]);
    }
}
function uniqueArray(value) {
    return [...new Set(value)];
}
//# sourceMappingURL=update-10-3-0.js.map