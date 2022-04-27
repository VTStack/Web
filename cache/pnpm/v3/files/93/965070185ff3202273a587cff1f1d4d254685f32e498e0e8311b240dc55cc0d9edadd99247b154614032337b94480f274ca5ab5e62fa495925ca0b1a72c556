"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySchematic = exports.libraryGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const js_1 = require("@nrwl/js");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const lib_1 = require("../init/lib");
const lib_2 = require("./lib");
function libraryGenerator(tree, rawOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = (0, lib_2.normalizeOptions)(tree, rawOptions);
        const jsLibraryTask = yield (0, js_1.libraryGenerator)(tree, (0, lib_2.toJsLibraryGeneratorOptions)(options));
        const installDepsTask = (0, lib_1.addDependencies)(tree);
        (0, lib_2.deleteFiles)(tree, options);
        (0, lib_2.createFiles)(tree, options);
        (0, lib_2.addExportsToBarrelFile)(tree, options);
        (0, lib_2.updateTsConfig)(tree, options);
        (0, lib_2.addProject)(tree, options);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(jsLibraryTask, installDepsTask);
    });
}
exports.libraryGenerator = libraryGenerator;
exports.default = libraryGenerator;
exports.librarySchematic = (0, devkit_1.convertNxGenerator)(libraryGenerator);
//# sourceMappingURL=library.js.map