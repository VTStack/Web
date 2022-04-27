"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTsConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
function updateTsConfig(tree, options) {
    (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'), (json) => {
        json.compilerOptions.emitDecoratorMetadata = true;
        json.compilerOptions.target = 'es2015';
        return json;
    });
}
exports.updateTsConfig = updateTsConfig;
//# sourceMappingURL=update-tsconfig.js.map