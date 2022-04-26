"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const semver_1 = require("semver");
let needsInstall = false;
const maybeUpdateVersion = (0, workspace_1.updateJsonInTree)('package.json', (json) => {
    json.dependencies = json.dependencies || {};
    json.devDependencies = json.devDependencies || {};
    const storybookPackages = [
        '@storybook/angular',
        '@storybook/react',
        '@storybook/addon-knobs',
    ];
    storybookPackages.forEach((storybookPackageName) => {
        if (json.dependencies[storybookPackageName]) {
            const version = (0, workspace_1.checkAndCleanWithSemver)(storybookPackageName, json.dependencies[storybookPackageName]);
            if ((0, semver_1.gte)(version, '6.0.0')) {
                json.dependencies[storybookPackageName] = '^6.1.11';
                needsInstall = true;
            }
        }
        if (json.devDependencies[storybookPackageName]) {
            const version = (0, workspace_1.checkAndCleanWithSemver)(storybookPackageName, json.devDependencies[storybookPackageName]);
            if ((0, semver_1.gte)(version, '6.0.0')) {
                json.devDependencies[storybookPackageName] = '^6.1.11';
                needsInstall = true;
            }
        }
    });
    return json;
});
function default_1(tree, context) {
    return (0, schematics_1.chain)([
        maybeUpdateVersion,
        (0, workspace_1.formatFiles)(),
        (0, workspace_1.addInstallTask)({ skipInstall: !needsInstall }),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=update-storybook.js.map