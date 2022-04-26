"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePackageJson = void 0;
const devkit_1 = require("@nrwl/devkit");
const create_package_json_1 = require("@nrwl/workspace/src/utilities/create-package-json");
function generatePackageJson(projectName, graph, options) {
    var _a;
    const packageJson = (0, create_package_json_1.createPackageJson)(projectName, graph, options);
    packageJson.main = (_a = packageJson.main) !== null && _a !== void 0 ? _a : options.outputFileName;
    delete packageJson.devDependencies;
    (0, devkit_1.writeJsonFile)(`${options.outputPath}/package.json`, packageJson);
}
exports.generatePackageJson = generatePackageJson;
//# sourceMappingURL=generate-package-json.js.map