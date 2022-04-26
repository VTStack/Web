"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeIndexHtml = exports.augmentIndexHtml = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const fs_1 = require("fs");
const interpolate_env_variables_to_index_1 = require("../interpolate-env-variables-to-index");
const package_chunk_sort_1 = require("./package-chunk-sort");
const crypto_1 = require("crypto");
const webpack_sources_1 = require("webpack-sources");
function stripBom(data) {
    return data.replace(/^\uFEFF/, '');
}
const parse5 = require('parse5');
/*
 * Helper function used by the IndexHtmlWebpackPlugin.
 * Can also be directly used by builder, e. g. in order to generate an index.html
 * after processing several configurations in order to build different sets of
 * bundles for differential serving.
 */
function augmentIndexHtml(params) {
    const { loadOutputFile, files, noModuleFiles = [], moduleFiles = [], entrypoints, } = params;
    let { crossOrigin = 'none' } = params;
    if (params.sri && crossOrigin === 'none') {
        crossOrigin = 'anonymous';
    }
    const stylesheets = new Set();
    const scripts = new Set();
    // Sort files in the order we want to insert them by entrypoint and dedupes duplicates
    const mergedFiles = [...moduleFiles, ...noModuleFiles, ...files];
    for (const entrypoint of entrypoints) {
        for (const { extension, file, name } of mergedFiles) {
            if (name !== entrypoint) {
                continue;
            }
            switch (extension) {
                case '.js':
                    scripts.add(file);
                    break;
                case '.css':
                    stylesheets.add(file);
                    break;
            }
        }
    }
    // Find the head and body elements
    const treeAdapter = parse5.treeAdapters.default;
    const document = parse5.parse(params.inputContent, {
        treeAdapter,
        locationInfo: true,
    });
    let headElement;
    let bodyElement;
    for (const docChild of document.childNodes) {
        if (docChild.tagName === 'html') {
            for (const htmlChild of docChild.childNodes) {
                if (htmlChild.tagName === 'head') {
                    headElement = htmlChild;
                }
                else if (htmlChild.tagName === 'body') {
                    bodyElement = htmlChild;
                }
            }
        }
    }
    if (!headElement || !bodyElement) {
        throw new Error('Missing head and/or body elements');
    }
    // Determine script insertion point
    let scriptInsertionPoint;
    if (bodyElement.__location && bodyElement.__location.endTag) {
        scriptInsertionPoint = bodyElement.__location.endTag.startOffset;
    }
    else {
        // Less accurate fallback
        // parse5 4.x does not provide locations if malformed html is present
        scriptInsertionPoint = params.inputContent.indexOf('</body>');
    }
    let styleInsertionPoint;
    if (headElement.__location && headElement.__location.endTag) {
        styleInsertionPoint = headElement.__location.endTag.startOffset;
    }
    else {
        // Less accurate fallback
        // parse5 4.x does not provide locations if malformed html is present
        styleInsertionPoint = params.inputContent.indexOf('</head>');
    }
    // Inject into the html
    const indexSource = new webpack_sources_1.ReplaceSource(new webpack_sources_1.RawSource(params.inputContent), params.input);
    let scriptElements = '';
    for (const script of scripts) {
        const attrs = [
            { name: 'src', value: (params.deployUrl || '') + script },
        ];
        if (crossOrigin !== 'none') {
            attrs.push({ name: 'crossorigin', value: crossOrigin });
        }
        // We want to include nomodule or module when a file is not common amongs all
        // such as runtime.js
        const scriptPredictor = ({ file }) => file === script;
        if (!files.some(scriptPredictor)) {
            // in some cases for differential loading file with the same name is avialable in both
            // nomodule and module such as scripts.js
            // we shall not add these attributes if that's the case
            const isNoModuleType = noModuleFiles.some(scriptPredictor);
            const isModuleType = moduleFiles.some(scriptPredictor);
            if (isNoModuleType && !isModuleType) {
                attrs.push({ name: 'nomodule', value: null });
                if (!script.startsWith('polyfills-nomodule-es5')) {
                    attrs.push({ name: 'defer', value: null });
                }
            }
            else if (isModuleType) {
                attrs.push({ name: 'type', value: 'module' });
            }
            else {
                attrs.push({ name: 'defer', value: null });
            }
        }
        else {
            attrs.push({ name: 'type', value: 'module' });
        }
        if (params.sri) {
            const content = loadOutputFile(script);
            attrs.push(..._generateSriAttributes(content));
        }
        const attributes = attrs
            .map((attr) => attr.value === null ? attr.name : `${attr.name}="${attr.value}"`)
            .join(' ');
        scriptElements += `<script ${attributes}></script>`;
    }
    indexSource.insert(scriptInsertionPoint, scriptElements);
    // Adjust base href if specified
    if (typeof params.baseHref == 'string') {
        let baseElement;
        for (const headChild of headElement.childNodes) {
            if (headChild.tagName === 'base') {
                baseElement = headChild;
            }
        }
        const baseFragment = treeAdapter.createDocumentFragment();
        if (!baseElement) {
            baseElement = treeAdapter.createElement('base', undefined, [
                { name: 'href', value: params.baseHref },
            ]);
            treeAdapter.appendChild(baseFragment, baseElement);
            indexSource.insert(headElement.__location.startTag.endOffset, parse5.serialize(baseFragment, { treeAdapter }));
        }
        else {
            let hrefAttribute;
            for (const attribute of baseElement.attrs) {
                if (attribute.name === 'href') {
                    hrefAttribute = attribute;
                }
            }
            if (hrefAttribute) {
                hrefAttribute.value = params.baseHref;
            }
            else {
                baseElement.attrs.push({ name: 'href', value: params.baseHref });
            }
            treeAdapter.appendChild(baseFragment, baseElement);
            indexSource.replace(baseElement.__location.startOffset, baseElement.__location.endOffset, parse5.serialize(baseFragment, { treeAdapter }));
        }
    }
    const styleElements = treeAdapter.createDocumentFragment();
    for (const stylesheet of stylesheets) {
        const attrs = [
            { name: 'rel', value: 'stylesheet' },
            { name: 'href', value: (params.deployUrl || '') + stylesheet },
        ];
        if (crossOrigin !== 'none') {
            attrs.push({ name: 'crossorigin', value: crossOrigin });
        }
        if (params.sri) {
            const content = loadOutputFile(stylesheet);
            attrs.push(..._generateSriAttributes(content));
        }
        const element = treeAdapter.createElement('link', undefined, attrs);
        treeAdapter.appendChild(styleElements, element);
    }
    indexSource.insert(styleInsertionPoint, parse5.serialize(styleElements, { treeAdapter }));
    return indexSource.source();
}
exports.augmentIndexHtml = augmentIndexHtml;
function _generateSriAttributes(content) {
    const algo = 'sha384';
    const hash = (0, crypto_1.createHash)(algo).update(content, 'utf8').digest('base64');
    return [{ name: 'integrity', value: `${algo}-${hash}` }];
}
function writeIndexHtml({ outputPath, indexPath, files = [], noModuleFiles = [], moduleFiles = [], baseHref, deployUrl, sri = false, scripts = [], styles = [], postTransform, crossOrigin, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let content = (0, fs_1.readFileSync)(indexPath).toString();
        content = stripBom(content);
        content = augmentIndexHtml({
            input: outputPath,
            inputContent: (0, interpolate_env_variables_to_index_1.interpolateEnvironmentVariablesToIndex)(content, deployUrl),
            baseHref,
            deployUrl,
            crossOrigin,
            sri,
            entrypoints: (0, package_chunk_sort_1.generateEntryPoints)({ scripts, styles }),
            files: filterAndMapBuildFiles(files, ['.js', '.css']),
            noModuleFiles: filterAndMapBuildFiles(noModuleFiles, '.js'),
            moduleFiles: filterAndMapBuildFiles(moduleFiles, '.js'),
            loadOutputFile: (filePath) => (0, fs_1.readFileSync)((0, path_1.join)((0, path_1.dirname)(outputPath), filePath)).toString(),
        });
        if (postTransform) {
            content = yield postTransform(content);
        }
        (0, fs_1.writeFileSync)(outputPath, content);
    });
}
exports.writeIndexHtml = writeIndexHtml;
function filterAndMapBuildFiles(files, extensionFilter) {
    const filteredFiles = [];
    const validExtensions = Array.isArray(extensionFilter)
        ? extensionFilter
        : [extensionFilter];
    for (const { file, name, extension, initial } of files) {
        if (name && initial && validExtensions.includes(extension)) {
            filteredFiles.push({ file, extension, name });
        }
    }
    return filteredFiles;
}
//# sourceMappingURL=write-index-html.js.map