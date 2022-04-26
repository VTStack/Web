"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cypressInitSchematic = exports.cypressInitGenerator = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
function updateDependencies(host) {
    (0, devkit_1.removeDependenciesFromPackageJson)(host, ['@nrwl/cypress'], []);
    return (0, devkit_1.addDependenciesToPackageJson)(host, {}, {
        ['@nrwl/cypress']: versions_1.nxVersion,
        cypress: versions_1.cypressVersion,
        '@types/node': versions_1.typesNodeVersion,
    });
}
function cypressInitGenerator(host, options) {
    return !options.skipPackageJson ? updateDependencies(host) : () => { };
}
exports.cypressInitGenerator = cypressInitGenerator;
exports.default = cypressInitGenerator;
exports.cypressInitSchematic = (0, devkit_1.convertNxGenerator)(cypressInitGenerator);
//# sourceMappingURL=init.js.map