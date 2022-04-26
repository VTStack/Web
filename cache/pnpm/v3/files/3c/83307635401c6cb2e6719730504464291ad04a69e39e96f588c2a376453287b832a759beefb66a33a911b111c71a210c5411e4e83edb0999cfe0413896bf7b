"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeExtraEntryPoints = exports.convertBuildOptions = exports.normalizeWebBuildOptions = exports.normalizeAssets = exports.normalizePluginPath = exports.normalizeBuildOptions = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const fs_1 = require("fs");
function normalizeBuildOptions(options, root, sourceRoot) {
    return Object.assign(Object.assign({}, options), { root,
        sourceRoot, main: (0, path_1.resolve)(root, options.main), outputPath: (0, path_1.resolve)(root, options.outputPath), tsConfig: (0, path_1.resolve)(root, options.tsConfig), fileReplacements: normalizeFileReplacements(root, options.fileReplacements), assets: normalizeAssets(options.assets, root, sourceRoot), webpackConfig: normalizePluginPath(options.webpackConfig, root) });
}
exports.normalizeBuildOptions = normalizeBuildOptions;
function normalizePluginPath(pluginPath, root) {
    if (!pluginPath) {
        return '';
    }
    try {
        return require.resolve(pluginPath);
    }
    catch (_a) {
        return (0, path_1.resolve)(root, pluginPath);
    }
}
exports.normalizePluginPath = normalizePluginPath;
function normalizeAssets(assets, root, sourceRoot) {
    return assets.map((asset) => {
        if (typeof asset === 'string') {
            const assetPath = (0, devkit_1.normalizePath)(asset);
            const resolvedAssetPath = (0, path_1.resolve)(root, assetPath);
            const resolvedSourceRoot = (0, path_1.resolve)(root, sourceRoot);
            if (!resolvedAssetPath.startsWith(resolvedSourceRoot)) {
                throw new Error(`The ${resolvedAssetPath} asset path must start with the project source root: ${sourceRoot}`);
            }
            const isDirectory = (0, fs_1.statSync)(resolvedAssetPath).isDirectory();
            const input = isDirectory
                ? resolvedAssetPath
                : (0, path_1.dirname)(resolvedAssetPath);
            const output = (0, path_1.relative)(resolvedSourceRoot, (0, path_1.resolve)(root, input));
            const glob = isDirectory ? '**/*' : (0, path_1.basename)(resolvedAssetPath);
            return {
                input,
                output,
                glob,
            };
        }
        else {
            if (asset.output.startsWith('..')) {
                throw new Error('An asset cannot be written to a location outside of the output path.');
            }
            const assetPath = (0, devkit_1.normalizePath)(asset.input);
            const resolvedAssetPath = (0, path_1.resolve)(root, assetPath);
            return Object.assign(Object.assign({}, asset), { input: resolvedAssetPath, 
                // Now we remove starting slash to make Webpack place it from the output root.
                output: asset.output.replace(/^\//, '') });
        }
    });
}
exports.normalizeAssets = normalizeAssets;
function normalizeFileReplacements(root, fileReplacements) {
    return fileReplacements.map((fileReplacement) => ({
        replace: (0, path_1.resolve)(root, fileReplacement.replace),
        with: (0, path_1.resolve)(root, fileReplacement.with),
    }));
}
function normalizeWebBuildOptions(options, root, sourceRoot) {
    return Object.assign(Object.assign({}, normalizeBuildOptions(options, root, sourceRoot)), { optimization: typeof options.optimization !== 'object'
            ? {
                scripts: options.optimization,
                styles: options.optimization,
            }
            : options.optimization, polyfills: options.polyfills ? (0, path_1.resolve)(root, options.polyfills) : undefined, es2015Polyfills: options.es2015Polyfills
            ? (0, path_1.resolve)(root, options.es2015Polyfills)
            : undefined });
}
exports.normalizeWebBuildOptions = normalizeWebBuildOptions;
function convertBuildOptions(buildOptions) {
    const options = buildOptions;
    return Object.assign(Object.assign({}, options), { buildOptimizer: options.optimization, forkTypeChecker: false, lazyModules: [] });
}
exports.convertBuildOptions = convertBuildOptions;
function normalizeExtraEntryPoints(extraEntryPoints, defaultBundleName) {
    return extraEntryPoints.map((entry) => {
        let normalizedEntry;
        if (typeof entry === 'string') {
            normalizedEntry = {
                input: entry,
                inject: true,
                bundleName: defaultBundleName,
            };
        }
        else {
            const { lazy, inject = true } = entry, newEntry = tslib_1.__rest(entry, ["lazy", "inject"]);
            const injectNormalized = entry.lazy !== undefined ? !entry.lazy : inject;
            let bundleName;
            if (entry.bundleName) {
                bundleName = entry.bundleName;
            }
            else if (!injectNormalized) {
                // Lazy entry points use the file name as bundle name.
                bundleName = (0, path_1.basename)((0, devkit_1.normalizePath)(entry.input.replace(/\.(js|css|scss|sass|less|styl)$/i, '')));
            }
            else {
                bundleName = defaultBundleName;
            }
            normalizedEntry = Object.assign(Object.assign({}, newEntry), { inject: injectNormalized, bundleName });
        }
        return normalizedEntry;
    });
}
exports.normalizeExtraEntryPoints = normalizeExtraEntryPoints;
//# sourceMappingURL=normalize.js.map