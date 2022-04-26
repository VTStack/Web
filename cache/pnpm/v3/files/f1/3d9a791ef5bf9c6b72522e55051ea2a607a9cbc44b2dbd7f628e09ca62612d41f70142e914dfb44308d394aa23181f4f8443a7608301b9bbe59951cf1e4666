"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const devkit_1 = require("@nrwl/devkit");
function default_1() {
    return (0, schematics_1.chain)([updateTsConfig, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
function updateTsConfig() {
    return (0, workspace_1.updateWorkspaceInTree)((config, context, tree) => {
        Object.entries(config.projects).forEach(([projectName, projectConfig]) => {
            updateStorybookTsConfigPath(tree, context, {
                projectName,
                projectConfig,
            });
        });
        return config;
    });
}
function updateStorybookTsConfigPath(tree, context, options) {
    const architect = options.projectConfig.architect;
    const paths = {
        tsConfigStorybook: path.join(options.projectConfig.root, '.storybook/tsconfig.json'),
    };
    const hasStorybookConfig = architect && architect.storybook && tree.exists(paths.tsConfigStorybook);
    if (!hasStorybookConfig) {
        context.logger.info(`${options.projectName}: no storybook configured. skipping migration...`);
        return;
    }
    const tsConfig = {
        storybook: (0, workspace_1.readJsonInTree)(tree, paths.tsConfigStorybook),
    };
    // update extends prop to point to the lib relative tsconfig rather
    // than the root tsconfig.base.json
    tsConfig.storybook.extends = '../tsconfig.json';
    tree.overwrite(paths.tsConfigStorybook, (0, devkit_1.serializeJson)(tsConfig.storybook));
}
//# sourceMappingURL=update-10-2-1.js.map