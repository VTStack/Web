"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharePackages = exports.shareWorkspaceLibraries = void 0;
const fs_1 = require("fs");
const webpack_1 = require("webpack");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
function shareWorkspaceLibraries(libraries, tsConfigPath) {
    var _a, _b;
    if (tsConfigPath === void 0) { tsConfigPath = (_a = process.env.NX_TSCONFIG_PATH) !== null && _a !== void 0 ? _a : (0, typescript_1.getRootTsConfigPath)(); }
    if (!(0, fs_1.existsSync)(tsConfigPath)) {
        throw new Error(`NX: TsConfig Path for workspace libraries does not exist! (${tsConfigPath})`);
    }
    const tsConfig = (0, typescript_1.readTsConfig)(tsConfigPath);
    const tsconfigPathAliases = (_b = tsConfig.options) === null || _b === void 0 ? void 0 : _b.paths;
    if (!tsconfigPathAliases) {
        return {
            getAliases: () => [],
            getLibraries: () => { },
            getReplacementPlugin: () => new webpack_1.NormalModuleReplacementPlugin(/./, () => { }),
        };
    }
    const pathMappings = [];
    for (const [key, paths] of Object.entries(tsconfigPathAliases)) {
        if (libraries && libraries.includes(key)) {
            const pathToLib = (0, path_1.normalize)((0, path_1.join)(devkit_1.workspaceRoot, paths[0]));
            pathMappings.push({
                name: key,
                path: pathToLib,
            });
        }
    }
    return {
        getAliases: () => pathMappings.reduce((aliases, library) => (Object.assign(Object.assign({}, aliases), { [library.name]: library.path })), {}),
        getLibraries: (eager) => pathMappings.reduce((libraries, library) => (Object.assign(Object.assign({}, libraries), { [library.name]: { requiredVersion: false, eager } })), {}),
        getReplacementPlugin: () => new webpack_1.NormalModuleReplacementPlugin(/./, (req) => {
            if (!req.request.startsWith('.')) {
                return;
            }
            const from = req.context;
            const to = (0, path_1.normalize)((0, path_1.join)(req.context, req.request));
            for (const library of pathMappings) {
                const libFolder = (0, path_1.normalize)((0, path_1.dirname)(library.path));
                if (!from.startsWith(libFolder) && to.startsWith(libFolder)) {
                    req.request = library.name;
                }
            }
        }),
    };
}
exports.shareWorkspaceLibraries = shareWorkspaceLibraries;
function sharePackages(packages) {
    const pkgJsonPath = (0, devkit_1.joinPathFragments)(devkit_1.workspaceRoot, 'package.json');
    if (!(0, fs_1.existsSync)(pkgJsonPath)) {
        throw new Error('NX: Could not find root package.json to determine dependency versions.');
    }
    const pkgJson = JSON.parse((0, fs_1.readFileSync)(pkgJsonPath, 'utf-8'));
    return packages.reduce((shared, pkgName) => (Object.assign(Object.assign({}, shared), { [pkgName]: {
            singleton: true,
            strictVersion: true,
            requiredVersion: pkgJson.dependencies[pkgName],
        } })), {});
}
exports.sharePackages = sharePackages;
//# sourceMappingURL=webpack-utils.js.map