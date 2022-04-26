"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
const utilities_1 = require("../../utils/utilities");
function addStyledJsxTypings(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let changesMade = false;
        const projects = (0, devkit_1.getProjects)(tree);
        projects.forEach((projectConfig, projectName) => {
            var _a;
            const targets = projectConfig.targets;
            const storybookRoot = path.join(projectConfig.root, '.storybook');
            const paths = {
                tsConfigStorybook: (0, devkit_1.joinPathFragments)(projectConfig.root, '.storybook/tsconfig.json'),
            };
            const storybookExecutor = targets &&
                Object.keys(targets).find((x) => targets[x].executor === '@nrwl/storybook:storybook');
            const hasStorybookConfig = storybookExecutor && tree.exists(paths.tsConfigStorybook);
            if (!hasStorybookConfig) {
                devkit_1.logger.info(`${projectName}: no storybook configured. skipping migration...`);
                return;
            }
            const isReactProject = (0, utilities_1.isFramework)('react', {
                uiFramework: (_a = targets[storybookExecutor].options) === null || _a === void 0 ? void 0 : _a.uiFramework,
            });
            if (isReactProject) {
                const tsConfig = {
                    storybook: (0, devkit_1.readJson)(tree, paths.tsConfigStorybook),
                };
                tsConfig.storybook.files = tsConfig.storybook.files || [];
                tsConfig.storybook.files = uniqueArray([
                    ...tsConfig.storybook.files,
                    `${(0, devkit_1.offsetFromRoot)(storybookRoot)}node_modules/@nrwl/react/typings/styled-jsx.d.ts`,
                ]);
                (0, devkit_1.writeJson)(tree, paths.tsConfigStorybook, tsConfig.storybook);
                changesMade = true;
            }
        });
        if (changesMade) {
            yield (0, devkit_1.formatFiles)(tree);
        }
    });
}
exports.default = addStyledJsxTypings;
function uniqueArray(value) {
    return [...new Set(value)];
}
//# sourceMappingURL=update-storybook-styled-jsx-typings.js.map