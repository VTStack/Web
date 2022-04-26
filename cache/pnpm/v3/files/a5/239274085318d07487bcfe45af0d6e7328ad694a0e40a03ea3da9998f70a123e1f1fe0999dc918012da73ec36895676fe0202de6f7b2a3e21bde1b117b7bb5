"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrCreateConfig = exports.readCurrentWorkspaceStorybookVersionFromExecutor = exports.readCurrentWorkspaceStorybookVersionFromGenerator = exports.safeFileDelete = exports.isFramework = exports.Constants = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("./versions");
const fs_1 = require("fs");
const os_1 = require("os");
const path_1 = require("path");
exports.Constants = {
    addonDependencies: ['@storybook/addons'],
    tsConfigExclusions: ['stories', '**/*.stories.ts'],
    pkgJsonScripts: {
        storybook: 'start-storybook -p 9001 -c .storybook',
    },
    jsonIndentLevel: 2,
    coreAddonPrefix: '@storybook/addon-',
    uiFrameworks: {
        angular: '@storybook/angular',
        react: '@storybook/react',
        html: '@storybook/html',
        'web-components': '@storybook/web-components',
        vue: '@storybook/vue',
        vue3: '@storybook/vue3',
        svelte: '@storybook/svelte',
        'react-native': '@storybook/react-native',
    },
};
function isFramework(type, schema) {
    if (type === 'angular' && schema.uiFramework === '@storybook/angular') {
        return true;
    }
    if (type === 'react' && schema.uiFramework === '@storybook/react') {
        return true;
    }
    if (type === 'html' && schema.uiFramework === '@storybook/html') {
        return true;
    }
    if (type === 'web-components' &&
        schema.uiFramework === '@storybook/web-components') {
        return true;
    }
    if (type === 'vue' && schema.uiFramework === '@storybook/vue') {
        return true;
    }
    if (type === 'vue3' && schema.uiFramework === '@storybook/vue3') {
        return true;
    }
    if (type === 'svelte' && schema.uiFramework === '@storybook/svelte') {
        return true;
    }
    if (type === 'react-native' &&
        schema.uiFramework === '@storybook/react-native') {
        return true;
    }
    return false;
}
exports.isFramework = isFramework;
function safeFileDelete(tree, path) {
    if (tree.exists(path)) {
        tree.delete(path);
        return true;
    }
    else {
        return false;
    }
}
exports.safeFileDelete = safeFileDelete;
function readCurrentWorkspaceStorybookVersionFromGenerator(tree) {
    const packageJsonContents = (0, devkit_1.readJson)(tree, 'package.json');
    return determineStorybookWorkspaceVersion(packageJsonContents);
}
exports.readCurrentWorkspaceStorybookVersionFromGenerator = readCurrentWorkspaceStorybookVersionFromGenerator;
function readCurrentWorkspaceStorybookVersionFromExecutor() {
    const packageJsonContents = (0, devkit_1.readJsonFile)('package.json');
    return determineStorybookWorkspaceVersion(packageJsonContents);
}
exports.readCurrentWorkspaceStorybookVersionFromExecutor = readCurrentWorkspaceStorybookVersionFromExecutor;
function determineStorybookWorkspaceVersion(packageJsonContents) {
    let workspaceStorybookVersion = versions_1.storybookVersion;
    if (packageJsonContents && packageJsonContents['devDependencies']) {
        if (packageJsonContents['devDependencies']['@storybook/angular']) {
            workspaceStorybookVersion =
                packageJsonContents['devDependencies']['@storybook/angular'];
        }
        if (packageJsonContents['devDependencies']['@storybook/react']) {
            workspaceStorybookVersion =
                packageJsonContents['devDependencies']['@storybook/react'];
        }
        if (packageJsonContents['devDependencies']['@storybook/core']) {
            workspaceStorybookVersion =
                packageJsonContents['devDependencies']['@storybook/core'];
        }
        if (packageJsonContents['devDependencies']['@storybook/react-native']) {
            workspaceStorybookVersion =
                packageJsonContents['devDependencies']['@storybook/react-native'];
        }
    }
    if (packageJsonContents && packageJsonContents['dependencies']) {
        if (packageJsonContents['dependencies']['@storybook/angular']) {
            workspaceStorybookVersion =
                packageJsonContents['dependencies']['@storybook/angular'];
        }
        if (packageJsonContents['dependencies']['@storybook/react']) {
            workspaceStorybookVersion =
                packageJsonContents['dependencies']['@storybook/react'];
        }
        if (packageJsonContents['dependencies']['@storybook/core']) {
            workspaceStorybookVersion =
                packageJsonContents['dependencies']['@storybook/core'];
        }
        if (packageJsonContents['dependencies']['@storybook/react-native']) {
            workspaceStorybookVersion =
                packageJsonContents['dependencies']['@storybook/react-native'];
        }
    }
    return workspaceStorybookVersion;
}
function findOrCreateConfig(config, context) {
    if (config.configFolder && (0, fs_1.statSync)(config.configFolder).isDirectory()) {
        return config.configFolder;
    }
    else if ((0, fs_1.statSync)(config.configPath).isFile() &&
        (0, fs_1.statSync)(config.pluginPath).isFile() &&
        (0, fs_1.statSync)(config.srcRoot).isFile()) {
        return createStorybookConfig(config.configPath, config.pluginPath, config.srcRoot);
    }
    else {
        const sourceRoot = context.workspace.projects[context.projectName].root;
        if ((0, fs_1.statSync)((0, path_1.join)(context.root, sourceRoot, '.storybook')).isDirectory()) {
            return (0, path_1.join)(context.root, sourceRoot, '.storybook');
        }
    }
    throw new Error('No configuration settings');
}
exports.findOrCreateConfig = findOrCreateConfig;
function createStorybookConfig(configPath, pluginPath, srcRoot) {
    const tmpDir = (0, os_1.tmpdir)();
    const tmpFolder = `${tmpDir}${path_1.sep}`;
    (0, fs_1.mkdtempSync)(tmpFolder);
    (0, fs_1.copyFileSync)(configPath, `${tmpFolder}/${(0, path_1.basename)(configPath)}`, fs_1.constants.COPYFILE_EXCL);
    (0, fs_1.copyFileSync)(pluginPath, `${tmpFolder}/${(0, path_1.basename)(pluginPath)}`, fs_1.constants.COPYFILE_EXCL);
    (0, fs_1.copyFileSync)(srcRoot, `${tmpFolder}/${(0, path_1.basename)(srcRoot)}`, fs_1.constants.COPYFILE_EXCL);
    return tmpFolder;
}
//# sourceMappingURL=utilities.js.map