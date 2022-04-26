"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationSchematic = exports.applicationGenerator = void 0;
const tslib_1 = require("tslib");
const cypress_1 = require("@nrwl/cypress");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const versions_1 = require("@nrwl/js/src/utils/versions");
const linter_1 = require("@nrwl/linter");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const path_1 = require("path");
const versions_2 = require("../../utils/versions");
const init_1 = require("../init/init");
function createApplicationFiles(tree, options) {
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files/app'), options.appProjectRoot, Object.assign(Object.assign(Object.assign({}, options), (0, devkit_1.names)(options.name)), { tmpl: '', offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.appProjectRoot), rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(tree, options.appProjectRoot) }));
    if (options.unitTestRunner === 'none') {
        tree.delete((0, path_1.join)(options.appProjectRoot, './src/app/app.element.spec.ts'));
    }
}
function addBuildTarget(project, options) {
    var _a;
    const buildOptions = {
        outputPath: (0, devkit_1.joinPathFragments)('dist', options.appProjectRoot),
        compiler: (_a = options.compiler) !== null && _a !== void 0 ? _a : 'babel',
        index: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src/index.html'),
        baseHref: '/',
        main: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src/main.ts'),
        polyfills: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src/polyfills.ts'),
        tsConfig: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'),
        assets: [
            (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src/favicon.ico'),
            (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src/assets'),
        ],
        styles: [
            (0, devkit_1.joinPathFragments)(options.appProjectRoot, `src/styles.${options.style}`),
        ],
        scripts: [],
    };
    const productionBuildOptions = {
        fileReplacements: [
            {
                replace: (0, devkit_1.joinPathFragments)(options.appProjectRoot, `src/environments/environment.ts`),
                with: (0, devkit_1.joinPathFragments)(options.appProjectRoot, `src/environments/environment.prod.ts`),
            },
        ],
        optimization: true,
        outputHashing: 'all',
        sourceMap: false,
        namedChunks: false,
        extractLicenses: true,
        vendorChunk: false,
    };
    return Object.assign(Object.assign({}, project), { targets: Object.assign(Object.assign({}, project.targets), { build: {
                executor: '@nrwl/web:webpack',
                outputs: ['{options.outputPath}'],
                defaultConfiguration: 'production',
                options: buildOptions,
                configurations: {
                    production: productionBuildOptions,
                },
            } }) });
}
function addServeTarget(project, options) {
    const serveTarget = {
        executor: '@nrwl/web:dev-server',
        options: {
            buildTarget: `${options.projectName}:build`,
        },
        configurations: {
            production: {
                buildTarget: `${options.projectName}:build:production`,
            },
        },
    };
    return Object.assign(Object.assign({}, project), { targets: Object.assign(Object.assign({}, project.targets), { serve: serveTarget }) });
}
function addProject(tree, options) {
    const targets = {};
    let project = {
        projectType: 'application',
        root: options.appProjectRoot,
        sourceRoot: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src'),
        tags: options.parsedTags,
        targets,
    };
    project = addBuildTarget(project, options);
    project = addServeTarget(project, options);
    (0, devkit_1.addProjectConfiguration)(tree, options.projectName, project, options.standaloneConfig);
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(tree);
    if (!workspace.defaultProject) {
        workspace.defaultProject = options.projectName;
        (0, devkit_1.updateWorkspaceConfiguration)(tree, workspace);
    }
}
function setDefaults(tree, options) {
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(tree);
    workspace.generators = workspace.generators || {};
    workspace.generators['@nrwl/web:application'] = Object.assign({ style: options.style, linter: options.linter, unitTestRunner: options.unitTestRunner, e2eTestRunner: options.e2eTestRunner }, workspace.generators['@nrwl/web:application']);
    workspace.generators['@nrwl/web:library'] = Object.assign({ style: options.style, linter: options.linter, unitTestRunner: options.unitTestRunner }, workspace.generators['@nrwl/web:library']);
    (0, devkit_1.updateWorkspaceConfiguration)(tree, workspace);
}
function applicationGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(host, schema);
        const tasks = [];
        const webTask = yield (0, init_1.webInitGenerator)(host, Object.assign(Object.assign({}, options), { skipFormat: true }));
        tasks.push(webTask);
        createApplicationFiles(host, options);
        addProject(host, options);
        const lintTask = yield (0, linter_1.lintProjectGenerator)(host, {
            linter: options.linter,
            project: options.projectName,
            tsConfigPaths: [
                (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'),
            ],
            eslintFilePatterns: [`${options.appProjectRoot}/**/*.ts`],
            skipFormat: true,
            setParserOptionsProject: options.setParserOptionsProject,
        });
        tasks.push(lintTask);
        if (options.e2eTestRunner === 'cypress') {
            const cypressTask = yield (0, cypress_1.cypressProjectGenerator)(host, Object.assign(Object.assign({}, options), { name: `${options.name}-e2e`, directory: options.directory, project: options.projectName }));
            tasks.push(cypressTask);
        }
        if (options.unitTestRunner === 'jest') {
            const jestTask = yield (0, jest_1.jestProjectGenerator)(host, {
                project: options.projectName,
                skipSerializers: true,
                setupFile: 'web-components',
                compiler: options.compiler,
            });
            tasks.push(jestTask);
        }
        if (options.compiler === 'swc') {
            const installTask = yield (0, devkit_1.addDependenciesToPackageJson)(host, {}, { '@swc/core': versions_1.swcCoreVersion, 'swc-loader': versions_2.swcLoaderVersion });
            tasks.push(installTask);
        }
        setDefaults(host, options);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.applicationGenerator = applicationGenerator;
function normalizeOptions(host, options) {
    var _a;
    const appDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${(0, devkit_1.names)(options.name).fileName}`
        : (0, devkit_1.names)(options.name).fileName;
    const { appsDir, npmScope: defaultPrefix } = (0, devkit_1.getWorkspaceLayout)(host);
    const appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    const e2eProjectName = `${appProjectName}-e2e`;
    const appProjectRoot = (0, devkit_1.joinPathFragments)(appsDir, appDirectory);
    const e2eProjectRoot = (0, devkit_1.joinPathFragments)(appsDir, `${appDirectory}-e2e`);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    options.style = options.style || 'css';
    options.linter = options.linter || linter_1.Linter.EsLint;
    options.unitTestRunner = options.unitTestRunner || 'jest';
    options.e2eTestRunner = options.e2eTestRunner || 'cypress';
    return Object.assign(Object.assign({}, options), { prefix: (_a = options.prefix) !== null && _a !== void 0 ? _a : defaultPrefix, name: (0, devkit_1.names)(options.name).fileName, projectName: appProjectName, appProjectRoot,
        e2eProjectRoot,
        e2eProjectName,
        parsedTags });
}
exports.default = applicationGenerator;
exports.applicationSchematic = (0, devkit_1.convertNxGenerator)(applicationGenerator);
//# sourceMappingURL=application.js.map