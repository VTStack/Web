"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const version_utils_1 = require("@nrwl/workspace/src/utilities/version-utils");
const semver_1 = require("semver");
const devkit_1 = require("@nrwl/devkit");
let needsInstall = false;
function maybeUpdateVersion(tree) {
    (0, devkit_1.updateJson)(tree, 'package.json', (json) => {
        json.dependencies = json.dependencies || {};
        json.devDependencies = json.devDependencies || {};
        const storybookPackages = [
            '@storybook/angular',
            '@storybook/react',
            '@storybook/addon-knobs',
        ];
        storybookPackages.forEach((storybookPackageName) => {
            if (json.dependencies[storybookPackageName]) {
                const version = (0, version_utils_1.checkAndCleanWithSemver)(storybookPackageName, json.dependencies[storybookPackageName]);
                if ((0, semver_1.gte)(version, '6.0.0') && (0, semver_1.lt)(version, '6.2.9')) {
                    json.dependencies[storybookPackageName] = '~6.2.9';
                    needsInstall = true;
                }
            }
            if (json.devDependencies[storybookPackageName]) {
                const version = (0, version_utils_1.checkAndCleanWithSemver)(storybookPackageName, json.devDependencies[storybookPackageName]);
                if ((0, semver_1.gte)(version, '6.0.0') && (0, semver_1.lt)(version, '6.2.9')) {
                    json.devDependencies[storybookPackageName] = '~6.2.9';
                    needsInstall = true;
                }
            }
        });
        return json;
    });
}
function default_1(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        maybeUpdateVersion(tree);
        yield (0, devkit_1.formatFiles)(tree);
        return () => {
            (0, devkit_1.installPackagesTask)(tree);
        };
    });
}
exports.default = default_1;
//# sourceMappingURL=update-storybook.js.map