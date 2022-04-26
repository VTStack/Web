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
                    config.projects[name].architect.build &&
                    config.projects[name].architect.build.builder === '@nrwl/web:build') {
                    filteredProjects.push(config.projects[name]);
                }
            });
            filteredProjects.forEach((p) => {
                delete p.architect.build.options.differentialLoading;
            });
            return config;
        }),
        (0, workspace_1.formatFiles)(),
    ]);
}
exports.default = update;
//# sourceMappingURL=update-builder-8-5-0.js.map