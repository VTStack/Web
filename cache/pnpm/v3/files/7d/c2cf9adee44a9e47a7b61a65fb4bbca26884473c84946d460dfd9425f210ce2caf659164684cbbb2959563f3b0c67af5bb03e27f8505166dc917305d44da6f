"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const deprecatedOptions = ['showCircularDependencies', 'budgets'];
function update(host) {
    var _a, _b, _c;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        for (const [name, config] of projects.entries()) {
            if (config.targets.build.executor !== '@nrwl/web:build')
                return;
            for (const opt of deprecatedOptions) {
                let updated = false;
                if (typeof ((_c = (_b = (_a = config.targets.build) === null || _a === void 0 ? void 0 : _a.configurations) === null || _b === void 0 ? void 0 : _b.production) === null || _c === void 0 ? void 0 : _c[opt]) !==
                    'undefined') {
                    delete config.targets.build.configurations.production[opt];
                    updated = true;
                }
                if (typeof config.targets.build.options[opt] !== 'undefined') {
                    delete config.targets.build.options[opt];
                    updated = true;
                }
                if (updated) {
                    (0, devkit_1.updateProjectConfiguration)(host, name, config);
                    devkit_1.logger.info(`NX Removed legacy build option from "${name}": ${opt}`);
                }
            }
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = update;
//# sourceMappingURL=remove-deprecated-options-13-0-0.js.map