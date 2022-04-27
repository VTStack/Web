"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runNestSchematic = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const ngcli_adapter_1 = require("@nrwl/devkit/ngcli-adapter");
function runNestSchematic(tree, schematic, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { skipFormat } = options, schematicOptions = tslib_1.__rest(options, ["skipFormat"]);
        const nestSchematic = (0, ngcli_adapter_1.wrapAngularDevkitSchematic)('@nestjs/schematics', schematic);
        const result = yield nestSchematic(tree, schematicOptions);
        if (!skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return result;
    });
}
exports.runNestSchematic = runNestSchematic;
//# sourceMappingURL=run-nest-schematic.js.map