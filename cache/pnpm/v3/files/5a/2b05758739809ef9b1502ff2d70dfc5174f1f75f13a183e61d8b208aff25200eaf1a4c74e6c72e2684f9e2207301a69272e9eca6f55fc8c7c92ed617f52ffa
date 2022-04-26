"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirectory = exports.deleteOutputDir = exports.findAllNodeModules = exports.findUp = void 0;
const path = require("path");
const fs_extra_1 = require("fs-extra");
function findUp(names, from, stopOnNodeModules = false) {
    if (!Array.isArray(names)) {
        names = [names];
    }
    const root = path.parse(from).root;
    let currentDir = from;
    while (currentDir && currentDir !== root) {
        for (const name of names) {
            const p = path.join(currentDir, name);
            if ((0, fs_extra_1.existsSync)(p)) {
                return p;
            }
        }
        if (stopOnNodeModules) {
            const nodeModuleP = path.join(currentDir, 'node_modules');
            if ((0, fs_extra_1.existsSync)(nodeModuleP)) {
                return null;
            }
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
}
exports.findUp = findUp;
function findAllNodeModules(from, root) {
    const nodeModules = [];
    let current = from;
    while (current && current !== root) {
        const potential = path.join(current, 'node_modules');
        if ((0, fs_extra_1.existsSync)(potential) && isDirectory(potential)) {
            nodeModules.push(potential);
        }
        const next = path.dirname(current);
        if (next === current) {
            break;
        }
        current = next;
    }
    return nodeModules;
}
exports.findAllNodeModules = findAllNodeModules;
/**
 * Delete an output directory, but error out if it's the root of the project.
 */
function deleteOutputDir(root, outputPath) {
    const resolvedOutputPath = path.resolve(root, outputPath);
    if (resolvedOutputPath === root) {
        throw new Error('Output path MUST not be project root directory!');
    }
    (0, fs_extra_1.removeSync)(resolvedOutputPath);
}
exports.deleteOutputDir = deleteOutputDir;
function isDirectory(path) {
    try {
        return (0, fs_extra_1.statSync)(path).isDirectory();
    }
    catch (_) {
        return false;
    }
}
exports.isDirectory = isDirectory;
//# sourceMappingURL=fs.js.map