"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const utilities_1 = require("../../utils/utilities");
function updateStorybookTsconfig(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let changesMade = false;
        const projects = (0, devkit_1.getProjects)(tree);
        projects.forEach((projectConfig, projectName) => {
            var _a, _b;
            const targets = projectConfig.targets;
            const paths = {
                tsConfigStorybook: (0, devkit_1.joinPathFragments)(projectConfig.root, '.storybook/tsconfig.json'),
            };
            const storybookExecutor = Object.keys(targets || {}).find((x) => targets[x].executor === '@nrwl/storybook:storybook');
            const hasStorybookConfig = storybookExecutor && tree.exists(paths.tsConfigStorybook);
            if (!hasStorybookConfig) {
                devkit_1.logger.info(`${projectName}: no storybook configured. skipping migration...`);
                return;
            }
            const isReactProject = (0, utilities_1.isFramework)('react', {
                uiFramework: (_b = (_a = targets[storybookExecutor]) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.uiFramework,
            });
            if (isReactProject) {
                const tsConfig = {
                    storybook: (0, devkit_1.readJson)(tree, paths.tsConfigStorybook),
                };
                tsConfig.storybook.compilerOptions = Object.assign(Object.assign({}, tsConfig.storybook.compilerOptions), { outDir: '' });
                (0, devkit_1.writeJson)(tree, paths.tsConfigStorybook, tsConfig.storybook);
                changesMade = true;
            }
        });
        if (changesMade) {
            yield (0, devkit_1.formatFiles)(tree);
        }
    });
}
exports.default = updateStorybookTsconfig;
//# sourceMappingURL=fix-storybook-tsconfig.js.map