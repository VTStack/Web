"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storybookConfigurationSchematic = exports.storybookConfigurationGenerator = void 0;
const tslib_1 = require("tslib");
const stories_1 = require("../stories/stories");
const devkit_1 = require("@nrwl/devkit");
const storybook_1 = require("@nrwl/storybook");
const project_name_1 = require("@nrwl/cypress/src/utils/project-name");
function generateStories(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const libConfig = (0, devkit_1.readProjectConfiguration)(host, schema.name);
        const libRoot = libConfig.root;
        const cypressProject = (0, project_name_1.getE2eProjectName)(schema.name, libRoot, schema.cypressDirectory);
        yield (0, stories_1.default)(host, {
            project: schema.name,
            generateCypressSpecs: schema.configureCypress && schema.generateCypressSpecs,
            js: schema.js,
            cypressProject,
        });
    });
}
function storybookConfigurationGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const installTask = yield (0, storybook_1.configurationGenerator)(host, {
            name: schema.name,
            uiFramework: '@storybook/react',
            configureCypress: schema.configureCypress,
            js: schema.js,
            linter: schema.linter,
            cypressDirectory: schema.cypressDirectory,
            standaloneConfig: schema.standaloneConfig,
        });
        if (schema.generateStories) {
            yield generateStories(host, schema);
        }
        return installTask;
    });
}
exports.storybookConfigurationGenerator = storybookConfigurationGenerator;
exports.default = storybookConfigurationGenerator;
exports.storybookConfigurationSchematic = (0, devkit_1.convertNxGenerator)(storybookConfigurationGenerator);
//# sourceMappingURL=configuration.js.map