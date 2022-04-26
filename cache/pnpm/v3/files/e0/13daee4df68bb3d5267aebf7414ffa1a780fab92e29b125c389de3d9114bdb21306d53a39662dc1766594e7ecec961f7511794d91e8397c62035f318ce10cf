"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJestConfigExt = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const functions_1 = require("../../utils/config/functions");
const path_1 = require("path");
const update_config_1 = require("../../utils/config/update-config");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const allowedExt = ['.ts', '.js'];
let isRootPresetUpdated = false;
function updateJestPreset(tree, options, projectName) {
    var _a;
    const oldConfig = (0, functions_1.jestConfigObject)(tree, options.jestConfig);
    if (!oldConfig) {
        return;
    }
    // if using the root preset and the root preset was updated to ts file.
    // then update the jest config
    if (isRootPresetUpdated && ((_a = oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig.preset) === null || _a === void 0 ? void 0 : _a.endsWith('jest.preset.js'))) {
        (0, update_config_1.removePropertyFromJestConfig)(tree, options.jestConfig, 'preset');
        (0, update_config_1.addPropertyToJestConfig)(tree, options.jestConfig, 'preset', (0, devkit_1.joinPathFragments)((0, devkit_1.offsetFromRoot)((0, path_1.dirname)(options.jestConfig)), 'jest.preset.ts'), { valueAsString: false });
    }
}
function updateTsConfig(tree, tsConfigPath) {
    try {
        (0, devkit_1.updateJson)(tree, tsConfigPath, (json) => {
            json.exclude = Array.from(new Set([...(json.exclude || []), 'jest.config.ts']));
            return json;
        });
    }
    catch (e) {
        devkit_1.logger.warn((0, devkit_1.stripIndents) `Nx Unable to update ${tsConfigPath}. Please manually ignore the jest.config.ts file.`);
    }
}
function isJestConfigValid(tree, options) {
    const configExt = (0, path_1.extname)(options.jestConfig);
    if (!tree.exists(options.jestConfig) || !allowedExt.includes(configExt)) {
        devkit_1.logger.debug(`unable to update file because it doesn't exist or is not a js or ts file. Config: ${options.jestConfig}. Exists?: ${tree.exists(options.jestConfig)}`);
        return false;
    }
    return true;
}
function updateTsconfigSpec(tree, projectConfig, path) {
    (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, path), (json) => {
        json.include = Array.from(new Set([...(json.include || []), 'jest.config.ts']));
        return json;
    });
}
function updateJestConfigExt(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (tree.exists('jest.config.js')) {
            tree.rename('jest.config.js', 'jest.config.ts');
        }
        if (tree.exists('jest.preset.js')) {
            isRootPresetUpdated = true;
            tree.rename('jest.preset.js', 'jest.preset.ts');
        }
        (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, projectName, target, configuration) => {
            const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
            if (!isJestConfigValid(tree, options)) {
                return;
            }
            updateJestPreset(tree, options, projectName);
            const newJestConfigPath = options.jestConfig.replace('.js', '.ts');
            tree.rename(options.jestConfig, newJestConfigPath);
            const rootFiles = tree.children(projectConfig.root);
            for (const fileName of rootFiles) {
                if (fileName === 'tsconfig.json') {
                    const filePath = (0, devkit_1.joinPathFragments)(projectConfig.root, fileName);
                    const tsConfig = (0, devkit_1.readJson)(tree, filePath);
                    if (tsConfig.references) {
                        for (const { path } of tsConfig.references) {
                            if (path.endsWith('tsconfig.spec.json')) {
                                updateTsconfigSpec(tree, projectConfig, path);
                                continue;
                            }
                            updateTsConfig(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, path));
                        }
                    }
                    else {
                        updateTsConfig(tree, filePath);
                    }
                }
            }
            projectConfig.targets[target].options.jestConfig = newJestConfigPath;
            (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfig);
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.updateJestConfigExt = updateJestConfigExt;
exports.default = updateJestConfigExt;
//# sourceMappingURL=update-jest-config-ext.js.map