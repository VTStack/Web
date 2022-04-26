"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteGenerator = exports.addModuleFederationFiles = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const devkit_1 = require("@nrwl/devkit");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const normalize_options_1 = require("../application/lib/normalize-options");
const application_1 = require("../application/application");
const update_host_with_remote_1 = require("./lib/update-host-with-remote");
const update_module_federation_project_1 = require("../../rules/update-module-federation-project");
function addModuleFederationFiles(host, options) {
    const templateVariables = Object.assign(Object.assign(Object.assign({}, (0, devkit_1.names)(options.name)), options), { tmpl: '' });
    (0, devkit_1.generateFiles)(host, (0, path_1.join)(__dirname, `./files/module-federation`), options.appProjectRoot, templateVariables);
}
exports.addModuleFederationFiles = addModuleFederationFiles;
function remoteGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = (0, normalize_options_1.normalizeOptions)(host, schema);
        const initApp = yield (0, application_1.default)(host, options);
        if (schema.host) {
            (0, update_host_with_remote_1.updateHostWithRemote)(host, schema.host, options.name);
        }
        // Module federation requires bootstrap code to be dynamically imported.
        // Renaming original entry file so we can use `import(./bootstrap)` in
        // new entry file.
        host.rename((0, path_1.join)(options.appProjectRoot, 'src/main.tsx'), (0, path_1.join)(options.appProjectRoot, 'src/bootstrap.tsx'));
        addModuleFederationFiles(host, options);
        (0, update_module_federation_project_1.updateModuleFederationProject)(host, options);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(initApp);
    });
}
exports.remoteGenerator = remoteGenerator;
exports.default = remoteGenerator;
//# sourceMappingURL=remote.js.map