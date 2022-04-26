"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
/**
 * For web/react apps with style scss option, remove node-sass sine it is deprecated.
 * We already include sass package in `@nrwl/web` deps so no need to install anything extra.
 */
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const packageJson = (0, devkit_1.readJson)(tree, 'package.json');
        let task = undefined;
        if (packageJson.devDependencies['node-sass']) {
            task = (0, devkit_1.removeDependenciesFromPackageJson)(tree, [], ['node-sass']);
        }
        if (packageJson.dependencies['node-sass']) {
            task = (0, devkit_1.removeDependenciesFromPackageJson)(tree, ['node-sass'], []);
        }
        if (task)
            yield (0, devkit_1.formatFiles)(tree);
        return task;
    });
}
exports.default = update;
//# sourceMappingURL=remove-node-sass-13-0-0.js.map