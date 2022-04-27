"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreeWithNestApplication = void 0;
const testing_1 = require("@nrwl/devkit/testing");
function createTreeWithNestApplication(appName) {
    const tree = (0, testing_1.createTreeWithEmptyWorkspace)();
    tree.write('workspace.json', String.raw `
      {
        "projects": {
          "${appName}": {
            "root": "apps/api",
            "sourceRoot": "apps/api/src",
            "projectType": "application",
            "prefix": "api",
            "targets":{}
          }
        }
      }
    `);
    return tree;
}
exports.createTreeWithNestApplication = createTreeWithNestApplication;
//# sourceMappingURL=testing.js.map