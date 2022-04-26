"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(tree);
        projects.forEach((config, name) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var _j, _k, _l, _m;
            let shouldUpdate = false;
            if (((_b = (_a = config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) === '@nrwl/web:webpack') {
                shouldUpdate = true;
                (_c = (_j = config.targets.build).defaultConfiguration) !== null && _c !== void 0 ? _c : (_j.defaultConfiguration = 'production');
                (_d = (_k = config.targets.build.configurations).development) !== null && _d !== void 0 ? _d : (_k.development = {
                    extractLicenses: false,
                    optimization: false,
                    sourceMap: true,
                    vendorChunk: true,
                });
            }
            if (((_f = (_e = config.targets) === null || _e === void 0 ? void 0 : _e.serve) === null || _f === void 0 ? void 0 : _f.executor) === '@nrwl/web:dev-server') {
                shouldUpdate = true;
                (_g = (_l = config.targets.serve).defaultConfiguration) !== null && _g !== void 0 ? _g : (_l.defaultConfiguration = 'development');
                (_h = (_m = config.targets.serve.configurations).development) !== null && _h !== void 0 ? _h : (_m.development = {
                    buildTarget: `${name}:build:development`,
                });
            }
            if (shouldUpdate)
                (0, devkit_1.updateProjectConfiguration)(tree, name, config);
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.update = update;
exports.default = update;
//# sourceMappingURL=add-default-development-configurations.js.map