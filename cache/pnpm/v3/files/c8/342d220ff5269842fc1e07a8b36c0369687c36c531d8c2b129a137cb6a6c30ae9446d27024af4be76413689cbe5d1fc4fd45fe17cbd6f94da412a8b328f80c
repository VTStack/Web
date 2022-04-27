"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJsLibraryGeneratorOptions = exports.normalizeOptions = void 0;
const devkit_1 = require("@nrwl/devkit");
const linter_1 = require("@nrwl/linter");
function normalizeOptions(tree, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { libsDir, npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const fileName = projectName;
    const projectRoot = (0, devkit_1.joinPathFragments)(libsDir, projectDirectory);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    const normalized = Object.assign(Object.assign({}, options), { controller: (_a = options.controller) !== null && _a !== void 0 ? _a : false, fileName, global: (_b = options.global) !== null && _b !== void 0 ? _b : false, linter: (_c = options.linter) !== null && _c !== void 0 ? _c : linter_1.Linter.EsLint, parsedTags, prefix: npmScope, // we could also allow customizing this
        projectDirectory,
        projectName,
        projectRoot, service: (_d = options.service) !== null && _d !== void 0 ? _d : false, target: (_e = options.target) !== null && _e !== void 0 ? _e : 'es6', testEnvironment: (_f = options.testEnvironment) !== null && _f !== void 0 ? _f : 'node', unitTestRunner: (_g = options.unitTestRunner) !== null && _g !== void 0 ? _g : 'jest' });
    return normalized;
}
exports.normalizeOptions = normalizeOptions;
function toJsLibraryGeneratorOptions(options) {
    return {
        name: options.name,
        buildable: options.buildable,
        directory: options.directory,
        importPath: options.importPath,
        linter: options.linter,
        publishable: options.publishable,
        skipFormat: true,
        skipTsConfig: options.skipTsConfig,
        strict: options.strict,
        tags: options.tags,
        testEnvironment: options.testEnvironment,
        unitTestRunner: options.unitTestRunner,
        config: options.standaloneConfig ? 'project' : 'workspace',
        setParserOptionsProject: options.setParserOptionsProject,
    };
}
exports.toJsLibraryGeneratorOptions = toJsLibraryGeneratorOptions;
//# sourceMappingURL=normalize-options.js.map