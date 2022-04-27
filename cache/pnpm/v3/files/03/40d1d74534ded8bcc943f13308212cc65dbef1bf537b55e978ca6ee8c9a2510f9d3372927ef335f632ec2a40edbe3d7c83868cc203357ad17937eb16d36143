"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const workspace_1 = require("@nrwl/workspace");
const semver_1 = require("semver");
const versions_1 = require("../../utils/versions");
const ast_utils_1 = require("@nrwl/workspace/src/utils/ast-utils");
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const shouldUpdate = yield isUpdatable(tree);
        if (!shouldUpdate) {
            return;
        }
        updateVersion(tree);
        yield (0, devkit_1.formatFiles)(tree);
        return () => {
            devkit_1.logger.info('Please make sure to run npm install or yarn install to get the latest packages added by this migration');
        };
    });
}
exports.default = update;
function isUpdatable(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const json = (0, devkit_1.readJson)(tree, 'package.json');
        if (json.dependencies['@angular/core']) {
            const rxjs = (0, workspace_1.checkAndCleanWithSemver)('rxjs', json.dependencies['rxjs']);
            if ((0, semver_1.satisfies)(rxjs, versions_1.rxjsVersion7)) {
                return true;
            }
            const { Confirm } = require('enquirer');
            const prompt = new Confirm({
                name: 'question',
                message: 'Do you want to update to RxJS 7 + Nest 8?',
                initial: true,
            });
            return yield prompt.run();
        }
        return true;
    });
}
function updateVersion(tree) {
    (0, devkit_1.updateJson)(tree, 'package.json', (json) => {
        json.dependencies = json.dependencies || {};
        json.devDependencies = json.devDependencies || {};
        const rxjs = (0, workspace_1.checkAndCleanWithSemver)('rxjs', json.dependencies['rxjs']);
        json.dependencies = Object.assign(Object.assign({}, json.dependencies), { '@nestjs/common': versions_1.nestJsVersion8, '@nestjs/core': versions_1.nestJsVersion8, rxjs: (0, semver_1.satisfies)(rxjs, versions_1.rxjsVersion7)
                ? json.dependencies['rxjs']
                : versions_1.rxjsVersion7 });
        if (json.dependencies['@nestjs/platform-express']) {
            json.dependencies['@nestjs/platform-express'] = versions_1.nestJsVersion8;
        }
        if (json.dependencies['@nestjs/platform-fastify']) {
            json.dependencies['@nestjs/platform-fastify'] = versions_1.nestJsVersion8;
        }
        json.devDependencies = Object.assign(Object.assign({}, json.devDependencies), { '@nestjs/schematics': versions_1.nestJsSchematicsVersion, '@nestjs/testing': versions_1.nestJsVersion8 });
        if (json.devDependencies['jasmine-marbles']) {
            json.devDependencies['jasmine-marbles'] = '~0.9.1';
        }
        json.dependencies = (0, ast_utils_1.sortObjectByKeys)(json.dependencies);
        json.devDependencies = (0, ast_utils_1.sortObjectByKeys)(json.devDependencies);
        return json;
    });
}
//# sourceMappingURL=update-to-nest-8.js.map