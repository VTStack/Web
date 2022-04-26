"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeOptions = exports.normalizeProjectName = exports.normalizeDirectory = void 0;
const assertion_1 = require("../../../utils/assertion");
const devkit_1 = require("@nrwl/devkit");
const find_free_port_1 = require("./find-free-port");
function normalizeDirectory(options) {
    return options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${(0, devkit_1.names)(options.name).fileName}`
        : (0, devkit_1.names)(options.name).fileName;
}
exports.normalizeDirectory = normalizeDirectory;
function normalizeProjectName(options) {
    return normalizeDirectory(options).replace(new RegExp('/', 'g'), '-');
}
exports.normalizeProjectName = normalizeProjectName;
function normalizeOptions(host, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    const appDirectory = normalizeDirectory(options);
    const appProjectName = normalizeProjectName(options);
    const e2eProjectName = `${appProjectName}-e2e`;
    const { appsDir } = (0, devkit_1.getWorkspaceLayout)(host);
    const appProjectRoot = (0, devkit_1.normalizePath)(`${appsDir}/${appDirectory}`);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    const fileName = options.pascalCaseFiles ? 'App' : 'app';
    const styledModule = /^(css|scss|less|styl|none)$/.test(options.style)
        ? null
        : options.style;
    (0, assertion_1.assertValidStyle)(options.style);
    options.routing = (_a = options.routing) !== null && _a !== void 0 ? _a : false;
    options.strict = (_b = options.strict) !== null && _b !== void 0 ? _b : true;
    options.classComponent = (_c = options.classComponent) !== null && _c !== void 0 ? _c : false;
    options.unitTestRunner = (_d = options.unitTestRunner) !== null && _d !== void 0 ? _d : 'jest';
    options.e2eTestRunner = (_e = options.e2eTestRunner) !== null && _e !== void 0 ? _e : 'cypress';
    options.compiler = (_f = options.compiler) !== null && _f !== void 0 ? _f : 'babel';
    (_g = options.devServerPort) !== null && _g !== void 0 ? _g : (options.devServerPort = (0, find_free_port_1.findFreePort)(host));
    return Object.assign(Object.assign({}, options), { name: (0, devkit_1.names)(options.name).fileName, projectName: appProjectName, appProjectRoot,
        e2eProjectName,
        parsedTags,
        fileName,
        styledModule, hasStyles: options.style !== 'none' });
}
exports.normalizeOptions = normalizeOptions;
//# sourceMappingURL=normalize-options.js.map