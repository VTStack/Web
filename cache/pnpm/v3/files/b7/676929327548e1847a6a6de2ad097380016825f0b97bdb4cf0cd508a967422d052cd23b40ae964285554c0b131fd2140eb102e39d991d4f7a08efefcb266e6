"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProjectAPublishableLib = void 0;
const isProjectAPublishableLib = (project) => {
    return (isPublishableProjectTypeLibray(project) ||
        doesntHaveProjectTypeLibButIsPublishableLib(project));
};
exports.isProjectAPublishableLib = isProjectAPublishableLib;
function isPublishableProjectTypeLibray(project) {
    return project.projectType === 'library' && isBuildable(project);
}
function doesntHaveProjectTypeLibButIsPublishableLib(project) {
    var _a;
    return (project.projectType === undefined &&
        isBuildable(project) &&
        typeof ((_a = project === null || project === void 0 ? void 0 : project.targets) === null || _a === void 0 ? void 0 : _a.build.options.main) === 'string');
}
function isBuildable(project) {
    var _a;
    return typeof ((_a = project.targets) === null || _a === void 0 ? void 0 : _a.build) === 'object';
}
//# sourceMappingURL=is-a-lib.js.map