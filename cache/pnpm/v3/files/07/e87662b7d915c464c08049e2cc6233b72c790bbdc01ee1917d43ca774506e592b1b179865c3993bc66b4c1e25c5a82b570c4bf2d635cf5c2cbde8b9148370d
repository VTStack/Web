"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySchematic = exports.libraryGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const versions_1 = require("@nrwl/js/src/utils/versions");
const linter_1 = require("@nrwl/linter");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const ts = require("typescript");
const assertion_1 = require("../../utils/assertion");
const ast_utils_1 = require("../../utils/ast-utils");
const lint_1 = require("../../utils/lint");
const versions_2 = require("../../utils/versions");
const component_1 = require("../component/component");
const init_1 = require("../init/init");
function libraryGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tasks = [];
        const options = normalizeOptions(host, schema);
        if (options.publishable === true && !schema.importPath) {
            throw new Error(`For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`);
        }
        if (!options.component) {
            options.style = 'none';
        }
        const initTask = yield (0, init_1.default)(host, Object.assign(Object.assign({}, options), { e2eTestRunner: 'none', skipFormat: true }));
        tasks.push(initTask);
        addProject(host, options);
        const lintTask = yield addLinting(host, options);
        tasks.push(lintTask);
        createFiles(host, options);
        if (!options.skipTsConfig) {
            updateBaseTsConfig(host, options);
        }
        if (options.unitTestRunner === 'jest') {
            const jestTask = yield (0, jest_1.jestProjectGenerator)(host, Object.assign(Object.assign({}, options), { project: options.name, setupFile: 'none', supportTsx: true, skipSerializers: true, compiler: options.compiler }));
            tasks.push(jestTask);
        }
        if (options.component) {
            const componentTask = yield (0, component_1.default)(host, {
                name: options.name,
                project: options.name,
                flat: true,
                style: options.style,
                skipTests: options.unitTestRunner === 'none',
                export: true,
                routing: options.routing,
                js: options.js,
                pascalCaseFiles: options.pascalCaseFiles,
            });
            tasks.push(componentTask);
        }
        if (options.publishable || options.buildable) {
            updateLibPackageNpmScope(host, options);
        }
        const installTask = yield (0, devkit_1.addDependenciesToPackageJson)(host, {
            react: versions_2.reactVersion,
            'react-dom': versions_2.reactDomVersion,
        }, options.compiler === 'swc' ? { '@swc/core': versions_1.swcCoreVersion } : {});
        tasks.push(installTask);
        const routeTask = updateAppRoutes(host, options);
        tasks.push(routeTask);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.libraryGenerator = libraryGenerator;
