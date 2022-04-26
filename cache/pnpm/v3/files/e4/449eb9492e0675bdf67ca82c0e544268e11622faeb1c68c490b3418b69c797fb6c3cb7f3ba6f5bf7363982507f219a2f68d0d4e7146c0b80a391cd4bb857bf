"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const find_nodes_1 = require("@nrwl/workspace/src/utilities/typescript/find-nodes");
const ts = require("typescript");
let needsInstall = false;
const targetStorybookVersion = '6.3.0';
function installAddonEssentials(tree) {
    (0, devkit_1.updateJson)(tree, 'package.json', (json) => {
        json.dependencies = json.dependencies || {};
        json.devDependencies = json.devDependencies || {};
        if (!json.dependencies['@storybook/addon-essentials'] &&
            !json.devDependencies['@storybook/addon-essentials']) {
            needsInstall = true;
            json.devDependencies['@storybook/addon-essentials'] = `~${targetStorybookVersion}`;
        }
        return json;
    });
}
function editRootMainJs(tree) {
    var _a, _b;
    let newContents;
    let moduleExportsIsEmptyOrNonExistent = false;
    let alreadyHasAddonEssentials;
    const rootMainJsExists = tree.exists(`.storybook/main.js`);
    if (rootMainJsExists) {
        const file = getTsSourceFile(tree, '.storybook/main.js');
        const appFileContent = tree.read('.storybook/main.js', 'utf-8');
        newContents = appFileContent;
        const moduleExportsFull = (0, find_nodes_1.findNodes)(file, [
            ts.SyntaxKind.ExpressionStatement,
        ]);
        if (moduleExportsFull && moduleExportsFull[0]) {
            const moduleExports = moduleExportsFull[0];
            const listOfStatements = (0, find_nodes_1.findNodes)(moduleExports, [
                ts.SyntaxKind.SyntaxList,
            ]);
            let indexOfFirstNode = -1;
            const hasAddonsArray = (_b = (_a = listOfStatements[0]) === null || _a === void 0 ? void 0 : _a.getChildren()) === null || _b === void 0 ? void 0 : _b.find((node) => {
                if (node && node.getText().length > 0 && indexOfFirstNode < 0) {
                    indexOfFirstNode = node.getStart();
                }
                return (node.kind === ts.SyntaxKind.PropertyAssignment &&
                    node.getText().startsWith('addons'));
            });
            if (hasAddonsArray) {
                const listOfAllTSSyntaxElements = hasAddonsArray
                    .getChildren()
                    .find((node) => {
                    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
                });
                const listIndex = listOfAllTSSyntaxElements.getStart();
                const theActualAddonsList = listOfAllTSSyntaxElements
                    .getChildren()
                    .find((node) => {
                    return node.kind === ts.SyntaxKind.SyntaxList;
                });
                alreadyHasAddonEssentials = theActualAddonsList
                    .getChildren()
                    .find((node) => {
                    return node.getText() === "'@storybook/addon-essentials'";
                });
                newContents = (0, devkit_1.applyChangesToString)(newContents, [
                    {
                        type: devkit_1.ChangeType.Insert,
                        index: listIndex + 1,
                        text: "'@storybook/addon-essentials', ",
                    },
                ]);
            }
            else if (indexOfFirstNode >= 0) {
                /**
                 * Does not have addos array,
                 * so just write one, at the start.
                 */
                newContents = (0, devkit_1.applyChangesToString)(newContents, [
                    {
                        type: devkit_1.ChangeType.Insert,
                        index: indexOfFirstNode,
                        text: "addons: ['@storybook/addon-essentials'], ",
                    },
                ]);
            }
            else {
                /**
                 * Module exports is empty, so write all a-new
                 */
                moduleExportsIsEmptyOrNonExistent = true;
            }
        }
        else {
            /**
             * module.exports does not exist, so write all a-new
             */
            moduleExportsIsEmptyOrNonExistent = true;
        }
    }
    else {
        moduleExportsIsEmptyOrNonExistent = true;
    }
    if (moduleExportsIsEmptyOrNonExistent) {
        newContents = `
    module.exports = {
      stories: [],
      addons: ['@storybook/addon-essentials'],
    };
    `;
    }
    if (!alreadyHasAddonEssentials) {
        tree.write(`.storybook/main.js`, newContents);
    }
}
function getTsSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new Error(`Could not read TS file (${path}).`);
    }
    const content = buffer.toString();
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return source;
}
function default_1(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        editRootMainJs(tree);
        installAddonEssentials(tree);
        yield (0, devkit_1.formatFiles)(tree);
        if (needsInstall) {
            devkit_1.logger.info('Please make sure to run npm install or yarn install to get the latest packages added by this migration');
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=install-addon-essentials.js.map