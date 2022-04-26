"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExistingBabelrcFiles = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function updateExistingBabelrcFiles(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        projects.forEach((p) => {
            const babelrcPath = `${p.root}/.babelrc`;
            // Add `@nrwl/web/babel` to projects that did not previously use it.
            // This is needed because we removed it from the root.
            if (host.exists(babelrcPath)) {
                (0, devkit_1.updateJson)(host, babelrcPath, (json) => {
                    json.presets || (json.presets = []);
                    if (-1 ===
                        json.presets.findIndex((x) => x === '@nrwl/web/babel' ||
                            x === '@nrwl/react/babel' ||
                            x === '@nrwl/next/babel')) {
                        json.presets.push('@nrwl/web/babel');
                    }
                    return json;
                });
            }
        });
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.updateExistingBabelrcFiles = updateExistingBabelrcFiles;
exports.default = updateExistingBabelrcFiles;
//# sourceMappingURL=update-existing-babelrc-files.js.map