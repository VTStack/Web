"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSchematic = exports.initGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const set_default_collection_1 = require("@nrwl/workspace/src/utilities/set-default-collection");
const versions_1 = require("../../utils/versions");
function updateDependencies(tree) {
    (0, devkit_1.removeDependenciesFromPackageJson)(tree, ['@nrwl/node'], []);
    return (0, devkit_1.addDependenciesToPackageJson)(tree, {
        tslib: versions_1.tslibVersion,
    }, { '@nrwl/node': versions_1.nxVersion, '@types/node': versions_1.typesNodeVersion });
}
function normalizeOptions(schema) {
    var _a;
    return Object.assign(Object.assign({}, schema), { unitTestRunner: (_a = schema.unitTestRunner) !== null && _a !== void 0 ? _a : 'jest' });
}
function initGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(schema);
        (0, set_default_collection_1.setDefaultCollection)(tree, '@nrwl/node');
        let jestInstall;
        if (options.unitTestRunner === 'jest') {
            jestInstall = yield (0, jest_1.jestInitGenerator)(tree, schema);
        }
        const installTask = yield updateDependencies(tree);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (jestInstall) {
                yield jestInstall();
            }
            yield installTask();
        });
    });
}
exports.initGenerator = initGenerator;
exports.default = initGenerator;
exports.initSchematic = (0, devkit_1.convertNxGenerator)(initGenerator);
//# sourceMappingURL=init.js.map