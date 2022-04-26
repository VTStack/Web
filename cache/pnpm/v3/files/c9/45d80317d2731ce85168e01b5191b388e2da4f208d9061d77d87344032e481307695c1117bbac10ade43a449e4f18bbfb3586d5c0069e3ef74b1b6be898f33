"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const utils_1 = require("./utils");
function deploy(engine, context, buildTarget, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const targetDescription = (0, devkit_1.parseTargetString)(buildTarget.name);
        if (options.noBuild) {
            devkit_1.logger.info(`📦 Skipping build`);
        }
        else {
            yield buildLibrary(context, buildTarget, targetDescription);
        }
        const buildOptions = (0, devkit_1.readTargetOptions)(targetDescription, context);
        const outputPath = yield (0, utils_1.getLibOutPutPath)(context.root, buildOptions, targetDescription.project);
        yield engine.run(outputPath, options);
    });
}
exports.default = deploy;
function buildLibrary(context, buildTarget, targetDescription) {
    var e_1, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!context.target) {
            throw new Error('Cannot execute the build target');
        }
        devkit_1.logger.info(`📦 Building "${context.projectName}"`);
        devkit_1.logger.info(`📦 Build target "${buildTarget.name}"`);
        const buildResult = yield (0, devkit_1.runExecutor)(targetDescription, {}, context);
        try {
            for (var buildResult_1 = tslib_1.__asyncValues(buildResult), buildResult_1_1; buildResult_1_1 = yield buildResult_1.next(), !buildResult_1_1.done;) {
                const output = buildResult_1_1.value;
                if (!output.success) {
                    throw new Error('Could not build the library');
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (buildResult_1_1 && !buildResult_1_1.done && (_a = buildResult_1.return)) yield _a.call(buildResult_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
//# sourceMappingURL=actions.js.map