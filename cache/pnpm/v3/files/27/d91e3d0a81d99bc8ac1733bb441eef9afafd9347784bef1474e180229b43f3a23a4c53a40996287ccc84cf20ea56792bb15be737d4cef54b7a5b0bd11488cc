"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationSchematic = exports.applicationGenerator = void 0;
const tslib_1 = require("tslib");
const lint_1 = require("../../utils/lint");
const create_application_files_1 = require("./lib/create-application-files");
const update_jest_config_1 = require("./lib/update-jest-config");
const normalize_options_1 = require("./lib/normalize-options");
const add_project_1 = require("./lib/add-project");
const add_cypress_1 = require("./lib/add-cypress");
const add_jest_1 = require("./lib/add-jest");
const add_routing_1 = require("./lib/add-routing");
const set_defaults_1 = require("./lib/set-defaults");
const add_styled_dependencies_1 = require("../../rules/add-styled-dependencies");
const devkit_1 = require("@nrwl/devkit");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const init_1 = require("../init/init");
const linter_1 = require("@nrwl/linter");
const versions_1 = require("@nrwl/js/src/utils/versions");
const versions_2 = require("@nrwl/web/src/utils/versions");
function addLinting(host, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tasks = [];
        const lintTask = yield (0, linter_1.lintProjectGenerator)(host, {
            linter: options.linter,
            project: options.projectName,
            tsConfigPaths: [
                (0, devkit_1.joinPathFragments)(options.appProjectRoot, 'tsconfig.app.json'),
            ],
            eslintFilePatterns: [`${options.appProjectRoot}/**/*.{ts,tsx,js,jsx}`],
            skipFormat: true,
        });
        tasks.push(lintTask);
        const reactEslintJson = (0, lint_1.createReactEslintJson)(options.appProjectRoot, options.setParserOptionsProject);
        (0, devkit_1.updateJson)(host, (0, devkit_1.joinPathFragments)(options.appProjectRoot, '.eslintrc.json'), () => reactEslintJson);
        const installTask = yield (0, devkit_1.addDependenciesToPackageJson)(host, lint_1.extraEslintDependencies.dependencies, Object.assign(Object.assign({}, lint_1.extraEslintDependencies.devDependencies), (options.compiler === 'swc'
            ? { '@swc/core': versions_1.swcCoreVersion, 'swc-loader': versions_2.swcLoaderVersion }
            : {})));
        tasks.push(installTask);
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
function applicationGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = (0, normalize_options_1.normalizeOptions)(host, schema);
        const initTask = yield (0, init_1.default)(host, Object.assign(Object.assign({}, options), { skipFormat: true }));
        (0, create_application_files_1.createApplicationFiles)(host, options);
        (0, add_project_1.addProject)(host, options);
        const lintTask = yield addLinting(host, options);
        const cypressTask = yield (0, add_cypress_1.addCypress)(host, options);
        const jestTask = yield (0, add_jest_1.addJest)(host, options);
        (0, update_jest_config_1.updateJestConfig)(host, options);
        const styledTask = (0, add_styled_dependencies_1.addStyledModuleDependencies)(host, options.styledModule);
        const routingTask = (0, add_routing_1.addRouting)(host, options);
        (0, set_defaults_1.setDefaults)(host, options);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(initTask, lintTask, cypressTask, jestTask, styledTask, routingTask);
    });
}
exports.applicationGenerator = applicationGenerator;
exports.default = applicationGenerator;
exports.applicationSchematic = (0, devkit_1.convertNxGenerator)(applicationGenerator);
//# sourceMappingURL=application.js.map