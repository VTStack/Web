"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTargets = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Check whether the project to be removed has builders targetted by another project
 *
 * Throws an error if the project is in use, unless the `--forceRemove` option is used.
 *
 * @param schema The options provided to the schematic
 */
function checkTargets(tree, schema, proj) {
    if (schema.forceRemove) {
        return;
    }
    const errors = [];
    const findRegex = new RegExp(`${schema.projectName}:(${Object.keys(proj.targets).join('|')})`);
    (0, devkit_1.getProjects)(tree).forEach((project, projectName) => {
        if (projectName === schema.projectName) {
            return;
        }
        const matches = findRegex.exec(JSON.stringify(project));
        if (matches) {
            errors.push(`"${schema.projectName}:${matches[1]}" is used by "${projectName}"`);
        }
    });
    if (errors.length > 0) {
        let message = `${schema.projectName} is still targeted by some projects:\n\n`;
        for (let error of errors) {
            message += `${error}\n`;
        }
        throw new Error(message);
    }
}
exports.checkTargets = checkTargets;
//# sourceMappingURL=check-targets.js.map