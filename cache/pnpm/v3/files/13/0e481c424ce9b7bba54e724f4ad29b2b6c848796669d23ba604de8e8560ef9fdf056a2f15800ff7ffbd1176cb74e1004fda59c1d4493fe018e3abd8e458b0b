"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexHtmlGenerator = void 0;
const tslib_1 = require("tslib");
const fs = require("fs");
const path_1 = require("path");
const interpolate_env_variables_to_index_1 = require("../../../interpolate-env-variables-to-index");
const augment_index_html_1 = require("./augment-index-html");
function stripBom(data) {
    return data.replace(/^\uFEFF/, '');
}
class IndexHtmlGenerator {
    constructor(options) {
        this.options = options;
        const extraPlugins = [];
        this.plugins = [
            augmentIndexHtmlPlugin(this),
            ...extraPlugins,
            postTransformPlugin(this),
        ];
    }
    process(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let content = stripBom(yield this.readIndex(this.options.indexPath));
            content = (0, interpolate_env_variables_to_index_1.interpolateEnvironmentVariablesToIndex)(content, this.options.deployUrl);
            const warnings = [];
            const errors = [];
            for (const plugin of this.plugins) {
                const result = yield plugin(content, options);
                if (typeof result === 'string') {
                    content = result;
                }
                else {
                    content = result.content;
                    if (result.warnings.length) {
                        warnings.push(...result.warnings);
                    }
                    if (result.errors.length) {
                        errors.push(...result.errors);
                    }
                }
            }
            return {
                content,
                warnings,
                errors,
            };
        });
    }
    readAsset(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return fs.promises.readFile(path, 'utf-8');
        });
    }
    readIndex(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return fs.promises.readFile(path, 'utf-8');
        });
    }
}
exports.IndexHtmlGenerator = IndexHtmlGenerator;
function augmentIndexHtmlPlugin(generator) {
    const { deployUrl, crossOrigin, sri = false, entrypoints, } = generator.options;
    return (html, options) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { lang, baseHref, outputPath = '', noModuleFiles, files, moduleFiles, } = options;
        return (0, augment_index_html_1.augmentIndexHtml)({
            html,
            baseHref,
            deployUrl,
            crossOrigin,
            sri,
            lang,
            entrypoints,
            loadOutputFile: (filePath) => generator.readAsset((0, path_1.join)(outputPath, filePath)),
            noModuleFiles,
            moduleFiles,
            files,
        });
    });
}
function postTransformPlugin({ options, }) {
    return (html) => tslib_1.__awaiter(this, void 0, void 0, function* () { return options.postTransform ? options.postTransform(html) : html; });
}
//# sourceMappingURL=index-html-generator.js.map