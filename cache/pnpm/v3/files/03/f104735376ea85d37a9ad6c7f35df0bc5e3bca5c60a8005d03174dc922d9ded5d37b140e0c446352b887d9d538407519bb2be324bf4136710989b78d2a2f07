"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeWebRollupOptions = void 0;
const path_1 = require("path");
const normalize_1 = require("../../../utils/normalize");
function normalizeWebRollupOptions(options, root, sourceRoot) {
    const entryFile = `${root}/${options.entryFile}`;
    const entryRoot = (0, path_1.dirname)(entryFile);
    const project = `${root}/${options.project}`;
    const projectRoot = (0, path_1.dirname)(project);
    const outputPath = `${root}/${options.outputPath}`;
    if (options.buildableProjectDepsInPackageJsonType == undefined) {
        options.buildableProjectDepsInPackageJsonType = 'peerDependencies';
    }
    return Object.assign(Object.assign({}, options), { 
        // de-dupe formats
        format: Array.from(new Set(options.format)), rollupConfig: []
            .concat(options.rollupConfig)
            .filter(Boolean)
            .map((p) => (0, normalize_1.normalizePluginPath)(p, root)), assets: options.assets
            ? (0, normalize_1.normalizeAssets)(options.assets, root, sourceRoot)
            : undefined, entryFile,
        entryRoot,
        project,
        projectRoot,
        outputPath });
}
exports.normalizeWebRollupOptions = normalizeWebRollupOptions;
//# sourceMappingURL=normalize.js.map