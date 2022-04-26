"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webInitSchematic = exports.webInitGenerator = void 0;
const tslib_1 = require("tslib");
const cypress_1 = require("@nrwl/cypress");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const set_default_collection_1 = require("@nrwl/workspace/src/utilities/set-default-collection");
const versions_1 = require("../../utils/versions");
function updateDependencies(tree) {
    (0, devkit_1.removeDependenciesFromPackageJson)(tree, ['@nrwl/web'], []);
    return (0, devkit_1.addDependenciesToPackageJson)(tree, {
        'core-js': '^3.6.5',
        'regenerator-runtime': '0.13.7',
        tslib: '^2.0.0',
    }, {
        '@nrwl/web': versions_1.nxVersion,
        '@types/node': versions_1.typesNodeVersion,
    });
}
function initRootBabelConfig(tree) {
    if (tree.exists('/babel.config.json') || tree.exists('/babel.config.js')) {
        return;
    }
    (0, devkit_1.writeJson)(tree, '/babel.config.json', {
        babelrcRoots: ['*'], // Make sure .babelrc files other than root can be loaded in a monorepo
    });
}
function webInitGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let tasks = [];
        (0, set_default_collection_1.setDefaultCollection)(tree, '@nrwl/web');
        if (!schema.unitTestRunner || schema.unitTestRunner === 'jest') {
            const jestTask = (0, jest_1.jestInitGenerator)(tree, {});
            tasks.push(jestTask);
        }
        if (!schema.e2eTestRunner || schema.e2eTestRunner === 'cypress') {
            const cypressTask = (0, cypress_1.cypressInitGenerator)(tree, {});
            tasks.push(cypressTask);
        }
        const installTask = updateDependencies(tree);
        tasks.push(installTask);
        initRootBabelConfig(tree);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.webInitGenerator = webInitGenerator;
exports.default = webInitGenerator;
exports.webInitSchematic = (0, devkit_1.convertNxGenerator)(webInitGenerator);
//# sourceMappingURL=init.js.map