"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const dev_server_impl_1 = require("@nrwl/web/src/executors/dev-server/dev-server.impl");
const path_1 = require("path");
function moduleFederationDevServer(options, context) {
    var _a;
    return tslib_1.__asyncGenerator(this, arguments, function* moduleFederationDevServer_1() {
        let iter = (0, dev_server_impl_1.default)(options, context);
        const p = context.workspace.projects[context.projectName];
        const moduleFederationConfigPath = (0, path_1.join)(context.root, p.root, 'module-federation.config.js');
        let moduleFederationConfig;
        try {
            moduleFederationConfig = require(moduleFederationConfigPath);
        }
        catch (_b) {
            // TODO(jack): Add a link to guide
            throw new Error(`Could not load ${moduleFederationConfigPath}. Was this project generated with "@nrwl/react:host"?`);
        }
        const knownRemotes = (_a = moduleFederationConfig.remotes) !== null && _a !== void 0 ? _a : [];
        const devServeApps = !options.devRemotes
            ? []
            : Array.isArray(options.devRemotes)
                ? options.devRemotes
                : [options.devRemotes];
        for (const app of knownRemotes) {
            const isDev = devServeApps.includes(app);
            iter = combineAsyncIterators(iter, yield tslib_1.__await((0, devkit_1.runExecutor)({
                project: app,
                target: isDev ? 'serve' : 'serve-static',
                configuration: context.configurationName,
            }, {
                watch: isDev,
            }, context)));
        }
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(iter))));
    });
}
exports.default = moduleFederationDevServer;
// TODO(jack): Extract this helper
function getNextAsyncIteratorFactory(options) {
    return (asyncIterator, index) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const iterator = yield asyncIterator.next();
            return { index, iterator };
        }
        catch (err) {
            if (options.errorCallback) {
                options.errorCallback(err, index);
            }
            if (options.throwError !== false) {
                return Promise.reject(err);
            }
            return { index, iterator: { done: true } };
        }
    });
}
function combineAsyncIterators(...iterators) {
    return tslib_1.__asyncGenerator(this, arguments, function* combineAsyncIterators_1() {
        let [options] = iterators;
        if (typeof options.next === 'function') {
            options = Object.create(null);
        }
        else {
            iterators.shift();
        }
        const getNextAsyncIteratorValue = getNextAsyncIteratorFactory(options);
        try {
            const asyncIteratorsValues = new Map(iterators.map((it, idx) => [idx, getNextAsyncIteratorValue(it, idx)]));
            do {
                const { iterator, index } = yield tslib_1.__await(Promise.race(asyncIteratorsValues.values()));
                if (iterator.done) {
                    asyncIteratorsValues.delete(index);
                }
                else {
                    yield yield tslib_1.__await(iterator.value);
                    asyncIteratorsValues.set(index, getNextAsyncIteratorValue(iterators[index], index));
                }
            } while (asyncIteratorsValues.size > 0);
        }
        finally {
            yield tslib_1.__await(Promise.allSettled(iterators.map((it) => it.return())));
        }
    });
}
//# sourceMappingURL=module-federation-dev-server.impl.js.map