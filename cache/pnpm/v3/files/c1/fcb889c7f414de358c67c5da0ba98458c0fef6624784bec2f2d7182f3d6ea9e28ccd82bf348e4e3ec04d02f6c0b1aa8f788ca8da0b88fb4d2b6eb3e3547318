"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePackageVersionUsingInstallation = exports.resolvePackageVersionUsingRegistry = exports.checkForNPMRC = exports.getPackageManagerVersion = exports.getPackageManagerCommand = exports.detectPackageManager = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const tmp_1 = require("tmp");
const fileutils_1 = require("./fileutils");
/**
 * Detects which package manager is used in the workspace based on the lock file.
 */
function detectPackageManager(dir = '') {
    return (0, fs_1.existsSync)((0, path_1.join)(dir, 'yarn.lock'))
        ? 'yarn'
        : (0, fs_1.existsSync)((0, path_1.join)(dir, 'pnpm-lock.yaml'))
            ? 'pnpm'
            : 'npm';
}
exports.detectPackageManager = detectPackageManager;
/**
 * Returns commands for the package manager used in the workspace.
 * By default, the package manager is derived based on the lock file,
 * but it can also be passed in explicitly.
 *
 * Example:
 *
 * ```javascript
 * execSync(`${getPackageManagerCommand().addDev} my-dev-package`);
 * ```
 */
function getPackageManagerCommand(packageManager = detectPackageManager()) {
    const commands = {
        yarn: () => ({
            install: 'yarn',
            add: 'yarn add -W',
            addDev: 'yarn add -D -W',
            addGlobal: 'yarn global add',
            rm: 'yarn remove',
            exec: 'yarn',
            run: (script, args) => `yarn ${script} ${args}`,
            list: 'yarn list',
        }),
        pnpm: () => {
            const [major, minor] = getPackageManagerVersion('pnpm').split('.');
            let useExec = false;
            if (+major >= 6 && +minor >= 13) {
                useExec = true;
            }
            return {
                install: 'pnpm install --no-frozen-lockfile',
                add: 'pnpm add',
                addDev: 'pnpm add -D',
                addGlobal: 'pnpm add -g',
                rm: 'pnpm rm',
                exec: useExec ? 'pnpm exec' : 'pnpx',
                run: (script, args) => `pnpm run ${script} -- ${args}`,
                list: 'pnpm ls --depth 100',
            };
        },
        npm: () => {
            var _a;
            var _b;
            (_a = (_b = process.env).npm_config_legacy_peer_deps) !== null && _a !== void 0 ? _a : (_b.npm_config_legacy_peer_deps = 'true');
            return {
                install: 'npm install',
                add: 'npm install',
                addDev: 'npm install -D',
                addGlobal: 'npm install -g',
                rm: 'npm rm',
                exec: 'npx',
                run: (script, args) => `npm run ${script} -- ${args}`,
                list: 'npm ls',
            };
        },
    };
    return commands[packageManager]();
}
exports.getPackageManagerCommand = getPackageManagerCommand;
/**
 * Returns the version of the package manager used in the workspace.
 * By default, the package manager is derived based on the lock file,
 * but it can also be passed in explicitly.
 */
function getPackageManagerVersion(packageManager = detectPackageManager()) {
    return (0, child_process_1.execSync)(`${packageManager} --version`).toString('utf-8').trim();
}
exports.getPackageManagerVersion = getPackageManagerVersion;
/**
 * Checks for a project level npmrc file by crawling up the file tree until
 * hitting a package.json file, as this is how npm finds them as well.
 */
function checkForNPMRC(directory = process.cwd()) {
    while (!(0, fs_1.existsSync)((0, path_1.join)(directory, 'package.json'))) {
        directory = (0, path_1.dirname)(directory);
    }
    const path = (0, path_1.join)(directory, '.npmrc');
    return (0, fs_1.existsSync)(path) ? path : null;
}
exports.checkForNPMRC = checkForNPMRC;
/**
 * Returns the resolved version for a given package and version tag using the
 * NPM registry (when using Yarn it will fall back to NPM to fetch the info).
 */
function resolvePackageVersionUsingRegistry(packageName, version) {
    let pm = detectPackageManager();
    if (pm === 'yarn') {
        pm = 'npm';
    }
    try {
        const result = (0, child_process_1.execSync)(`${pm} view ${packageName}@${version} version`, {
            stdio: [],
        })
            .toString()
            .trim();
        if (!result) {
            throw new Error(`Unable to resolve version ${packageName}@${version}.`);
        }
        // get the last line of the output, strip the package version and quotes
        const resolvedVersion = result
            .split('\n')
            .pop()
            .split(' ')
            .pop()
            .replace(/'/g, '');
        return resolvedVersion;
    }
    catch (_a) {
        throw new Error(`Unable to resolve version ${packageName}@${version}.`);
    }
}
exports.resolvePackageVersionUsingRegistry = resolvePackageVersionUsingRegistry;
/**
 * Return the resolved version for a given package and version tag using by
 * installing it in a temporary directory and fetching the version from the
 * package.json.
 */
function resolvePackageVersionUsingInstallation(packageName, version) {
    const dir = (0, tmp_1.dirSync)().name;
    const npmrc = checkForNPMRC();
    (0, fileutils_1.writeJsonFile)(`${dir}/package.json`, {});
    if (npmrc) {
        // Copy npmrc if it exists, so that npm still follows it.
        (0, fs_1.copyFileSync)(npmrc, `${dir}/.npmrc`);
    }
    const pmc = getPackageManagerCommand();
    (0, child_process_1.execSync)(`${pmc.add} ${packageName}@${version}`, { stdio: [], cwd: dir });
    const packageJsonPath = require.resolve(`${packageName}/package.json`, {
        paths: [dir],
    });
    const { version: resolvedVersion } = (0, fileutils_1.readJsonFile)(packageJsonPath);
    try {
        (0, fs_1.unlinkSync)(dir);
    }
    catch (_a) {
        // It's okay if this fails, the OS will clean it up eventually
    }
    return resolvedVersion;
}
exports.resolvePackageVersionUsingInstallation = resolvePackageVersionUsingInstallation;
//# sourceMappingURL=package-manager.js.map