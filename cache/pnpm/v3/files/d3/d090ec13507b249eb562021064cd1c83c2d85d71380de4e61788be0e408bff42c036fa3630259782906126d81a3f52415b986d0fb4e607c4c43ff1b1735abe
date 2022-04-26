"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactInitSchematic = exports.reactInitGenerator = void 0;
const tslib_1 = require("tslib");
const cypress_1 = require("@nrwl/cypress");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const web_1 = require("@nrwl/web");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const set_default_collection_1 = require("@nrwl/workspace/src/utilities/set-default-collection");
const versions_1 = require("../../utils/versions");
function setDefault(host) {
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(host);
    workspace.generators = workspace.generators || {};
    const reactGenerators = workspace.generators['@nrwl/react'] || {};
    const generators = Object.assign(Object.assign({}, workspace.generators), { '@nrwl/react': Object.assign(Object.assign({}, reactGenerators), { application: Object.assign(Object.assign({}, reactGenerators.application), { babel: true }) }) });
    (0, devkit_1.updateWorkspaceConfiguration)(host, Object.assign(Object.assign({}, workspace), { generators }));
    (0, set_default_collection_1.setDefaultCollection)(host, '@nrwl/react');
}
function updateDependencies(host) {
    (0, devkit_1.removeDependenciesFromPackageJson)(host, ['@nrwl/react'], []);
    return (0, devkit_1.addDependenciesToPackageJson)(host, {
        'core-js': '^3.6.5',
        react: versions_1.reactVersion,
        'react-dom': versions_1.reactDomVersion,
        'regenerator-runtime': '0.13.7',
        tslib: '^2.0.0',
    }, {
        '@nrwl/react': versions_1.nxVersion,
        '@types/node': versions_1.typesNodeVersion,
        '@types/react': versions_1.typesReactVersion,
        '@types/react-dom': versions_1.typesReactDomVersion,
        '@testing-library/react': versions_1.testingLibraryReactVersion,
        'react-test-renderer': versions_1.reactTestRendererVersion,
    });
}
function reactInitGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tasks = [];
        setDefault(host);
        if (!schema.unitTestRunner || schema.unitTestRunner === 'jest') {
            const jestTask = (0, jest_1.jestInitGenerator)(host, schema);
            tasks.push(jestTask);
        }
        if (!schema.e2eTestRunner || schema.e2eTestRunner === 'cypress') {
            const cypressTask = (0, cypress_1.cypressInitGenerator)(host, {});
            tasks.push(cypressTask);
        }
        const initTask = yield (0, web_1.webInitGenerator)(host, schema);
        tasks.push(initTask);
        const installTask = updateDependencies(host);
        tasks.push(installTask);
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.reactInitGenerator = reactInitGenerator;
exports.default = reactInitGenerator;
exports.reactInitSchematic = (0, devkit_1.convertNxGenerator)(reactInitGenerator);
//# sourceMappingURL=init.js.map