"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const application_1 = require("../application/application");
const normalize_options_1 = require("../application/lib/normalize-options");
const update_module_federation_project_1 = require("../../rules/update-module-federation-project");
const add_module_federation_files_1 = require("./lib/add-module-federation-files");
const update_module_federation_e2e_project_1 = require("./lib/update-module-federation-e2e-project");
const remote_1 = require("../remote/remote");
function hostGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = (0, normalize_options_1.normalizeOptions)(host, schema);
        const initTask = yield (0, application_1.default)(host, Object.assign(Object.assign({}, options), { 
            // The target use-case is loading remotes as child routes, thus always enable routing.
            routing: true }));
        const remotesWithPorts = [];
        if (schema.remotes) {
            let remotePort = options.devServerPort + 1;
            for (const remote of schema.remotes) {
                remotesWithPorts.push({ name: remote, port: remotePort });
                yield (0, remote_1.default)(host, {
                    name: remote,
                    directory: options.directory,
                    style: options.style,
                    skipFormat: options.skipFormat,
                    unitTestRunner: options.unitTestRunner,
                    e2eTestRunner: options.e2eTestRunner,
                    linter: options.linter,
                    devServerPort: remotePort,
                });
                remotePort++;
            }
        }
        (0, add_module_federation_files_1.addModuleFederationFiles)(host, options, remotesWithPorts);
        (0, update_module_federation_project_1.updateModuleFederationProject)(host, options);
        (0, update_module_federation_e2e_project_1.updateModuleFederationE2eProject)(host, options);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return initTask;
    });
}
exports.hostGenerator = hostGenerator;
exports.default = hostGenerator;
//# sourceMappingURL=host.js.map