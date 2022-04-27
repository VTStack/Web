"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNodeApplicationGeneratorOptions = exports.normalizeOptions = void 0;
const devkit_1 = require("@nrwl/devkit");
const linter_1 = require("@nrwl/linter");
function normalizeOptions(tree, options) {
    var _a, _b;
    const appDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${(0, devkit_1.names)(options.name).fileName}`
        : (0, devkit_1.names)(options.name).fileName;
    const appProjectRoot = (0, devkit_1.joinPathFragments)((0, devkit_1.getWorkspaceLayout)(tree).appsDir, appDirectory);
    return Object.assign(Object.assign({}, options), { appProjectRoot, linter: (_a = options.linter) !== null && _a !== void 0 ? _a : linter_1.Linter.EsLint, unitTestRunner: (_b = options.unitTestRunner) !== null && _b !== void 0 ? _b : 'jest' });
}
exports.normalizeOptions = normalizeOptions;
function toNodeApplicationGeneratorOptions(options) {
    return {
        name: options.name,
        directory: options.directory,
        frontendProject: options.frontendProject,
        linter: options.linter,
        skipFormat: true,
        skipPackageJson: options.skipPackageJson,
        standaloneConfig: options.standaloneConfig,
        tags: options.tags,
        unitTestRunner: options.unitTestRunner,
        setParserOptionsProject: options.setParserOptionsProject,
    };
}
exports.toNodeApplicationGeneratorOptions = toNodeApplicationGeneratorOptions;
//# sourceMappingURL=normalize-options.js.map