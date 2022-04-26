"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeExecutor = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
const child_process_1 = require("child_process");
const treeKill = require("tree-kill");
const util_1 = require("util");
let subProcess = null;
function nodeExecutor(options, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* nodeExecutor_1() {
        var e_1, _a;
        process.on('SIGTERM', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield killCurrentProcess();
            process.exit(128 + 15);
        }));
        process.on('SIGINT', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield killCurrentProcess();
            process.exit(128 + 2);
        }));
        process.on('SIGHUP', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield killCurrentProcess();
            process.exit(128 + 1);
        }));
        if (options.waitUntilTargets && options.waitUntilTargets.length > 0) {
            const results = yield tslib_1.__await(runWaitUntilTargets(options, context));
            for (const [i, result] of results.entries()) {
                if (!result.success) {
                    throw new Error(`Wait until target failed: ${options.waitUntilTargets[i]}.`);
                }
            }
        }
        const mappings = calculateResolveMappings(context, options);
        try {
            for (var _b = tslib_1.__asyncValues(startBuild(options, context)), _c; _c = yield tslib_1.__await(_b.next()), !_c.done;) {
                const event = _c.value;
                if (!event.success) {
                    devkit_1.logger.error('There was an error with the build. See above.');
                    devkit_1.logger.info(`${event.outfile} was not restarted.`);
                }
                yield tslib_1.__await(handleBuildEvent(event, options, mappings));
                yield yield tslib_1.__await(event);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield tslib_1.__await(_a.call(_b));
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
exports.nodeExecutor = nodeExecutor;
function calculateResolveMappings(context, options) {
    const projectGraph = (0, devkit_1.readCachedProjectGraph)();
    const parsed = (0, devkit_1.parseTargetString)(options.buildTarget);
    const { dependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)(projectGraph, context.root, parsed.project, parsed.target, parsed.configuration);
    return dependencies.reduce((m, c) => {
        if (c.node.type !== 'npm' && c.outputs[0] != null) {
            m[c.name] = (0, devkit_1.joinPathFragments)(context.root, c.outputs[0]);
        }
        return m;
    }, {});
}
function runProcess(event, options, mappings) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        subProcess = (0, child_process_1.fork)((0, devkit_1.joinPathFragments)(__dirname, 'node-with-require-overrides'), options.args, {
            execArgv: getExecArgv(options),
            stdio: 'inherit',
            env: Object.assign(Object.assign({}, process.env), { NX_FILE_TO_RUN: event.outfile, NX_MAPPINGS: JSON.stringify(mappings) }),
        });
        if (!options.watch) {
            return new Promise((resolve, reject) => {
                subProcess.on('exit', (code) => {
                    if (code === 0) {
                        resolve(undefined);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    });
}
function getExecArgv(options) {
    const args = [
        '-r',
        require.resolve('source-map-support/register'),
        ...options.runtimeArgs,
    ];
    if (options.inspect === true) {
        options.inspect = "inspect" /* Inspect */;
    }
    if (options.inspect) {
        args.push(`--${options.inspect}=${options.host}:${options.port}`);
    }
    return args;
}
function handleBuildEvent(event, options, mappings) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Don't kill previous run unless new build is successful.
        if (options.watch && event.success) {
            yield killCurrentProcess();
        }
        if (event.success) {
            yield runProcess(event, options, mappings);
        }
    });
}
const promisifiedTreeKill = (0, util_1.promisify)(treeKill);
function killCurrentProcess() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!subProcess)
            return;
        try {
            yield promisifiedTreeKill(subProcess.pid, 'SIGTERM');
        }
        catch (err) {
            if (Array.isArray(err) && err[0] && err[2]) {
                const errorMessage = err[2];
                devkit_1.logger.error(errorMessage);
            }
            else if (err.message) {
                devkit_1.logger.error(err.message);
            }
        }
        finally {
            subProcess = null;
        }
    });
}
function startBuild(options, context) {
    var _a;
    return tslib_1.__asyncGenerator(this, arguments, function* startBuild_1() {
        const buildTarget = (0, devkit_1.parseTargetString)(options.buildTarget);
        // TODO(jack): [Nx 14] Remove this line once we generate `development` configuration by default + add migration for it if missing
        (_a = buildTarget.configuration) !== null && _a !== void 0 ? _a : (buildTarget.configuration = '');
        yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(yield tslib_1.__await((0, devkit_1.runExecutor)(buildTarget, Object.assign(Object.assign({}, options.buildTargetOptions), { watch: options.watch }), context)))));
    });
}
function runWaitUntilTargets(options, context) {
    return Promise.all(options.waitUntilTargets.map((waitUntilTarget) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const target = (0, devkit_1.parseTargetString)(waitUntilTarget);
        const output = yield (0, devkit_1.runExecutor)(target, {}, context);
        return new Promise((resolve) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let event = yield output.next();
            // Resolve after first event
            resolve(event.value);
            // Continue iterating
            while (!event.done) {
                event = yield output.next();
            }
        }));
    })));
}
exports.default = nodeExecutor;
//# sourceMappingURL=node.impl.js.map