function addLinting(host, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const lintTask = yield (0, linter_1.lintProjectGenerator)(host, {
            linter: options.linter,
            project: options.name,
            tsConfigPaths: [
                (0, devkit_1.joinPathFragments)(options.projectRoot, 'tsconfig.lib.json'),
            ],
            eslintFilePatterns: [`${options.projectRoot}/**/*.{ts,tsx,js,jsx}`],
            skipFormat: true,
        });
        if (options.linter === linter_1.Linter.TsLint) {
            return;
        }
        const reactEslintJson = (0, lint_1.createReactEslintJson)(options.projectRoot, options.setParserOptionsProject);
        (0, devkit_1.updateJson)(host, (0, devkit_1.joinPathFragments)(options.projectRoot, '.eslintrc.json'), () => reactEslintJson);
        const installTask = yield (0, devkit_1.addDependenciesToPackageJson)(host, lint_1.extraEslintDependencies.dependencies, lint_1.extraEslintDependencies.devDependencies);
        return (0, run_tasks_in_serial_1.runTasksInSerial)(lintTask, installTask);
    });
}
function addProject(host, options) {
    var _a;
    const targets = {};
    if (options.publishable || options.buildable) {
        const { libsDir } = (0, devkit_1.getWorkspaceLayout)(host);
        const external = ['react/jsx-runtime'];
        if (options.style === '@emotion/styled') {
            external.push('@emotion/styled/base');
        }
        targets.build = {
            builder: '@nrwl/web:rollup',
            outputs: ['{options.outputPath}'],
            options: {
                outputPath: `dist/${libsDir}/${options.projectDirectory}`,
                tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
                project: `${options.projectRoot}/package.json`,
                entryFile: maybeJs(options, `${options.projectRoot}/src/index.ts`),
                external,
                rollupConfig: `@nrwl/react/plugins/bundle-rollup`,
                compiler: (_a = options.compiler) !== null && _a !== void 0 ? _a : 'babel',
                assets: [
                    {
                        glob: `${options.projectRoot}/README.md`,
                        input: '.',
                        output: '.',
                    },
                ],
            },
        };
    }
    (0, devkit_1.addProjectConfiguration)(host, options.name, {
        root: options.projectRoot,
        sourceRoot: (0, devkit_1.joinPathFragments)(options.projectRoot, 'src'),
        projectType: 'library',
        tags: options.parsedTags,
        targets,
    }, options.standaloneConfig);
}
function updateTsConfig(tree, options) {
    (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(options.projectRoot, 'tsconfig.json'), (json) => {
        if (options.strict) {
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { forceConsistentCasingInFileNames: true, strict: true, noImplicitOverride: true, noPropertyAccessFromIndexSignature: true, noImplicitReturns: true, noFallthroughCasesInSwitch: true });
        }
        return json;
    });
}
function updateBaseTsConfig(host, options) {
    (0, devkit_1.updateJson)(host, (0, typescript_1.getRootTsConfigPathInTree)(host), (json) => {
        const c = json.compilerOptions;
        c.paths = c.paths || {};
        delete c.paths[options.name];
        if (c.paths[options.importPath]) {
            throw new Error(`You already have a library using the import path "${options.importPath}". Make sure to specify a unique one.`);
        }
        const { libsDir } = (0, devkit_1.getWorkspaceLayout)(host);
        c.paths[options.importPath] = [
            maybeJs(options, (0, devkit_1.joinPathFragments)(libsDir, `${options.projectDirectory}/src/index.ts`)),
        ];
        return json;
    });
}
function createFiles(host, options) {
    (0, devkit_1.generateFiles)(host, (0, devkit_1.joinPathFragments)(__dirname, './files/lib'), options.projectRoot, Object.assign(Object.assign(Object.assign({}, options), (0, devkit_1.names)(options.name)), { tmpl: '', offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot), rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(host, options.projectRoot) }));
    if (!options.publishable && !options.buildable) {
        host.delete(`${options.projectRoot}/package.json`);
    }
    if (options.js) {
        (0, devkit_1.toJS)(host);
    }
    updateTsConfig(host, options);
}
function updateAppRoutes(host, options) {
    if (!options.appMain || !options.appSourceRoot) {
        return () => { };
    }
    const { content, source } = readComponent(host, options.appMain);
    const componentImportPath = (0, ast_utils_1.findComponentImportPath)('App', source);
    if (!componentImportPath) {
        throw new Error(`Could not find App component in ${options.appMain} (Hint: you can omit --appProject, or make sure App exists)`);
    }
    const appComponentPath = (0, devkit_1.joinPathFragments)(options.appSourceRoot, maybeJs(options, `${componentImportPath}.tsx`));
    const routerTask = (0, devkit_1.addDependenciesToPackageJson)(host, { 'react-router-dom': versions_2.reactRouterDomVersion }, { '@types/react-router-dom': versions_2.typesReactRouterDomVersion });
    // addBrowserRouterToMain
    const isRouterPresent = content.match(/react-router-dom/);
    if (!isRouterPresent) {
        const changes = (0, devkit_1.applyChangesToString)(content, (0, ast_utils_1.addBrowserRouter)(options.appMain, source));
        host.write(options.appMain, changes);
    }
    // addInitialAppRoutes
    {
        const { content: componentContent, source: componentSource } = readComponent(host, appComponentPath);
        const isComponentRouterPresent = componentContent.match(/react-router-dom/);
        if (!isComponentRouterPresent) {
            const changes = (0, devkit_1.applyChangesToString)(componentContent, (0, ast_utils_1.addInitialRoutes)(appComponentPath, componentSource));
            host.write(appComponentPath, changes);
        }
    }
    // addNewAppRoute
    {
        const { content: componentContent, source: componentSource } = readComponent(host, appComponentPath);
        const { npmScope } = (0, devkit_1.getWorkspaceLayout)(host);
        const changes = (0, devkit_1.applyChangesToString)(componentContent, (0, ast_utils_1.addRoute)(appComponentPath, componentSource, {
            routePath: options.routePath,
            componentName: (0, devkit_1.names)(options.name).className,
            moduleName: `@${npmScope}/${options.projectDirectory}`,
        }));
        host.write(appComponentPath, changes);
    }
    return routerTask;
}
function readComponent(host, path) {
    if (!host.exists(path)) {
        throw new Error(`Cannot find ${path}`);
    }
    const content = host.read(path, 'utf-8');
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return { content, source };
}
function normalizeOptions(host, options) {
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const fileName = projectName;
    const { libsDir, npmScope } = (0, devkit_1.getWorkspaceLayout)(host);
    const projectRoot = (0, devkit_1.joinPathFragments)(libsDir, projectDirectory);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    const importPath = options.importPath || `@${npmScope}/${projectDirectory}`;
    const normalized = Object.assign(Object.assign({}, options), { fileName, routePath: `/${name}`, name: projectName, projectRoot,
        projectDirectory,
        parsedTags,
        importPath });
    if (options.appProject) {
        const appProjectConfig = (0, devkit_1.getProjects)(host).get(options.appProject);
        if (appProjectConfig.projectType !== 'application') {
            throw new Error(`appProject expected type of "application" but got "${appProjectConfig.projectType}"`);
        }
        try {
            normalized.appMain = appProjectConfig.targets.build.options.main;
            normalized.appSourceRoot = (0, devkit_1.normalizePath)(appProjectConfig.sourceRoot);
        }
        catch (e) {
            throw new Error(`Could not locate project main for ${options.appProject}`);
        }
    }
    (0, assertion_1.assertValidStyle)(normalized.style);
    return normalized;
}
function updateLibPackageNpmScope(host, options) {
    return (0, devkit_1.updateJson)(host, `${options.projectRoot}/package.json`, (json) => {
        json.name = options.importPath;
        return json;
    });
}
function maybeJs(options, path) {
    return options.js && (path.endsWith('.ts') || path.endsWith('.tsx'))
        ? path.replace(/\.tsx?$/, '.js')
        : path;
}
exports.default = libraryGenerator;
exports.librarySchematic = (0, devkit_1.convertNxGenerator)(libraryGenerator);
//# sourceMappingURL=library.js.map