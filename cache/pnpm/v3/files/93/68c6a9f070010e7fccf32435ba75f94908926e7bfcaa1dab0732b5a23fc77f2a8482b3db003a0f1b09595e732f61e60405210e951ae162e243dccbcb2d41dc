"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installedCypressVersion = void 0;
let cypressPackageJson;
let loadedCypress = false;
function installedCypressVersion() {
    if (!loadedCypress) {
        try {
            cypressPackageJson = require('cypress/package.json');
        }
        catch (_a) { }
    }
    if (!cypressPackageJson) {
        return null;
    }
    const cypressPackageVersion = cypressPackageJson.version;
    const majorVersion = cypressPackageVersion.split('.')[0];
    if (!majorVersion) {
        return 0;
    }
    return +majorVersion;
}
exports.installedCypressVersion = installedCypressVersion;
//# sourceMappingURL=cypress-version.js.map