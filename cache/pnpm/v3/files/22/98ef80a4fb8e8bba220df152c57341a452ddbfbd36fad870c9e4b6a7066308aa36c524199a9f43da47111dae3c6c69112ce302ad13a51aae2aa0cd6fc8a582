"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTslibDependencyIfNeeded = void 0;
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const tslibNodeName = 'npm:tslib';
function shouldAddTslibDependency(tsConfig, dependencies) {
    if (dependencies.some((dep) => dep.name === tslibNodeName)) {
        return false;
    }
    const config = (0, typescript_1.readTsConfig)(tsConfig);
    return !!config.options.importHelpers;
}
function addTslibDependencyIfNeeded(options, context, dependencies) {
    if (!shouldAddTslibDependency(options.tsConfig, dependencies)) {
        return;
    }
    const depGraph = (0, devkit_1.readCachedProjectGraph)();
    const tslibNode = depGraph.externalNodes[tslibNodeName];
    if (!tslibNode) {
        const pmc = (0, devkit_1.getPackageManagerCommand)();
        throw new Error(`"importHelpers" is enabled for ${context.targetName} but tslib is not installed. Use "${pmc.add} tslib" to install it.`);
    }
    const tslibDependency = {
        name: tslibNodeName,
        outputs: [],
        node: tslibNode,
    };
    dependencies.push(tslibDependency);
}
exports.addTslibDependencyIfNeeded = addTslibDependencyIfNeeded;
//# sourceMappingURL=tslib-dependency.js.map