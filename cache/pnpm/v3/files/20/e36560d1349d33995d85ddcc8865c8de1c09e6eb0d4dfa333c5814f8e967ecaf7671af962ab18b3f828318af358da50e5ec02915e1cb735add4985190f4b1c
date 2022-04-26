"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasDependentAppUsingWebBuild = void 0;
const devkit_1 = require("@nrwl/devkit");
const cache = new Map();
function hasDependentAppUsingWebBuild(projectName, reversedProjectGraph, projects) {
    const seen = new Set();
    function walk(currProject) {
        var _a, _b;
        if (seen.has(currProject)) {
            return false;
        }
        seen.add(currProject);
        if (cache.has(currProject)) {
            return cache.get(currProject);
        }
        const project = projects.get(currProject);
        if (((_b = (_a = project === null || project === void 0 ? void 0 : project.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) === '@nrwl/web:build') {
            cache.set(currProject, true);
            return true;
        }
        const deps = reversedProjectGraph.dependencies[currProject];
        if (deps.length === 0) {
            cache.set(currProject, false);
            return false;
        }
        const result = deps.some((dep) => dep.type !== devkit_1.DependencyType.implicit && walk(dep.target));
        cache.set(currProject, result);
        return result;
    }
    return walk(projectName);
}
exports.hasDependentAppUsingWebBuild = hasDependentAppUsingWebBuild;
//# sourceMappingURL=utils.js.map