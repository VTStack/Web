"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTypes = void 0;
const tslib_1 = require("tslib");
const js_1 = require("@nrwl/js");
const path_1 = require("path");
function validateTypes(opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const result = yield (0, js_1.runTypeCheck)({
            workspaceRoot: opts.workspaceRoot,
            tsConfigPath: (0, path_1.join)(opts.workspaceRoot, opts.tsconfig),
            mode: 'noEmit',
        });
        yield (0, js_1.printDiagnostics)(result.errors, result.warnings);
        if (result.errors.length > 0) {
            throw new Error('Found type errors. See above.');
        }
    });
}
exports.validateTypes = validateTypes;
//# sourceMappingURL=validate-types.js.map