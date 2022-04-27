"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExportsToBarrelFile = void 0;
const ast_utils_1 = require("@nrwl/workspace/src/utilities/ast-utils");
const ts = require("typescript");
function addExportsToBarrelFile(tree, options) {
    const indexPath = `${options.projectRoot}/src/index.ts`;
    const indexContent = tree.read(indexPath, 'utf-8');
    let sourceFile = ts.createSourceFile(indexPath, indexContent, ts.ScriptTarget.Latest, true);
    sourceFile = (0, ast_utils_1.removeChange)(tree, sourceFile, indexPath, 0, `export * from './lib/${options.fileName}';`);
    sourceFile = (0, ast_utils_1.addGlobal)(tree, sourceFile, indexPath, `export * from './lib/${options.fileName}.module';`);
    if (options.service) {
        sourceFile = (0, ast_utils_1.addGlobal)(tree, sourceFile, indexPath, `export * from './lib/${options.fileName}.service';`);
    }
    if (options.controller) {
        sourceFile = (0, ast_utils_1.addGlobal)(tree, sourceFile, indexPath, `export * from './lib/${options.fileName}.controller';`);
    }
}
exports.addExportsToBarrelFile = addExportsToBarrelFile;
//# sourceMappingURL=add-exports-to-barrel.js.map