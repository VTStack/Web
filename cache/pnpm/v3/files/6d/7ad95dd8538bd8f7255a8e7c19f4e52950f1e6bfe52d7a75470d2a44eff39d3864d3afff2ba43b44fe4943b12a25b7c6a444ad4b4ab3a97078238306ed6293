"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPackageVersion = void 0;
const tslib_1 = require("tslib");
const fs = require("../utils/fs-async");
const path = require("path");
function setPackageVersion(dir, packageVersion) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const packageContent = yield fs.readFileAsync(path.join(dir, 'package.json'), { encoding: 'utf8' });
        const packageObj = JSON.parse(packageContent);
        packageObj.version = packageVersion;
        yield fs.writeFileAsync(path.join(dir, 'package.json'), JSON.stringify(packageObj, null, 4), { encoding: 'utf8' });
    });
}
exports.setPackageVersion = setPackageVersion;
//# sourceMappingURL=set-package-version.js.map