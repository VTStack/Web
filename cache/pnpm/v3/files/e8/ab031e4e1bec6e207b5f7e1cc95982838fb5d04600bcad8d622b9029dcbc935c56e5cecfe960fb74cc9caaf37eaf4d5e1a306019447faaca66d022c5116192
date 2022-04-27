"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependencies = void 0;
const devkit_1 = require("@nrwl/devkit");
const semver_1 = require("semver");
const versions_1 = require("../../../utils/versions");
function addDependencies(tree) {
    // Old nest 7 and rxjs 6 by default
    let NEST_VERSION = versions_1.nestJsVersion7;
    let RXJS = versions_1.rxjsVersion6;
    const packageJson = (0, devkit_1.readJson)(tree, 'package.json');
    if (packageJson.dependencies['@angular/core']) {
        let rxjs = packageJson.dependencies['rxjs'];
        if (rxjs.startsWith('~') || rxjs.startsWith('^')) {
            rxjs = rxjs.substring(1);
        }
        if ((0, semver_1.satisfies)(rxjs, versions_1.rxjsVersion7)) {
            NEST_VERSION = versions_1.nestJsVersion8;
            RXJS = packageJson.dependencies['rxjs'];
        }
    }
    else {
        NEST_VERSION = versions_1.nestJsVersion8;
        RXJS = versions_1.rxjsVersion7;
    }
    return (0, devkit_1.addDependenciesToPackageJson)(tree, {
        '@nestjs/common': NEST_VERSION,
        '@nestjs/core': NEST_VERSION,
        '@nestjs/platform-express': NEST_VERSION,
        'reflect-metadata': versions_1.reflectMetadataVersion,
        rxjs: RXJS,
        tslib: '^2.0.0',
    }, {
        '@nestjs/schematics': versions_1.nestJsSchematicsVersion,
        '@nestjs/testing': NEST_VERSION,
        '@nrwl/nest': versions_1.nxVersion,
    });
}
exports.addDependencies = addDependencies;
//# sourceMappingURL=add-dependencies.js.map