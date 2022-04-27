"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const path = require("path");
function update() {
    return (0, schematics_1.chain)([
        (0, workspace_1.updatePackagesInPackageJson)(path.join(__dirname, '../../../', 'migrations.json'), '8.7.0'),
        (0, workspace_1.formatFiles)(),
    ]);
}
exports.default = update;
//# sourceMappingURL=update-8-7-0.js.map