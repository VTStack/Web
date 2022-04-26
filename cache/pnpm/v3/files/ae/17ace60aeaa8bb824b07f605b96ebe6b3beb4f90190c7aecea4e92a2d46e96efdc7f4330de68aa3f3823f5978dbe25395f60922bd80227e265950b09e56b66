"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySchematic = exports.libraryGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const generators_1 = require("@nrwl/workspace/generators");
const path_1 = require("path");
function libraryGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(tree, schema);
        if (options.publishable === true && !schema.importPath) {
            throw new Error(`For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`);
        }
        const libraryInstall = yield (0, generators_1.libraryGenerator)(tree, Object.assign(Object.assign({}, schema), { importPath: options.importPath, testEnvironment: 'node', skipFormat: true, setParserOptionsProject: options.setParserOptionsProject }));
        createFiles(tree, options);
        if (options.js) {
            (0, devkit_1.updateTsConfigsToJs)(tree, options);
        }
        updateProject(tree, options);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return libraryInstall;
    });
}
exports.libraryGenerator = libraryGenerator;
exports.default = libraryGenerator;
exports.librarySchematic = (0, devkit_1.convertNxGenerator)(libraryGenerator);
function normalizeOptions(tree, options) {
    const { npmScope, libsDir } = (0, devkit_1.getWorkspaceLayout)(tree);
    const defaultPrefix = npmScope;
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const fileName = getCaseAwareFileName({
        fileName: options.simpleModuleName ? name : projectName,
        pascalCaseFiles: options.pascalCaseFiles,
    });
    const projectRoot = (0, devkit_1.joinPathFragments)(libsDir, projectDirectory);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    const importPath = options.importPath || `@${defaultPrefix}/${projectDirectory}`;
    return Object.assign(Object.assign({}, options), { prefix: defaultPrefix, // we could also allow customizing this
        fileName, name: projectName, projectRoot,
        projectDirectory,
        parsedTags,
        importPath });
}
function getCaseAwareFileName(options) {
    const normalized = (0, devkit_1.names)(options.fileName);
    return options.pascalCaseFiles ? normalized.className : normalized.fileName;
}
function createFiles(tree, options) {
    const { className, name, propertyName } = (0, devkit_1.names)(options.fileName);
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files/lib'), options.projectRoot, Object.assign(Object.assign({}, options), { className,
        name,
        propertyName, tmpl: '', offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot) }));
    if (options.unitTestRunner === 'none') {
        tree.delete((0, path_1.join)(options.projectRoot, `./src/lib/${options.fileName}.spec.ts`));
    }
    if (!options.publishable && !options.buildable) {
        tree.delete((0, path_1.join)(options.projectRoot, 'package.json'));
    }
    if (options.js) {
        (0, devkit_1.toJS)(tree);
    }
}
function updateProject(tree, options) {
    if (!options.publishable && !options.buildable) {
        return;
    }
    const project = (0, devkit_1.readProjectConfiguration)(tree, options.name);
    const { libsDir } = (0, devkit_1.getWorkspaceLayout)(tree);
    project.targets = project.targets || {};
    project.targets.build = {
        executor: `@nrwl/js:${options.compiler}`,
        outputs: ['{options.outputPath}'],
        options: {
            outputPath: `dist/${libsDir}/${options.projectDirectory}`,
            tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
            packageJson: `${options.projectRoot}/package.json`,
            main: `${options.projectRoot}/src/index` + (options.js ? '.js' : '.ts'),
            assets: [`${options.projectRoot}/*.md`],
        },
    };
    if (options.rootDir) {
        project.targets.build.options.srcRootForCompilationRoot = options.rootDir;
    }
    (0, devkit_1.updateProjectConfiguration)(tree, options.name, project);
}
//# sourceMappingURL=library.js.map