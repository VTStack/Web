"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibOutPutPath = void 0;
const tslib_1 = require("tslib");
const path = require("path");
const fs_async_1 = require("./fs-async");
function getLibOutPutPath(projectRoot, buildOptions, libName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (buildOptions.outputPath) {
            return withOutputPath();
        }
        else {
            return withoutOutputPath();
        }
        function withOutputPath() {
            if (!buildOptions.outputPath ||
                typeof buildOptions.outputPath !== 'string') {
                throw new Error(`Cannot read the project output path option of the library '${libName}' in the workspace`);
            }
            return path.join(projectRoot, buildOptions.outputPath);
        }
        function withoutOutputPath() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (!buildOptions.project || typeof buildOptions.project !== 'string') {
                    throw new Error(`Cannot read the project path option of the library '${libName}' in the workspace`);
                }
                const ngPackagePath = path.join(projectRoot, buildOptions.project);
                let ngPackageContentStr;
                try {
                    ngPackageContentStr = yield (0, fs_async_1.readFileAsync)(ngPackagePath, {
                        encoding: 'utf8',
                    });
                }
                catch (error) {
                    throw new Error(`Error reading the ng-package.json`);
                }
                const ngPackageContent = JSON.parse(ngPackageContentStr);
                if (!ngPackageContent.dest || typeof ngPackageContent.dest !== 'string') {
                    throw new Error(`Cannot read the project 'dest' option of the ng-package.json`);
                }
                const outputPath = path.join(path.dirname(ngPackagePath), ngPackageContent.dest);
                return outputPath;
            });
        }
    });
}
exports.getLibOutPutPath = getLibOutPutPath;
//# sourceMappingURL=get-lib-output-path.js.map