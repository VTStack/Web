"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTsConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
function updateTsConfig(tree, options) {
    const project = (0, devkit_1.readProjectConfiguration)(tree, options.projectName);
    return (0, devkit_1.updateJson)(tree, `${project.root}/tsconfig.lib.json`, (json) => {
        json.compilerOptions.target = options.target;
        if (options.strict) {
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { forceConsistentCasingInFileNames: true, strict: true, noImplicitReturns: true, noFallthroughCasesInSwitch: true });
        }
        return json;
    });
}
exports.updateTsConfig = updateTsConfig;
//# sourceMappingURL=update-tsconfig.js.map