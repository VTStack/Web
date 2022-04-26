"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRootBabelConfig = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function updateRootBabelConfig(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (host.exists('babel.config.json')) {
            (0, devkit_1.updateJson)(host, 'babel.config.json', (json) => {
                if (Array.isArray(json.presets)) {
                    json.presets = json.presets.filter((x) => x !== '@nrwl/web/babel');
                }
                return json;
            });
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.updateRootBabelConfig = updateRootBabelConfig;
exports.default = updateRootBabelConfig;
//# sourceMappingURL=update-root-babel-config.js.map