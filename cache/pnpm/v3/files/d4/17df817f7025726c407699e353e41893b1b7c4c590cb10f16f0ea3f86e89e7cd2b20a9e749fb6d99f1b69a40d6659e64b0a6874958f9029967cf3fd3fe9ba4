"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_1 = require("@nrwl/workspace");
const path_1 = require("path");
const schematics_1 = require("@angular-devkit/schematics");
exports.default = () => {
    return (0, schematics_1.chain)([
        (0, workspace_1.updatePackagesInPackageJson)((0, path_1.join)(__dirname, '../../../migrations.json'), '8.12.0'),
        (0, workspace_1.formatFiles)(),
    ]);
};
//# sourceMappingURL=update-8-12-0.js.map