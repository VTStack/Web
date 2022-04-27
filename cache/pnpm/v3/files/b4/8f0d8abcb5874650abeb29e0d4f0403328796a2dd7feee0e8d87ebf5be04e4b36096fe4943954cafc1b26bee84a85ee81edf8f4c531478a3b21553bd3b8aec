"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSchematic = exports.initGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const node_1 = require("@nrwl/node");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const set_default_collection_1 = require("@nrwl/workspace/src/utilities/set-default-collection");
const lib_1 = require("./lib");
function initGenerator(tree, rawOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = (0, lib_1.normalizeOptions)(rawOptions);
        (0, set_default_collection_1.setDefaultCollection)(tree, '@nrwl/nest');
        const nodeInitTask = yield (0, node_1.initGenerator)(tree, options);
        const installPackagesTask = (0, lib_1.addDependencies)(tree);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(nodeInitTask, installPackagesTask);
    });
}
exports.initGenerator = initGenerator;
exports.default = initGenerator;
exports.initSchematic = (0, devkit_1.convertNxGenerator)(initGenerator);
//# sourceMappingURL=init.js.map