"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const actions_1 = require("./actions");
const engine = require("./engine/engine");
function runExecutor(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const configuration = options.buildTarget ? `:${options.buildTarget}` : '';
        const buildTarget = {
            name: `${context.projectName}:build${configuration}`,
        };
        try {
            yield (0, actions_1.default)(engine, context, buildTarget, options);
        }
        catch (e) {
            devkit_1.logger.error(`Error when trying to deploy ${context.projectName}`);
            devkit_1.logger.error(e);
            return { success: false };
        }
        return {
            success: true,
        };
    });
}
exports.default = runExecutor;
//# sourceMappingURL=executor.js.map