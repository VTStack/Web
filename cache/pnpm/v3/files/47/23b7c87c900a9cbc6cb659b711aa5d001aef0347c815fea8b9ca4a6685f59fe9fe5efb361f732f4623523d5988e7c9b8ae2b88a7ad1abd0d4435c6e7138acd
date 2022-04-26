"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const core_1 = require("../../core");
const utils_1 = require("./utils");
function install(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let libs = getBuildableLibraries(tree);
        // If there is no libraries to install throw an exception
        if (libs.size === 0) {
            throw new Error('There is no publishable libraries in this workspace');
        }
        if (options.projects && options.projects.length > 0) {
            // if there is projects that doesn't exists, throw an error indicating which projects are invalid
            if (!(0, utils_1.allProjectsAreValid)(options.projects, libs)) {
                const invalidProjects = (0, utils_1.determineWhichProjectsAreInvalid)(options.projects, libs);
                throw new Error((0, utils_1.buildInvalidProjectsErrorMessage)(invalidProjects));
            }
            const selectedLibs = new Map();
            options.projects.forEach(project => {
                const lib = libs.get(project);
                if (lib) {
                    selectedLibs.set(project, lib);
                }
            });
            libs = selectedLibs;
        }
        Array.from(libs.entries()).forEach(([libKey, libConfig]) => {
            if (libConfig.targets) {
                const executorOptions = Object.assign({ access: core_1.npmAccess.public }, setUpProductionModeIfHasIt(libConfig));
                libConfig.targets.deploy = {
                    executor: 'ngx-deploy-npm:deploy',
                    options: executorOptions,
                };
                (0, devkit_1.updateProjectConfiguration)(tree, libKey, libConfig);
            }
        });
        /* Supports Angular CLI workspace definition format, see https://github.com/nrwl/nx/discussions/6955#discussioncomment-1341893 */
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = install;
/**
 * Get the libraries present in the workspace
 * @param workspace
 */
function getBuildableLibraries(tree) {
    const allProjects = (0, devkit_1.getProjects)(tree);
    // remove all the non libiraries
    Array.from(allProjects.entries()).forEach(([key, project]) => {
        if ((0, utils_1.isProjectAPublishableLib)(project) === false) {
            allProjects.delete(key);
        }
    });
    return allProjects;
}
/**
 * Returns the configuration production if the library has a production mode on its build
 * @param lib The workspace of the library
 */
function setUpProductionModeIfHasIt(lib) {
    var _a, _b, _c;
    return ((_c = (_b = (_a = lib.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.configurations) === null || _c === void 0 ? void 0 : _c.production)
        ? {
            buildTarget: 'production',
        }
        : {};
}
//# sourceMappingURL=generator.js.map