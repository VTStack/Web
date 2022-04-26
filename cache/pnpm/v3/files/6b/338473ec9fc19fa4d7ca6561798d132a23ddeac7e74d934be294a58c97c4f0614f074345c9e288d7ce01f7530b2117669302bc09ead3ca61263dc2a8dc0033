"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBabelrcForWorkspaceLibs = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const devkit_2 = require("@nrwl/devkit");
const utils_1 = require("./utils");
function createBabelrcForWorkspaceLibs(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        const graph = (0, devkit_2.reverse)(yield (0, devkit_2.createProjectGraphAsync)());
        for (const [name, p] of projects.entries()) {
            if (!(0, utils_1.hasDependentAppUsingWebBuild)(name, graph, projects)) {
                continue;
            }
            const babelrcPath = `${p.root}/.babelrc`;
            if (p.projectType === 'library' && !host.exists(babelrcPath)) {
                // Library is included in applications that require .babelrc to
                // exist and contain '@nrwl/web/babel' preset.
                (0, devkit_1.writeJson)(host, babelrcPath, { presets: ['@nrwl/web/babel'] });
            }
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.createBabelrcForWorkspaceLibs = createBabelrcForWorkspaceLibs;
exports.default = createBabelrcForWorkspaceLibs;
//# sourceMappingURL=create-babelrc-for-workspace-libs.js.map