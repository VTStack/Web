"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function update() {
    return (0, schematics_1.chain)([
        (0, workspace_1.updateWorkspaceInTree)((config) => {
            const filteredProjects = [];
            Object.keys(config.projects).forEach((name) => {
                if (config.projects[name].architect &&
                    config.projects[name].architect.e2e &&
                    config.projects[name].architect.e2e.builder ===
                        '@nrwl/cypress:cypress' &&
                    config.projects[name].architect.e2e.options.devServerTarget.endsWith(':storybook')) {
                    filteredProjects.push(config.projects[name]);
                }
            });
            filteredProjects.forEach((p) => {
                delete p.architect.e2e.options.headless;
                delete p.architect.e2e.options.watch;
                delete p.architect.e2e.configurations;
            });
            return config;
        }),
        (tree, context) => {
            const workspace = (0, workspace_1.readWorkspace)(tree);
            const tsconfigUpdateRules = [];
            Object.keys(workspace.projects).forEach((name) => {
                if (workspace.projects[name].architect &&
                    workspace.projects[name].architect.storybook &&
                    workspace.projects[name].architect.storybook.builder ===
                        '@nrwl/storybook:storybook' &&
                    workspace.projects[name].architect.storybook.options.config
                        .configFolder) {
                    const storybookFolderPath = workspace.projects[name].architect.storybook.options.config
                        .configFolder;
                    tsconfigUpdateRules.push((0, workspace_1.updateJsonInTree)(`${storybookFolderPath}/tsconfig.json`, (json) => (Object.assign(Object.assign({}, json), { compilerOptions: {
                            emitDecoratorMetadata: true,
                        } }))));
                }
            });
            return (0, schematics_1.chain)(tsconfigUpdateRules);
        },
        (0, workspace_1.formatFiles)(),
    ]);
}
exports.default = update;
//# sourceMappingURL=update-builder-8-8-2.js.map