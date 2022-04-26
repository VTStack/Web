"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInvalidProjectsErrorMessage = exports.determineWhichProjectsAreInvalid = exports.allProjectsAreValid = void 0;
function allProjectsAreValid(projects, allLibs) {
    return projects.every(project => !!allLibs.get(project));
}
exports.allProjectsAreValid = allProjectsAreValid;
function determineWhichProjectsAreInvalid(projects, allLibs) {
    return projects.filter(project => !allLibs.get(project));
}
exports.determineWhichProjectsAreInvalid = determineWhichProjectsAreInvalid;
function buildInvalidProjectsErrorMessage(invalidProjects) {
    return `There are libraries that doesn't exits on this workspace: ${invalidProjects.join(', ')}`;
}
exports.buildInvalidProjectsErrorMessage = buildInvalidProjectsErrorMessage;
//# sourceMappingURL=validate-projects.js.map