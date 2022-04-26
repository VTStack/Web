"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplicationFiles = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
function updateTsConfig(host, options) {
    (0, devkit_1.updateJson)(host, (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.json'), (json) => {
        if (options.strict) {
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { forceConsistentCasingInFileNames: true, strict: true, noImplicitOverride: true, noPropertyAccessFromIndexSignature: true, noImplicitReturns: true, noFallthroughCasesInSwitch: true });
        }
        return json;
    });
}
function createApplicationFiles(host, options) {
    let styleSolutionSpecificAppFiles;
    if (options.styledModule && options.style !== 'styled-jsx') {
        styleSolutionSpecificAppFiles = '../files/styled-module';
    }
    else if (options.style === 'styled-jsx') {
        styleSolutionSpecificAppFiles = '../files/styled-jsx';
    }
    else if (options.style === 'none') {
        styleSolutionSpecificAppFiles = '../files/none';
    }
    else if (options.globalCss) {
        styleSolutionSpecificAppFiles = '../files/global-css';
    }
    else {
        styleSolutionSpecificAppFiles = '../files/css-module';
    }
    const templateVariables = Object.assign(Object.assign(Object.assign({}, (0, devkit_1.names)(options.name)), options), { tmpl: '', offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.appProjectRoot), rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(host, options.appProjectRoot) });
    (0, devkit_1.generateFiles)(host, (0, path_1.join)(__dirname, '../files/common'), options.appProjectRoot, templateVariables);
    if (options.unitTestRunner === 'none') {
        host.delete(`${options.appProjectRoot}/src/app/${options.fileName}.spec.tsx`);
    }
    (0, devkit_1.generateFiles)(host, (0, path_1.join)(__dirname, styleSolutionSpecificAppFiles), options.appProjectRoot, templateVariables);
    if (options.js) {
        (0, devkit_1.toJS)(host);
    }
    updateTsConfig(host, options);
}
exports.createApplicationFiles = createApplicationFiles;
//# sourceMappingURL=create-application-files.js.map