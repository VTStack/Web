"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuildTargets = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Update other references to the source project's targets
 */
function updateBuildTargets(tree, schema) {
    (0, devkit_1.getProjects)(tree).forEach((projectConfig, project) => {
        Object.entries(projectConfig.targets || {}).forEach(([target, targetConfig]) => {
            const configString = JSON.stringify(targetConfig);
            const updated = JSON.parse(configString.replace(new RegExp(`${schema.projectName}:`, 'g'), `${schema.newProjectName}:`));
            projectConfig.targets[target] = updated;
        });
        (0, devkit_1.updateProjectConfiguration)(tree, project, projectConfig);
    });
}
exports.updateBuildTargets = updateBuildTargets;
//# sourceMappingURL=update-build-targets.js.map