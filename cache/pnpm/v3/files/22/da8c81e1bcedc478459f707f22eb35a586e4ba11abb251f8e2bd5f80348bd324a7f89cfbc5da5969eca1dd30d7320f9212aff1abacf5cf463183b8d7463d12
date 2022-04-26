"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = exports.parseMigrationsOptions = exports.Migrator = exports.normalizeVersion = void 0;
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const semver_1 = require("semver");
const tmp_1 = require("tmp");
const tree_1 = require("../config/tree");
const fileutils_1 = require("../utils/fileutils");
const logger_1 = require("../utils/logger");
const package_manager_1 = require("../utils/package-manager");
const params_1 = require("../utils/params");
function normalizeVersion(version) {
    const [v, t] = version.split('-');
    const [major, minor, patch] = v.split('.');
    const newV = `${major || 0}.${minor || 0}.${patch || 0}`;
    const newVersion = t ? `${newV}-${t}` : newV;
    try {
        (0, semver_1.gt)(newVersion, '0.0.0');
        return newVersion;
    }
    catch (e) {
        try {
            (0, semver_1.gt)(newV, '0.0.0');
            return newV;
        }
        catch (e) {
            const withoutPatch = `${major || 0}.${minor || 0}.0`;
            try {
                if ((0, semver_1.gt)(withoutPatch, '0.0.0')) {
                    return withoutPatch;
                }
            }
            catch (e) {
                const withoutPatchAndMinor = `${major || 0}.0.0`;
                try {
                    if ((0, semver_1.gt)(withoutPatchAndMinor, '0.0.0')) {
                        return withoutPatchAndMinor;
                    }
                }
                catch (e) {
                    return '0.0.0';
                }
            }
        }
    }
}
exports.normalizeVersion = normalizeVersion;
function slash(packageName) {
    return packageName.replace(/\\/g, '/');
}
class Migrator {
    constructor(opts) {
        this.packageJson = opts.packageJson;
        this.versions = opts.versions;
        this.fetch = opts.fetch;
        this.from = opts.from;
        this.to = opts.to;
    }
    updatePackageJson(targetPackage, targetVersion) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const packageJson = yield this._updatePackageJson(targetPackage, { version: targetVersion, addToPackageJson: false }, {});
            const migrations = yield this._createMigrateJson(packageJson);
            return { packageJson, migrations };
        });
    }
    _createMigrateJson(versions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const migrations = yield Promise.all(Object.keys(versions).map((c) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const currentVersion = this.versions(c);
                if (currentVersion === null)
                    return [];
                const target = versions[c];
                const migrationsJson = yield this.fetch(c, target.version);
                const generators = migrationsJson.generators;
                if (!generators)
                    return [];
                return Object.keys(generators)
                    .filter((r) => generators[r].version &&
                    this.gt(generators[r].version, currentVersion) &&
                    this.lte(generators[r].version, target.version))
                    .map((r) => (Object.assign(Object.assign({}, migrationsJson.generators[r]), { package: c, name: r })));
            })));
            return migrations.reduce((m, c) => [...m, ...c], []);
        });
    }
    _updatePackageJson(targetPackage, target, collectedVersions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let targetVersion = target.version;
            if (this.to[targetPackage]) {
                targetVersion = this.to[targetPackage];
            }
            if (!this.versions(targetPackage)) {
                return {
                    [targetPackage]: {
                        version: target.version,
                        addToPackageJson: target.addToPackageJson || false,
                    },
                };
            }
            let migrationsJson;
            try {
                migrationsJson = yield this.fetch(targetPackage, targetVersion);
                targetVersion = migrationsJson.version;
            }
            catch (e) {
                if (e.message.indexOf('No matching version') > -1) {
                    throw new Error(`${e.message}\nRun migrate with --to="package1@version1,package2@version2"`);
                }
                else {
                    throw e;
                }
            }
            const packages = this.collapsePackages(targetPackage, targetVersion, migrationsJson);
            const childCalls = yield Promise.all(Object.keys(packages)
                .filter((r) => {
                return (!collectedVersions[r] ||
                    this.gt(packages[r].version, collectedVersions[r].version));
            })
                .map((u) => this._updatePackageJson(u, packages[u], Object.assign(Object.assign({}, collectedVersions), { [targetPackage]: target }))));
            return childCalls.reduce((m, c) => {
                Object.keys(c).forEach((r) => {
                    if (!m[r] || this.gt(c[r].version, m[r].version)) {
                        m[r] = c[r];
                    }
                });
                return m;
            }, {
                [targetPackage]: {
                    version: migrationsJson.version,
                    addToPackageJson: target.addToPackageJson || false,
                },
            });
        });
    }
    collapsePackages(packageName, targetVersion, m) {
        // this should be used to know what version to include
        // we should use from everywhere we use versions
        if (packageName === '@nrwl/workspace') {
            if (!m.packageJsonUpdates)
                m.packageJsonUpdates = {};
            m.packageJsonUpdates[`${targetVersion}-defaultPackages`] = {
                version: targetVersion,
                packages: [
                    'nx',
                    '@nrwl/angular',
                    '@nrwl/cypress',
                    '@nrwl/devkit',
                    '@nrwl/eslint-plugin-nx',
                    '@nrwl/express',
                    '@nrwl/jest',
                    '@nrwl/js',
                    '@nrwl/cli',
                    '@nrwl/linter',
                    '@nrwl/nest',
                    '@nrwl/next',
                    '@nrwl/node',
                    '@nrwl/nx-cloud',
                    '@nrwl/nx-plugin',
                    '@nrwl/react',
                    '@nrwl/storybook',
                    '@nrwl/web',
                    '@nrwl/react-native',
                    '@nrwl/detox',
                ].reduce((m, c) => (Object.assign(Object.assign({}, m), { [c]: {
                        version: c === '@nrwl/nx-cloud' ? 'latest' : targetVersion,
                        alwaysAddToPackageJson: false,
                    } })), {}),
            };
        }
        if (!m.packageJsonUpdates || !this.versions(packageName))
            return {};
        return Object.keys(m.packageJsonUpdates)
            .filter((r) => {
            return (this.gt(m.packageJsonUpdates[r].version, this.versions(packageName)) && this.lte(m.packageJsonUpdates[r].version, targetVersion));
        })
            .map((r) => m.packageJsonUpdates[r].packages)
            .map((packages) => {
            if (!packages)
                return {};
            return Object.keys(packages)
                .filter((pkg) => {
                const { dependencies, devDependencies } = this.packageJson;
                return ((!packages[pkg].ifPackageInstalled ||
                    this.versions(packages[pkg].ifPackageInstalled)) &&
                    (packages[pkg].alwaysAddToPackageJson ||
                        packages[pkg].addToPackageJson ||
                        !!(dependencies === null || dependencies === void 0 ? void 0 : dependencies[pkg]) ||
                        !!(devDependencies === null || devDependencies === void 0 ? void 0 : devDependencies[pkg])));
            })
                .reduce((m, c) => (Object.assign(Object.assign({}, m), { [c]: {
                    version: packages[c].version,
                    addToPackageJson: packages[c].alwaysAddToPackageJson
                        ? 'dependencies'
                        : packages[c].addToPackageJson || false,
                } })), {});
        })
            .reduce((m, c) => (Object.assign(Object.assign({}, m), c)), {});
    }
    gt(v1, v2) {
        return (0, semver_1.gt)(normalizeVersion(v1), normalizeVersion(v2));
    }
    lte(v1, v2) {
        return (0, semver_1.lte)(normalizeVersion(v1), normalizeVersion(v2));
    }
}
exports.Migrator = Migrator;
function normalizeVersionWithTagCheck(version) {
    if (version === 'latest' || version === 'next')
        return version;
    return normalizeVersion(version);
}
function versionOverrides(overrides, param) {
    const res = {};
    overrides.split(',').forEach((p) => {
        const split = p.lastIndexOf('@');
        if (split === -1 || split === 0) {
            throw new Error(`Incorrect '${param}' section. Use --${param}="package@version"`);
        }
        const selectedPackage = p.substring(0, split).trim();
        const selectedVersion = p.substring(split + 1).trim();
        if (!selectedPackage || !selectedVersion) {
            throw new Error(`Incorrect '${param}' section. Use --${param}="package@version"`);
        }
        res[slash(selectedPackage)] = normalizeVersionWithTagCheck(selectedVersion);
    });
    return res;
}
function parseTargetPackageAndVersion(args) {
    if (!args) {
        throw new Error(`Provide the correct package name and version. E.g., @nrwl/workspace@9.0.0.`);
    }
    if (args.indexOf('@') > -1) {
        const i = args.lastIndexOf('@');
        if (i === 0) {
            const targetPackage = args.trim();
            const targetVersion = 'latest';
            return { targetPackage, targetVersion };
        }
        else {
            const targetPackage = args.substring(0, i);
            const maybeVersion = args.substring(i + 1);
            if (!targetPackage || !maybeVersion) {
                throw new Error(`Provide the correct package name and version. E.g., @nrwl/workspace@9.0.0.`);
            }
            const targetVersion = normalizeVersionWithTagCheck(maybeVersion);
            return { targetPackage, targetVersion };
        }
    }
    else {
        if (args.match(/^\d+(?:\.\d+)?(?:\.\d+)?$/) ||
            args === 'latest' ||
            args === 'next') {
            return {
                targetPackage: '@nrwl/workspace',
                targetVersion: normalizeVersionWithTagCheck(args),
            };
        }
        else {
            return {
                targetPackage: args,
                targetVersion: 'latest',
            };
        }
    }
}
function parseMigrationsOptions(options) {
    if (options.runMigrations === '') {
        options.runMigrations = 'migrations.json';
    }
    if (!options.runMigrations) {
        const from = options.from
            ? versionOverrides(options.from, 'from')
            : {};
        const to = options.to ? versionOverrides(options.to, 'to') : {};
        const { targetPackage, targetVersion } = parseTargetPackageAndVersion(options['packageAndVersion']);
        return {
            type: 'generateMigrations',
            targetPackage: slash(targetPackage),
            targetVersion,
            from,
            to,
        };
    }
    else {
        return {
            type: 'runMigrations',
            runMigrations: options.runMigrations,
        };
    }
}
exports.parseMigrationsOptions = parseMigrationsOptions;
function versions(root, from) {
    return (packageName) => {
        try {
            if (from[packageName]) {
                return from[packageName];
            }
            const packageJsonPath = require.resolve(`${packageName}/package.json`, {
                paths: [root],
            });
            return (0, fileutils_1.readJsonFile)(packageJsonPath).version;
        }
        catch (_a) {
            return null;
        }
    };
}
// testing-fetch-start
function createFetcher() {
    const cache = {};
    return function f(packageName, packageVersion) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (cache[`${packageName}-${packageVersion}`]) {
                return cache[`${packageName}-${packageVersion}`];
            }
            let resolvedVersion;
            let migrations;
            try {
                resolvedVersion = (0, package_manager_1.resolvePackageVersionUsingRegistry)(packageName, packageVersion);
                if (cache[`${packageName}-${resolvedVersion}`]) {
                    return cache[`${packageName}-${resolvedVersion}`];
                }
                logger_1.logger.info(`Fetching ${packageName}@${packageVersion}`);
                migrations = yield getPackageMigrations(packageName, resolvedVersion);
            }
            catch (_b) {
                logger_1.logger.info(`Fetching ${packageName}@${packageVersion}`);
                const result = yield installPackageAndGetVersionAngMigrations(packageName, packageVersion);
                resolvedVersion = result.resolvedVersion;
                migrations = result.migrations;
            }
            if (migrations) {
                cache[`${packageName}-${packageVersion}`] = cache[`${packageName}-${resolvedVersion}`] = {
                    version: resolvedVersion,
                    generators: (_a = migrations.generators) !== null && _a !== void 0 ? _a : migrations.schematics,
                    packageJsonUpdates: migrations.packageJsonUpdates,
                };
            }
            else {
                cache[`${packageName}-${packageVersion}`] = cache[`${packageName}-${resolvedVersion}`] = {
                    version: resolvedVersion,
                };
            }
            return cache[`${packageName}-${packageVersion}`];
        });
    };
}
// testing-fetch-end
function getPackageMigrations(packageName, packageVersion) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            // check if there are migrations in the packages by looking at the
            // registry directly
            const migrationsPath = getPackageMigrationsPathFromRegistry(packageName, packageVersion);
            if (!migrationsPath) {
                return null;
            }
            // try to obtain the migrations from the registry directly
            return yield getPackageMigrationsUsingRegistry(packageName, packageVersion, migrationsPath);
        }
        catch (_a) {
            // fall back to installing the package
            const { migrations } = yield installPackageAndGetVersionAngMigrations(packageName, packageVersion);
            return migrations;
        }
    });
}
function getPackageMigrationsPathFromRegistry(packageName, packageVersion) {
    var _a, _b;
    let pm = (0, package_manager_1.detectPackageManager)();
    if (pm === 'yarn') {
        pm = 'npm';
    }
    const result = (0, child_process_1.execSync)(`${pm} view ${packageName}@${packageVersion} nx-migrations ng-update --json`, {
        stdio: [],
    })
        .toString()
        .trim();
    if (!result) {
        return null;
    }
    const json = JSON.parse(result);
    let migrationsFilePath = (_b = (_a = json['nx-migrations']) !== null && _a !== void 0 ? _a : json['ng-update']) !== null && _b !== void 0 ? _b : json;
    if (typeof json === 'object') {
        migrationsFilePath = migrationsFilePath.migrations;
    }
    return migrationsFilePath;
}
function getPackageMigrationsUsingRegistry(packageName, packageVersion, migrationsFilePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const dir = (0, tmp_1.dirSync)().name;
        createNPMRC(dir);
        let pm = (0, package_manager_1.detectPackageManager)();
        if (pm === 'yarn') {
            pm = 'npm';
        }
        const tarballPath = (0, child_process_1.execSync)(`${pm} pack ${packageName}@${packageVersion}`, {
            cwd: dir,
            stdio: [],
        })
            .toString()
            .trim();
        let migrations = null;
        migrationsFilePath = (0, path_1.join)('package', migrationsFilePath);
        const migrationDestinationPath = (0, path_1.join)(dir, migrationsFilePath);
        try {
            yield (0, fileutils_1.extractFileFromTarball)((0, path_1.join)(dir, tarballPath), migrationsFilePath, migrationDestinationPath);
            migrations = (0, fileutils_1.readJsonFile)(migrationDestinationPath);
        }
        catch (_a) {
            throw new Error(`Failed to find migrations file "${migrationsFilePath}" in package "${packageName}@${packageVersion}".`);
        }
        try {
            (0, fs_extra_1.removeSync)(dir);
        }
        catch (_b) {
            // It's okay if this fails, the OS will clean it up eventually
        }
        return migrations;
    });
}
function installPackageAndGetVersionAngMigrations(packageName, packageVersion) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const dir = (0, tmp_1.dirSync)().name;
        createNPMRC(dir);
        const pmc = (0, package_manager_1.getPackageManagerCommand)();
        (0, child_process_1.execSync)(`${pmc.add} ${packageName}@${packageVersion}`, {
            stdio: [],
            cwd: dir,
        });
        const packageJsonPath = require.resolve(`${packageName}/package.json`, {
            paths: [dir],
        });
        const { version: resolvedVersion } = (0, fileutils_1.readJsonFile)(packageJsonPath);
        const migrationsFilePath = packageToMigrationsFilePath(packageName, dir);
        let migrations = null;
        if (migrationsFilePath) {
            migrations = (0, fileutils_1.readJsonFile)(migrationsFilePath);
        }
        try {
            (0, fs_extra_1.removeSync)(dir);
        }
        catch (_a) {
            // It's okay if this fails, the OS will clean it up eventually
        }
        return { migrations, resolvedVersion };
    });
}
function createNPMRC(dir) {
    // A package.json is needed for pnpm pack and for .npmrc to resolve
    (0, fileutils_1.writeJsonFile)(`${dir}/package.json`, {});
    const npmrc = (0, package_manager_1.checkForNPMRC)();
    if (npmrc) {
        // Copy npmrc if it exists, so that npm still follows it.
        (0, fs_extra_1.copyFileSync)(npmrc, `${dir}/.npmrc`);
    }
}
function packageToMigrationsFilePath(packageName, dir) {
    const packageJsonPath = require.resolve(`${packageName}/package.json`, {
        paths: [dir],
    });
    const json = (0, fileutils_1.readJsonFile)(packageJsonPath);
    let migrationsFile = json['nx-migrations'] || json['ng-update'];
    // migrationsFile is an object
    if (migrationsFile && migrationsFile.migrations) {
        migrationsFile = migrationsFile.migrations;
    }
    try {
        if (migrationsFile && typeof migrationsFile === 'string') {
            return require.resolve(migrationsFile, {
                paths: [(0, path_1.dirname)(packageJsonPath)],
            });
        }
        else {
            return null;
        }
    }
    catch (_a) {
        return null;
    }
}
function createMigrationsFile(root, migrations) {
    (0, fileutils_1.writeJsonFile)((0, path_1.join)(root, 'migrations.json'), { migrations });
}
function updatePackageJson(root, updatedPackages) {
    const packageJsonPath = (0, path_1.join)(root, 'package.json');
    const parseOptions = {};
    const json = (0, fileutils_1.readJsonFile)(packageJsonPath, parseOptions);
    Object.keys(updatedPackages).forEach((p) => {
        if (json.devDependencies && json.devDependencies[p]) {
            json.devDependencies[p] = updatedPackages[p].version;
        }
        else if (json.dependencies && json.dependencies[p]) {
            json.dependencies[p] = updatedPackages[p].version;
        }
        else if (updatedPackages[p].addToPackageJson) {
            if (updatedPackages[p].addToPackageJson === 'dependencies') {
                if (!json.dependencies)
                    json.dependencies = {};
                json.dependencies[p] = updatedPackages[p].version;
            }
            else if (updatedPackages[p].addToPackageJson === 'devDependencies') {
                if (!json.devDependencies)
                    json.devDependencies = {};
                json.devDependencies[p] = updatedPackages[p].version;
            }
        }
    });
    (0, fileutils_1.writeJsonFile)(packageJsonPath, json, {
        appendNewLine: parseOptions.endsWithNewline,
    });
}
function generateMigrationsJsonAndUpdatePackageJson(root, opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const pmc = (0, package_manager_1.getPackageManagerCommand)();
        try {
            logger_1.logger.info(`Fetching meta data about packages.`);
            logger_1.logger.info(`It may take a few minutes.`);
            const originalPackageJson = (0, fileutils_1.readJsonFile)((0, path_1.join)(root, 'package.json'));
            const migrator = new Migrator({
                packageJson: originalPackageJson,
                versions: versions(root, opts.from),
                fetch: createFetcher(),
                from: opts.from,
                to: opts.to,
            });
            const { migrations, packageJson } = yield migrator.updatePackageJson(opts.targetPackage, opts.targetVersion);
            updatePackageJson(root, packageJson);
            if (migrations.length > 0) {
                createMigrationsFile(root, migrations);
            }
            logger_1.logger.info(`NX The migrate command has run successfully.`);
            logger_1.logger.info(`- package.json has been updated`);
            if (migrations.length > 0) {
                logger_1.logger.info(`- migrations.json has been generated`);
            }
            else {
                logger_1.logger.info(`- there are no migrations to run, so migrations.json has not been created.`);
            }
            logger_1.logger.info(`NX Next steps:`);
            logger_1.logger.info(`- Make sure package.json changes make sense and then run '${pmc.install}'`);
            if (migrations.length > 0) {
                logger_1.logger.info(`- Run 'nx migrate --run-migrations'`);
            }
            logger_1.logger.info(`- To learn more go to https://nx.dev/using-nx/updating-nx`);
            if (showConnectToCloudMessage()) {
                logger_1.logger.info(`- You may run "nx connect-to-nx-cloud" to get faster builds, GitHub integration, and more. Check out https://nx.app`);
            }
        }
        catch (e) {
            logger_1.logger.error(`NX The migrate command failed.`);
            throw e;
        }
    });
}
function showConnectToCloudMessage() {
    try {
        const nxJson = (0, fileutils_1.readJsonFile)('nx.json');
        const defaultRunnerIsUsed = Object.values(nxJson.tasksRunnerOptions).find((r) => r.runner == '@nrwl/workspace/tasks-runners/default' ||
            r.runner == 'nx/tasks-runners/default');
        return !!defaultRunnerIsUsed;
    }
    catch (_a) {
        return false;
    }
}
function runInstall() {
    const pmCommands = (0, package_manager_1.getPackageManagerCommand)();
    logger_1.logger.info(`NX Running '${pmCommands.install}' to make sure necessary packages are installed`);
    (0, child_process_1.execSync)(pmCommands.install, { stdio: [0, 1, 2] });
}
function runMigrations(root, opts, isVerbose) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!process.env.NX_MIGRATE_SKIP_INSTALL) {
            runInstall();
        }
        logger_1.logger.info(`NX Running migrations from '${opts.runMigrations}'`);
        const migrations = (0, fileutils_1.readJsonFile)((0, path_1.join)(root, opts.runMigrations)).migrations;
        for (let m of migrations) {
            logger_1.logger.info(`Running migration ${m.name}`);
            if (m.cli === 'nx') {
                yield runNxMigration(root, m.package, m.name);
            }
            else {
                yield (yield Promise.resolve().then(() => require('../adapter/ngcli-adapter'))).runMigration(root, m.package, m.name, isVerbose);
            }
            logger_1.logger.info(`Successfully finished ${m.name}`);
            logger_1.logger.info(`---------------------------------------------------------`);
        }
        logger_1.logger.info(`NX Successfully finished running migrations from '${opts.runMigrations}'`);
    });
}
function runNxMigration(root, packageName, name) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const collectionPath = packageToMigrationsFilePath(packageName, root);
        const collection = (0, fileutils_1.readJsonFile)(collectionPath);
        const g = collection.generators || collection.schematics;
        const implRelativePath = g[name].implementation || g[name].factory;
        let implPath;
        try {
            implPath = require.resolve(implRelativePath, {
                paths: [(0, path_1.dirname)(collectionPath)],
            });
        }
        catch (e) {
            // workaround for a bug in node 12
            implPath = require.resolve(`${(0, path_1.dirname)(collectionPath)}/${implRelativePath}`);
        }
        const fn = require(implPath).default;
        const host = new tree_1.FsTree(root, false);
        yield fn(host, {});
        const changes = host.listChanges();
        (0, tree_1.flushChanges)(root, changes);
    });
}
function migrate(root, args) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (0, params_1.handleErrors)(args['verbose'], () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const opts = parseMigrationsOptions(args);
            if (opts.type === 'generateMigrations') {
                yield generateMigrationsJsonAndUpdatePackageJson(root, opts);
            }
            else {
                yield runMigrations(root, opts, args['verbose']);
            }
        }));
    });
}
exports.migrate = migrate;
//# sourceMappingURL=migrate.js.map