"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAngularBuilderStylesOptions = exports.findStorybookAndBuildTargets = exports.customProjectBuildConfigIsValid = exports.resolveCommonStorybookOptionMapper = exports.runStorybookSetupCheck = exports.setStorybookAppProject = exports.getStorybookFrameworkPath = void 0;
const devkit_1 = require("@nrwl/devkit");
const version_utils_1 = require("@nrwl/workspace/src/utilities/version-utils");
require("dotenv/config");
const fs_1 = require("fs");
const path_1 = require("path");
const semver_1 = require("semver");
const utilities_1 = require("../utils/utilities");
function getStorybookFrameworkPath(uiFramework) {
    const serverOptionsPaths = {
        '@storybook/angular': '@storybook/angular/dist/ts3.9/server/options',
        '@storybook/react': '@storybook/react/dist/cjs/server/options',
        '@storybook/html': '@storybook/html/dist/cjs/server/options',
        '@storybook/vue': '@storybook/vue/dist/cjs/server/options',
        '@storybook/vue3': '@storybook/vue3/dist/cjs/server/options',
        '@storybook/web-components': '@storybook/web-components/dist/cjs/server/options',
        '@storybook/svelte': '@storybook/svelte/dist/cjs/server/options',
    };
    if (isStorybookV62onwards(uiFramework)) {
        return serverOptionsPaths[uiFramework];
    }
    else {
        return `${uiFramework}/dist/server/options`;
    }
}
exports.getStorybookFrameworkPath = getStorybookFrameworkPath;
function isStorybookV62onwards(uiFramework) {
    const storybookPackageVersion = require((0, path_1.join)(uiFramework, 'package.json')).version;
    return (0, semver_1.gte)(storybookPackageVersion, '6.2.0-rc.4');
}
// see: https://github.com/storybookjs/storybook/pull/12565
// TODO: this should really be passed as a param to the CLI rather than env
function setStorybookAppProject(context, leadStorybookProject) {
    let leadingProject;
    // for libs we check whether the build config should be fetched
    // from some app
    if (context.workspace.projects[context.projectName].projectType === 'library') {
        // we have a lib so let's try to see whether the app has
        // been set from which we want to get the build config
        if (leadStorybookProject) {
            leadingProject = leadStorybookProject;
        }
        else {
            // do nothing
            return;
        }
    }
    else {
        // ..for apps we just use the app target itself
        leadingProject = context.projectName;
    }
    process.env.STORYBOOK_ANGULAR_PROJECT = leadingProject;
}
exports.setStorybookAppProject = setStorybookAppProject;
function runStorybookSetupCheck(options) {
    webpackFinalPropertyCheck(options);
    reactWebpack5Check(options);
}
exports.runStorybookSetupCheck = runStorybookSetupCheck;
function reactWebpack5Check(options) {
    if (options.uiFramework === '@storybook/react') {
        let storybookConfigFilePath = (0, devkit_1.joinPathFragments)(options.config.configFolder, 'main.js');
        if (!(0, fs_1.existsSync)(storybookConfigFilePath)) {
            storybookConfigFilePath = (0, devkit_1.joinPathFragments)(options.config.configFolder, 'main.ts');
        }
        if (!(0, fs_1.existsSync)(storybookConfigFilePath)) {
            // looks like there's no main config file, so skip
            return;
        }
        // check whether the current Storybook configuration has the webpack 5 builder enabled
        const storybookConfig = (0, fs_1.readFileSync)(storybookConfigFilePath, {
            encoding: 'utf8',
        });
        if (!storybookConfig.match(/builder: ('webpack5'|"webpack5"|`webpack5`)/g)) {
            // storybook needs to be upgraded to webpack 5
            devkit_1.logger.warn(`
It looks like you use Webpack 5 but your Storybook setup is not configured to leverage that
and thus falls back to Webpack 4.
Make sure you upgrade your Storybook config to use Webpack 5.

  - https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrade
      
`);
        }
    }
}
function webpackFinalPropertyCheck(options) {
    let placesToCheck = [
        {
            path: (0, devkit_1.joinPathFragments)('.storybook', 'webpack.config.js'),
            result: false,
        },
        {
            path: (0, devkit_1.joinPathFragments)(options.config.configFolder, 'webpack.config.js'),
            result: false,
        },
    ];
    placesToCheck = placesToCheck
        .map((entry) => {
        return Object.assign(Object.assign({}, entry), { result: (0, fs_1.existsSync)(entry.path) });
    })
        .filter((x) => x.result === true);
    if (placesToCheck.length > 0) {
        devkit_1.logger.warn(`
  You have a webpack.config.js files in your Storybook configuration:
  ${placesToCheck.map((x) => `- "${x.path}"`).join('\n  ')}

  Consider switching to the "webpackFinal" property declared in "main.js" instead.
  ${options.uiFramework === '@storybook/react'
            ? 'https://nx.dev/storybook/migrate-webpack-final-react'
            : 'https://nx.dev/storybook/migrate-webpack-final-angular'}
    `);
    }
}
function resolveCommonStorybookOptionMapper(builderOptions, frameworkOptions, context) {
    var _a, _b, _c;
    const storybookConfig = (0, utilities_1.findOrCreateConfig)(builderOptions.config, context);
    const storybookOptions = Object.assign(Object.assign({ workspaceRoot: context.root, configDir: storybookConfig }, frameworkOptions), { frameworkPresets: [...(frameworkOptions.frameworkPresets || [])], watch: false });
    if (builderOptions.uiFramework === '@storybook/angular' &&
        // just for new 6.4 with Angular
        isStorybookGTE6_4()) {
        let buildProjectName;
        let targetName = 'build'; // default
        let targetOptions = null;
        if (builderOptions.projectBuildConfig) {
            const targetString = normalizeTargetString(builderOptions.projectBuildConfig, targetName);
            const { project, target, configuration } = (0, devkit_1.parseTargetString)(targetString);
            // set the extracted target name
            targetName = target;
            buildProjectName = project;
            targetOptions = (0, devkit_1.readTargetOptions)({ project, target, configuration }, context);
            storybookOptions.angularBrowserTarget = targetString;
        }
        else {
            const { storybookBuildTarget, storybookTarget, buildTarget } = findStorybookAndBuildTargets((_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.workspace) === null || _a === void 0 ? void 0 : _a.projects) === null || _b === void 0 ? void 0 : _b[context.projectName]) === null || _c === void 0 ? void 0 : _c.targets);
            throw new Error(`
        No projectBuildConfig was provided.
        
        To fix this, you can try one of the following options:
        
        1. You can run the ${context.targetName ? context.targetName : storybookTarget} executor by providing the projectBuildConfig flag as follows:
               
        nx ${context.targetName ? context.targetName : storybookTarget} ${context.projectName} --projectBuildConfig=${context.projectName}${!buildTarget && storybookBuildTarget ? `:${storybookBuildTarget}` : ''}

        2. In your project configuration, under the "${context.targetName ? context.targetName : storybookTarget}" target options, you can
        set the "projectBuildConfig" property to the name of the project of which you want to use
        the build configuration for Storybook.
        `);
        }
        const project = context.workspace.projects[buildProjectName];
        const angularDevkitCompatibleLogger = Object.assign(Object.assign({}, devkit_1.logger), { createChild() {
                return angularDevkitCompatibleLogger;
            } });
        // construct a builder object for Storybook
        storybookOptions.angularBuilderContext = {
            target: Object.assign(Object.assign({}, project.targets[targetName]), { project: buildProjectName }),
            workspaceRoot: context.cwd,
            getProjectMetadata: () => {
                return project;
            },
            getTargetOptions: () => {
                return targetOptions;
            },
            logger: angularDevkitCompatibleLogger,
        };
        // Add watch to angularBuilderOptions for Storybook to merge configs correctly
        storybookOptions.angularBuilderOptions = {
            watch: true,
        };
    }
    else {
        // keep the backwards compatibility
        setStorybookAppProject(context, builderOptions.projectBuildConfig);
    }
    return storybookOptions;
}
exports.resolveCommonStorybookOptionMapper = resolveCommonStorybookOptionMapper;
function normalizeTargetString(appName, defaultTarget = 'build') {
    if (appName === null || appName === void 0 ? void 0 : appName.includes(':')) {
        return appName;
    }
    return `${appName}:${defaultTarget}`;
}
function isStorybookGTE6_4() {
    const storybookVersion = (0, utilities_1.readCurrentWorkspaceStorybookVersionFromExecutor)();
    return (0, semver_1.gte)((0, version_utils_1.checkAndCleanWithSemver)('@storybook/core', storybookVersion), '6.4.0-rc.1');
}
function customProjectBuildConfigIsValid(tree, projectBuildConfig) {
    var _a, _b;
    if (projectBuildConfig === null || projectBuildConfig === void 0 ? void 0 : projectBuildConfig.includes(':')) {
        const { project, target } = (0, devkit_1.parseTargetString)(projectBuildConfig);
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, project);
        if ((_a = projectConfig === null || projectConfig === void 0 ? void 0 : projectConfig.targets) === null || _a === void 0 ? void 0 : _a[target]) {
            return true;
        }
        else {
            devkit_1.logger.warn(`
      The projectBuildConfig you provided is not valid.   
      ${!projectConfig ? 'The project ' + project + ' does not exist.' : ''}   
      ${projectConfig &&
                !((_b = projectConfig.targets) === null || _b === void 0 ? void 0 : _b[target]) &&
                `The project ${project} does not have the target ${target}.`}  
      The default projectBuildConfig is going to be used.       
      `);
        }
    }
    else {
        try {
            return Boolean((0, devkit_1.readProjectConfiguration)(tree, projectBuildConfig));
        }
        catch (e) {
            devkit_1.logger.warn(`
      The projectBuildConfig you provided is not valid. 
      The project ${projectBuildConfig} does not exist.
      The default projectBuildConfig is going to be used.
      `);
        }
    }
}
exports.customProjectBuildConfigIsValid = customProjectBuildConfigIsValid;
function findStorybookAndBuildTargets(targets) {
    const returnObject = {};
    Object.entries(targets).forEach(([target, targetConfig]) => {
        if (targetConfig.executor === '@nrwl/storybook:storybook') {
            returnObject.storybookTarget = target;
        }
        if (targetConfig.executor === '@nrwl/storybook:build') {
            returnObject.storybookBuildTarget = target;
        }
        /**
         * Not looking for '@nrwl/angular:ng-packagr-lite', only
         * looking for '@angular-devkit/build-angular:browser'
         * because the '@nrwl/angular:ng-packagr-lite' executor
         * does not support styles and extra options, so the user
         * will be forced to switch to build-storybook to add extra options.
         *
         * So we might as well use the build-storybook by default to
         * avoid any errors.
         */
        if (targetConfig.executor === '@angular-devkit/build-angular:browser') {
            returnObject.buildTarget = target;
        }
    });
    return returnObject;
}
exports.findStorybookAndBuildTargets = findStorybookAndBuildTargets;
function normalizeAngularBuilderStylesOptions(builderOptions, uiFramework) {
    if (uiFramework !== '@storybook/angular' &&
        uiFramework !== '@storybook/react') {
        if (builderOptions.styles) {
            delete builderOptions.styles;
        }
        if (builderOptions.stylePreprocessorOptions) {
            delete builderOptions.stylePreprocessorOptions;
        }
    }
    return builderOptions;
}
exports.normalizeAngularBuilderStylesOptions = normalizeAngularBuilderStylesOptions;
//# sourceMappingURL=utils.js.map