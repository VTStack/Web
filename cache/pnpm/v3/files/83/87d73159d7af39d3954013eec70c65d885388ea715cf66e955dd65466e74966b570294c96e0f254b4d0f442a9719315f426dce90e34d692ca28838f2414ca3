"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function update() {
    return (0, schematics_1.chain)([
        (0, workspace_1.updateWorkspaceInTree)((workspaceJson) => {
            Object.entries(workspaceJson.projects).forEach(([projectName, project]) => {
                if (!project.architect) {
                    return;
                }
                Object.entries(project.architect).forEach(([targetName, targetConfig]) => {
                    if (targetConfig.builder === '@nrwl/node:build') {
                        const architect = workspaceJson.projects[projectName].architect[targetName];
                        if (architect && architect.options) {
                            architect.options.buildLibsFromSource = true;
                        }
                    }
                });
            });
            return workspaceJson;
        }),
        (0, workspace_1.formatFiles)(),
    ]);
}
exports.default = update;
//# sourceMappingURL=set-build-libs-from-source.js.map