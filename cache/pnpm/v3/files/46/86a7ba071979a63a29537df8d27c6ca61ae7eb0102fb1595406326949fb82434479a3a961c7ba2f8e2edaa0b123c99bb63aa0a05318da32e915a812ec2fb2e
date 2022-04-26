"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationSchematic = exports.configurationGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const linter_1 = require("@nrwl/linter");
const path_1 = require("path");
const utilities_1 = require("../../utils/utilities");
const cypress_project_1 = require("../cypress-project/cypress-project");
const init_1 = require("../init/init");
const version_utils_1 = require("@nrwl/workspace/src/utilities/version-utils");
const semver_1 = require("semver");
const utils_1 = require("../../executors/utils");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
function configurationGenerator(tree, rawSchema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const schema = normalizeSchema(rawSchema);
        const tasks = [];
        const { projectType, targets } = (0, devkit_1.readProjectConfiguration)(tree, schema.name);
        const { buildTarget } = (0, utils_1.findStorybookAndBuildTargets)(targets);
        const initTask = yield (0, init_1.initGenerator)(tree, {
            uiFramework: schema.uiFramework,
        });
        tasks.push(initTask);
        createRootStorybookDir(tree, schema.js);
        createProjectStorybookDir(tree, schema.name, schema.uiFramework, schema.js);
        configureTsProjectConfig(tree, schema);
        configureTsSolutionConfig(tree, schema);
        updateLintConfig(tree, schema);
        addStorybookTask(tree, schema.name, schema.uiFramework, buildTarget, schema.projectBuildConfig);
        if (schema.configureCypress) {
            if (projectType !== 'application') {
                const cypressTask = yield (0, cypress_project_1.cypressProjectGenerator)(tree, {
                    name: schema.name,
                    js: schema.js,
                    linter: schema.linter,
                    directory: schema.cypressDirectory,
                    standaloneConfig: schema.standaloneConfig,
                });
                tasks.push(cypressTask);
            }
            else {
                devkit_1.logger.warn('There is already an e2e project setup');
            }
        }
        yield (0, devkit_1.formatFiles)(tree);
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.configurationGenerator = configurationGenerator;
function normalizeSchema(schema) {
    const defaults = {
        configureCypress: true,
        linter: linter_1.Linter.TsLint,
        js: false,
    };
    return Object.assign(Object.assign({}, defaults), schema);
}
function createRootStorybookDir(tree, js) {
    if (tree.exists('.storybook')) {
        devkit_1.logger.warn(`.storybook folder already exists at root! Skipping generating files in it.`);
        return;
    }
    devkit_1.logger.debug(`adding .storybook folder to the root directory`);
    const templatePath = (0, path_1.join)(__dirname, './root-files');
    (0, devkit_1.generateFiles)(tree, templatePath, '', {
        rootTsConfigPath: (0, typescript_1.getRootTsConfigPathInTree)(tree),
    });
    if (js) {
        (0, devkit_1.toJS)(tree);
    }
}
function createProjectStorybookDir(tree, projectName, uiFramework, js) {
    const { root, projectType } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    const projectDirectory = projectType === 'application' ? 'app' : 'lib';
    const storybookRoot = (0, path_1.join)(root, '.storybook');
    if (tree.exists(storybookRoot)) {
        devkit_1.logger.warn(`.storybook folder already exists for ${projectName}! Skipping generating files in it.`);
        return;
    }
    devkit_1.logger.debug(`adding .storybook folder to ${projectDirectory}`);
    const templatePath = (0, path_1.join)(__dirname, './project-files');
    (0, devkit_1.generateFiles)(tree, templatePath, root, {
        tmpl: '',
        uiFramework,
        offsetFromRoot: (0, devkit_1.offsetFromRoot)(root),
        rootTsConfigPath: (0, typescript_1.getRootTsConfigPathInTree)(tree),
        projectType: projectDirectory,
        useWebpack5: uiFramework === '@storybook/angular' ||
            uiFramework === '@storybook/react',
        existsRootWebpackConfig: tree.exists('.storybook/webpack.config.js'),
    });
    if (js) {
        (0, devkit_1.toJS)(tree);
    }
}
function getTsConfigPath(tree, projectName, path) {
    const { root, projectType } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    return (0, path_1.join)(root, path && path.length > 0
        ? path
        : projectType === 'application'
            ? 'tsconfig.app.json'
            : 'tsconfig.lib.json');
}
function configureTsProjectConfig(tree, schema) {
    var _a, _b;
    const { name: projectName } = schema;
    let tsConfigPath;
    let tsConfigContent;
    try {
        tsConfigPath = getTsConfigPath(tree, projectName);
        tsConfigContent = (0, devkit_1.readJson)(tree, tsConfigPath);
    }
    catch (_c) {
        /**
         * Custom app configurations
         * may contain a tsconfig.json
         * instead of a tsconfig.app.json.
         */
        tsConfigPath = getTsConfigPath(tree, projectName, 'tsconfig.json');
        tsConfigContent = (0, devkit_1.readJson)(tree, tsConfigPath);
    }
    if (!((_a = tsConfigContent === null || tsConfigContent === void 0 ? void 0 : tsConfigContent.exclude) === null || _a === void 0 ? void 0 : _a.includes('**/*.stories.ts')) &&
        !((_b = tsConfigContent === null || tsConfigContent === void 0 ? void 0 : tsConfigContent.exclude) === null || _b === void 0 ? void 0 : _b.includes('**/*.stories.js'))) {
        tsConfigContent.exclude = [
            ...(tsConfigContent.exclude || []),
            '**/*.stories.ts',
            '**/*.stories.js',
            ...((0, utilities_1.isFramework)('react', schema) || (0, utilities_1.isFramework)('react-native', schema)
                ? ['**/*.stories.jsx', '**/*.stories.tsx']
                : []),
        ];
    }
    (0, devkit_1.writeJson)(tree, tsConfigPath, tsConfigContent);
}
function configureTsSolutionConfig(tree, schema) {
    var _a, _b;
    const { name: projectName } = schema;
    const { root } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    const tsConfigPath = (0, path_1.join)(root, 'tsconfig.json');
    const tsConfigContent = (0, devkit_1.readJson)(tree, tsConfigPath);
    if (!((_b = (_a = tsConfigContent === null || tsConfigContent === void 0 ? void 0 : tsConfigContent.references) === null || _a === void 0 ? void 0 : _a.map((reference) => reference.path)) === null || _b === void 0 ? void 0 : _b.includes('./.storybook/tsconfig.json'))) {
        tsConfigContent.references = [
            ...(tsConfigContent.references || []),
            {
                path: './.storybook/tsconfig.json',
            },
        ];
    }
    (0, devkit_1.writeJson)(tree, tsConfigPath, tsConfigContent);
}
/**
 * When adding storybook we need to inform TSLint or ESLint
 * of the additional tsconfig.json file which will be the only tsconfig
 * which includes *.stories files.
 *
 * For TSLint this is done via the builder config, for ESLint this is
 * done within the .eslintrc.json file.
 */
function updateLintConfig(tree, schema) {
    const { name: projectName } = schema;
    const { targets, root } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    const tslintTargets = Object.values(targets).filter((target) => target.executor === '@angular-devkit/build-angular:tslint');
    tslintTargets.forEach((target) => {
        target.options.tsConfig = dedupe([
            ...target.options.tsConfig,
            (0, devkit_1.joinPathFragments)(root, './.storybook/tsconfig.json'),
        ]);
    });
    if (tree.exists((0, path_1.join)(root, '.eslintrc.json'))) {
        (0, devkit_1.updateJson)(tree, (0, path_1.join)(root, '.eslintrc.json'), (json) => {
            var _a, _b, _c, _d;
            if (typeof ((_a = json.parserOptions) === null || _a === void 0 ? void 0 : _a.project) === 'string') {
                json.parserOptions.project = [json.parserOptions.project];
            }
            if (Array.isArray((_b = json.parserOptions) === null || _b === void 0 ? void 0 : _b.project)) {
                json.parserOptions.project = dedupe([
                    ...json.parserOptions.project,
                    (0, path_1.join)(root, '.storybook/tsconfig.json'),
                ]);
            }
            const overrides = json.overrides || [];
            for (const o of overrides) {
                if (typeof ((_c = o.parserOptions) === null || _c === void 0 ? void 0 : _c.project) === 'string') {
                    o.parserOptions.project = [o.parserOptions.project];
                }
                if (Array.isArray((_d = o.parserOptions) === null || _d === void 0 ? void 0 : _d.project)) {
                    o.parserOptions.project = dedupe([
                        ...o.parserOptions.project,
                        (0, path_1.join)(root, '.storybook/tsconfig.json'),
                    ]);
                }
            }
            return json;
        });
    }
}
function dedupe(arr) {
    return Array.from(new Set(arr));
}
function addStorybookTask(tree, projectName, uiFramework, buildTargetForAngularProjects, customProjectBuildConfig) {
    if (uiFramework === '@storybook/react-native') {
        return;
    }
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    projectConfig.targets['storybook'] = {
        executor: '@nrwl/storybook:storybook',
        options: {
            uiFramework,
            port: 4400,
            config: {
                configFolder: `${projectConfig.root}/.storybook`,
            },
            projectBuildConfig: uiFramework === '@storybook/angular'
                ? customProjectBuildConfig &&
                    (0, utils_1.customProjectBuildConfigIsValid)(tree, customProjectBuildConfig)
                    ? customProjectBuildConfig
                    : buildTargetForAngularProjects
                        ? projectName
                        : `${projectName}:build-storybook`
                : undefined,
        },
        configurations: {
            ci: {
                quiet: true,
            },
        },
    };
    projectConfig.targets['build-storybook'] = {
        executor: '@nrwl/storybook:build',
        outputs: ['{options.outputPath}'],
        options: {
            uiFramework,
            outputPath: (0, devkit_1.joinPathFragments)('dist/storybook', projectName),
            config: {
                configFolder: `${projectConfig.root}/.storybook`,
            },
            projectBuildConfig: uiFramework === '@storybook/angular'
                ? customProjectBuildConfig &&
                    (0, utils_1.customProjectBuildConfigIsValid)(tree, customProjectBuildConfig)
                    ? customProjectBuildConfig
                    : buildTargetForAngularProjects
                        ? projectName
                        : `${projectName}:build-storybook`
                : undefined,
        },
        configurations: {
            ci: {
                quiet: true,
            },
        },
    };
    (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfig);
}
function getCurrentWorkspaceStorybookVersion(tree) {
    let workspaceStorybookVersion = (0, utilities_1.readCurrentWorkspaceStorybookVersionFromGenerator)(tree);
    if ((0, semver_1.gte)((0, version_utils_1.checkAndCleanWithSemver)('@storybook/core', workspaceStorybookVersion), '6.0.0')) {
        workspaceStorybookVersion = '6';
    }
    return workspaceStorybookVersion;
}
exports.default = configurationGenerator;
exports.configurationSchematic = (0, devkit_1.convertNxGenerator)(configurationGenerator);
//# sourceMappingURL=configuration.js.map