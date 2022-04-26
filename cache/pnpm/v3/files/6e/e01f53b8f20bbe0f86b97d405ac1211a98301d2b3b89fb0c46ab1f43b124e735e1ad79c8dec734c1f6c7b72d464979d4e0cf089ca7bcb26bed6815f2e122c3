"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationSchematic = exports.applicationGenerator = exports.addLintingToApplication = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const linter_1 = require("@nrwl/linter");
const jest_1 = require("@nrwl/jest");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const init_1 = require("../init/init");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
function getBuildConfig(project, options) {
    return {
        executor: '@nrwl/node:webpack',
        outputs: ['{options.outputPath}'],
        options: {
            outputPath: (0, devkit_1.joinPathFragments)('dist', options.appProjectRoot),
            main: (0, devkit_1.joinPathFragments)(project.sourceRoot, 'main' + (options.js ? '.js' : '.ts')),
            tsConfig: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'),
            assets: [(0, devkit_1.joinPathFragments)(project.sourceRoot, 'assets')],
        },
        configurations: {
            production: {
                optimization: true,
                extractLicenses: true,
                inspect: false,
                fileReplacements: [
                    {
                        replace: (0, devkit_1.joinPathFragments)(project.sourceRoot, 'environments/environment' + (options.js ? '.js' : '.ts')),
                        with: (0, devkit_1.joinPathFragments)(project.sourceRoot, 'environments/environment.prod' + (options.js ? '.js' : '.ts')),
                    },
                ],
            },
        },
    };
}
function getServeConfig(options) {
    return {
        executor: '@nrwl/node:node',
        options: {
            buildTarget: `${options.name}:build`,
        },
    };
}
function addProject(tree, options) {
    const project = {
        root: options.appProjectRoot,
        sourceRoot: (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'src'),
        projectType: 'application',
        targets: {},
        tags: options.parsedTags,
    };
    project.targets.build = getBuildConfig(project, options);
    project.targets.serve = getServeConfig(options);
    (0, devkit_1.addProjectConfiguration)(tree, options.name, project, options.standaloneConfig);
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(tree);
    if (!workspace.defaultProject) {
        workspace.defaultProject = options.name;
        (0, devkit_1.updateWorkspaceConfiguration)(tree, workspace);
    }
}
function addAppFiles(tree, options) {
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files/app'), options.appProjectRoot, {
        tmpl: '',
        name: options.name,
        root: options.appProjectRoot,
        offset: (0, devkit_1.offsetFromRoot)(options.appProjectRoot),
        rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(tree, options.appProjectRoot),
    });
    if (options.js) {
        (0, devkit_1.toJS)(tree);
    }
    if (options.pascalCaseFiles) {
        devkit_1.logger.warn('NOTE: --pascalCaseFiles is a noop');
    }
}
function addProxy(tree, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.frontendProject);
    if (projectConfig.targets && projectConfig.targets.serve) {
        const pathToProxyFile = `${projectConfig.root}/proxy.conf.json`;
        projectConfig.targets.serve.options = Object.assign(Object.assign({}, projectConfig.targets.serve.options), { proxyConfig: pathToProxyFile });
        if (!tree.exists(pathToProxyFile)) {
            tree.write(pathToProxyFile, JSON.stringify({
                '/api': {
                    target: 'http://localhost:3333',
                    secure: false,
                },
            }, null, 2));
        }
        else {
            //add new entry to existing config
            const proxyFileContent = tree.read(pathToProxyFile).toString();
            const proxyModified = Object.assign(Object.assign({}, JSON.parse(proxyFileContent)), { [`/${options.name}-api`]: {
                    target: 'http://localhost:3333',
                    secure: false,
                } });
            tree.write(pathToProxyFile, JSON.stringify(proxyModified, null, 2));
        }
        (0, devkit_1.updateProjectConfiguration)(tree, options.frontendProject, projectConfig);
    }
}
function addLintingToApplication(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const lintTask = yield (0, linter_1.lintProjectGenerator)(tree, {
            linter: options.linter,
            project: options.name,
            tsConfigPaths: [
                (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'),
            ],
            eslintFilePatterns: [
                `${options.appProjectRoot}/**/*.${options.js ? 'js' : 'ts'}`,
            ],
            skipFormat: true,
            setParserOptionsProject: options.setParserOptionsProject,
        });
        return lintTask;
    });
}
exports.addLintingToApplication = addLintingToApplication;
function applicationGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(tree, schema);
        const tasks = [];
        const initTask = yield (0, init_1.initGenerator)(tree, Object.assign(Object.assign({}, options), { skipFormat: true }));
        tasks.push(initTask);
        addAppFiles(tree, options);
        addProject(tree, options);
        if (options.linter !== linter_1.Linter.None) {
            const lintTask = yield addLintingToApplication(tree, Object.assign(Object.assign({}, options), { skipFormat: true }));
            tasks.push(lintTask);
        }
        if (options.unitTestRunner === 'jest') {
            const jestTask = yield (0, jest_1.jestProjectGenerator)(tree, Object.assign(Object.assign({}, options), { project: options.name, setupFile: 'none', skipSerializers: true, supportTsx: options.js, babelJest: options.babelJest, testEnvironment: 'node', skipFormat: true }));
            tasks.push(jestTask);
        }
        if (options.js) {
            (0, devkit_1.updateTsConfigsToJs)(tree, { projectRoot: options.appProjectRoot });
        }
        if (options.frontendProject) {
            addProxy(tree, options);
        }
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.applicationGenerator = applicationGenerator;
function normalizeOptions(host, options) {
    var _a, _b;
    const { appsDir } = (0, devkit_1.getWorkspaceLayout)(host);
    const appDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${(0, devkit_1.names)(options.name).fileName}`
        : (0, devkit_1.names)(options.name).fileName;
    const appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    const appProjectRoot = (0, devkit_1.joinPathFragments)(appsDir, appDirectory);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    return Object.assign(Object.assign({}, options), { name: (0, devkit_1.names)(appProjectName).fileName, frontendProject: options.frontendProject
            ? (0, devkit_1.names)(options.frontendProject).fileName
            : undefined, appProjectRoot,
        parsedTags, linter: (_a = options.linter) !== null && _a !== void 0 ? _a : linter_1.Linter.EsLint, unitTestRunner: (_b = options.unitTestRunner) !== null && _b !== void 0 ? _b : 'jest' });
}
exports.default = applicationGenerator;
exports.applicationSchematic = (0, devkit_1.convertNxGenerator)(applicationGenerator);
//# sourceMappingURL=application.js.map