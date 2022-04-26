"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function update(host) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        for (const [name, config] of projects.entries()) {
            if (((_b = (_a = config === null || config === void 0 ? void 0 : config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) !== '@nrwl/web:build')
                continue;
            config.targets.build.executor = '@nrwl/web:webpack';
            (0, devkit_1.updateProjectConfiguration)(host, name, config);
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = update;
//# sourceMappingURL=rename-build-to-webpack.js.map