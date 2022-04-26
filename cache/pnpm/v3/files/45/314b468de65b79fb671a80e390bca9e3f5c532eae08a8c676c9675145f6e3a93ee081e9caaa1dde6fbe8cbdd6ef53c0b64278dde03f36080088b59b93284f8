"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexHtmlWebpackPlugin = void 0;
const tslib_1 = require("tslib");
const webpack = require("webpack");
const path_1 = require("path");
const index_html_generator_1 = require("./index-file/index-html-generator");
const PLUGIN_NAME = 'index-html-webpack-plugin';
class IndexHtmlWebpackPlugin extends index_html_generator_1.IndexHtmlGenerator {
    constructor(options) {
        super(options);
        this.options = options;
    }
    get compilation() {
        if (this._compilation) {
            return this._compilation;
        }
        throw new Error('compilation is undefined.');
    }
    apply(compiler) {
        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
            this._compilation = compilation;
            compilation.hooks.processAssets.tapPromise({
                name: PLUGIN_NAME,
                stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE + 1,
            }, callback);
        });
        function addWarning(compilation, message) {
            compilation.warnings.push(new this.webpack.WebpackError(message));
        }
        function addError(compilation, message) {
            compilation.errors.push(new this.webpack.WebpackError(message));
        }
        const callback = (assets) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            // Get all files for selected entrypoints
            const files = [];
            const noModuleFiles = [];
            const moduleFiles = [];
            try {
                for (const [entryName, entrypoint] of this.compilation.entrypoints) {
                    const entryFiles = (_b = (_a = entrypoint === null || entrypoint === void 0 ? void 0 : entrypoint.getFiles()) === null || _a === void 0 ? void 0 : _a.filter((f) => !f.endsWith('.hot-update.js'))) === null || _b === void 0 ? void 0 : _b.map((f) => ({
                        name: entryName,
                        file: f,
                        extension: (0, path_1.extname)(f),
                    }));
                    if (!entryFiles) {
                        continue;
                    }
                    if (this.options.noModuleEntrypoints.includes(entryName)) {
                        noModuleFiles.push(...entryFiles);
                    }
                    else if (this.options.moduleEntrypoints.includes(entryName)) {
                        moduleFiles.push(...entryFiles);
                    }
                    else {
                        files.push(...entryFiles);
                    }
                }
                const { content, warnings, errors } = yield this.process({
                    files,
                    noModuleFiles,
                    moduleFiles,
                    outputPath: (0, path_1.dirname)(this.options.outputPath),
                    baseHref: this.options.baseHref,
                    lang: this.options.lang,
                });
                assets[this.options.outputPath] = new webpack.sources.RawSource(content);
                warnings.forEach((msg) => addWarning(this.compilation, msg));
                errors.forEach((msg) => addError(this.compilation, msg));
            }
            catch (error) {
                addError(this.compilation, error.message);
            }
        });
    }
    readAsset(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = this.compilation.assets[(0, path_1.basename)(path)].source();
            return typeof data === 'string' ? data : data.toString();
        });
    }
    readIndex(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.compilation.inputFileSystem.readFile(path, (err, data) => {
                    var _a;
                    if (err) {
                        reject(err);
                        return;
                    }
                    this.compilation.fileDependencies.add(path);
                    resolve((_a = data === null || data === void 0 ? void 0 : data.toString()) !== null && _a !== void 0 ? _a : '');
                });
            });
        });
    }
}
exports.IndexHtmlWebpackPlugin = IndexHtmlWebpackPlugin;
//# sourceMappingURL=index-html-webpack-plugin.js.map