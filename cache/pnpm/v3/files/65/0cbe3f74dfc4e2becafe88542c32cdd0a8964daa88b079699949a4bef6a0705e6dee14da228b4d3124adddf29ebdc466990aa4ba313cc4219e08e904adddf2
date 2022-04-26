"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSchematic = exports.initGenerator = exports.addCacheableOperation = void 0;
const devkit_1 = require("@nrwl/devkit");
const utilities_1 = require("../../utils/utilities");
const versions_1 = require("../../utils/versions");
function checkDependenciesInstalled(host, schema) {
    const packageJson = (0, devkit_1.readJson)(host, 'package.json');
    const devDependencies = {};
    const dependencies = {};
    packageJson.dependencies = packageJson.dependencies || {};
    packageJson.devDependencices = packageJson.devDependencices || {};
    // base deps
    devDependencies['@nrwl/storybook'] = versions_1.nxVersion;
    devDependencies['@storybook/core-server'] = versions_1.storybookVersion;
    devDependencies['@storybook/addon-essentials'] = versions_1.storybookVersion;
    if ((0, utilities_1.isFramework)('angular', schema)) {
        devDependencies['@storybook/angular'] = versions_1.storybookVersion;
        devDependencies['@storybook/builder-webpack5'] = versions_1.storybookVersion;
        devDependencies['@storybook/manager-webpack5'] = versions_1.storybookVersion;
        devDependencies['webpack'] = versions_1.webpack5Version;
        if (!packageJson.dependencies['@angular/forms'] &&
            !packageJson.devDependencies['@angular/forms']) {
            devDependencies['@angular/forms'] = '*';
        }
    }
    if ((0, utilities_1.isFramework)('react', schema)) {
        devDependencies['@storybook/react'] = versions_1.storybookVersion;
        devDependencies['@svgr/webpack'] = versions_1.svgrVersion;
        devDependencies['url-loader'] = versions_1.urlLoaderVersion;
        devDependencies['babel-loader'] = versions_1.babelLoaderVersion;
        devDependencies['@babel/core'] = versions_1.babelCoreVersion;
        devDependencies['@babel/preset-typescript'] = versions_1.babelPresetTypescriptVersion;
        devDependencies['@storybook/react'] = versions_1.storybookVersion;
        devDependencies['@storybook/builder-webpack5'] = versions_1.storybookVersion;
        devDependencies['@storybook/manager-webpack5'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('html', schema)) {
        devDependencies['@storybook/html'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('vue', schema)) {
        devDependencies['@storybook/vue'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('vue3', schema)) {
        devDependencies['@storybook/vue3'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('web-components', schema)) {
        devDependencies['@storybook/web-components'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('svelte', schema)) {
        devDependencies['@storybook/svelte'] = versions_1.storybookVersion;
    }
    if ((0, utilities_1.isFramework)('react-native', schema)) {
        devDependencies['@storybook/react-native'] = versions_1.storybookReactNativeVersion;
        devDependencies['@storybook/addon-ondevice-actions'] =
            versions_1.storybookReactNativeVersion;
        devDependencies['@storybook/addon-ondevice-backgrounds'] =
            versions_1.storybookReactNativeVersion;
        devDependencies['@storybook/addon-ondevice-controls'] =
            versions_1.storybookReactNativeVersion;
        devDependencies['@storybook/addon-ondevice-notes'] =
            versions_1.storybookReactNativeVersion;
        devDependencies['react-native-storybook-loader'] =
            versions_1.reactNativeStorybookLoader;
    }
    return (0, devkit_1.addDependenciesToPackageJson)(host, dependencies, devDependencies);
}
function addCacheableOperation(tree) {
    var _a;
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(tree);
    if (!workspace.tasksRunnerOptions ||
        !workspace.tasksRunnerOptions.default ||
        (workspace.tasksRunnerOptions.default.runner !==
            '@nrwl/workspace/tasks-runners/default' &&
            workspace.tasksRunnerOptions.default.runner !==
                'nx/tasks-runners/default')) {
        return;
    }
    workspace.tasksRunnerOptions.default.options =
        workspace.tasksRunnerOptions.default.options || {};
    workspace.tasksRunnerOptions.default.options.cacheableOperations =
        workspace.tasksRunnerOptions.default.options.cacheableOperations || [];
    if (!((_a = workspace.tasksRunnerOptions.default.options.cacheableOperations) === null || _a === void 0 ? void 0 : _a.includes('build-storybook'))) {
        workspace.tasksRunnerOptions.default.options.cacheableOperations.push('build-storybook');
    }
    (0, devkit_1.updateWorkspaceConfiguration)(tree, workspace);
}
exports.addCacheableOperation = addCacheableOperation;
function moveToDevDependencies(tree) {
    (0, devkit_1.updateJson)(tree, 'package.json', (packageJson) => {
        packageJson.dependencies = packageJson.dependencies || {};
        packageJson.devDependencies = packageJson.devDependencies || {};
        if (packageJson.dependencies['@nrwl/storybook']) {
            packageJson.devDependencies['@nrwl/storybook'] =
                packageJson.dependencies['@nrwl/storybook'];
            delete packageJson.dependencies['@nrwl/storybook'];
        }
        return packageJson;
    });
}
function initGenerator(tree, schema) {
    const installTask = checkDependenciesInstalled(tree, schema);
    moveToDevDependencies(tree);
    addCacheableOperation(tree);
    return installTask;
}
exports.initGenerator = initGenerator;
exports.default = initGenerator;
exports.initSchematic = (0, devkit_1.convertNxGenerator)(initGenerator);
//# sourceMappingURL=init.js.map