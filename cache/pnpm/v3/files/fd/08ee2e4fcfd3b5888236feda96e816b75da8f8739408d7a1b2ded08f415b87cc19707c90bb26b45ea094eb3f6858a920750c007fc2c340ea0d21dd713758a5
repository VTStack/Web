"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const path_1 = require("path");
const updatePackages = (0, workspace_1.updatePackagesInPackageJson)((0, path_1.join)(__dirname, '../../../', 'migrations.json'), '9.0.0');
function default_1() {
    return (0, schematics_1.chain)([updatePackages, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
//# sourceMappingURL=update-9-0-0.js.map