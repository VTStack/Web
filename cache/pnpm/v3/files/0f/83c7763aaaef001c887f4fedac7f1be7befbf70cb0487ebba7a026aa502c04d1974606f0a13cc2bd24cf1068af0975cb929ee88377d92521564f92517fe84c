"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSchematic = exports.initGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const utils_1 = require("./utils");
function initGenerator(tree, rawOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const options = (0, utils_1.normalizeOptions)(rawOptions);
        const installPackagesTask = (0, utils_1.addDependencies)(tree);
        return (0, run_tasks_in_serial_1.runTasksInSerial)(installPackagesTask);
    });
}
exports.initGenerator = initGenerator;
exports.default = initGenerator;
exports.initSchematic = (0, devkit_1.convertNxGenerator)(initGenerator);
//# sourceMappingURL=generator.js.map