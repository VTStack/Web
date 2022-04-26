"use strict";
try {
    const { output } = require('nx/src/utils/output');
    const { appRootPath } = require('nx/src/utils/app-root');
    const { unparse, getDependencyConfigs, getOutputs, } = require('nx/src/tasks-runner/utils');
    const { Cache } = require('nx/src/tasks-runner/cache');
    const { tasksRunnerV2 } = require('nx/src/tasks-runner/tasks-runner-v2');
    const { CompositeLifeCycle } = require('nx/src/tasks-runner/life-cycle');
    exports.output = output;
    exports.appRootPath = appRootPath;
    exports.unparse = unparse;
    exports.tasksRunnerV2 = tasksRunnerV2;
    exports.CompositeLifeCycle = CompositeLifeCycle;
    exports.getDependencyConfigs = getDependencyConfigs;
    exports.getOutputs = getOutputs;
    exports.Cache = Cache;
}
catch (_a) {
    const { output } = require('@nrwl/workspace/src/utilities/output');
    const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
    const { unparse, getDependencyConfigs, getOutputs, } = require('@nrwl/workspace/src/tasks-runner/utils');
    const { tasksRunnerV2, } = require('@nrwl/workspace/src/tasks-runner/tasks-runner-v2');
    let CompositeLifeCycle;
    try {
        CompositeLifeCycle =
            require('@nrwl/workspace/src/tasks-runner/life-cycle').CompositeLifeCycle;
    }
    catch (e) { }
    const { Cache } = require('@nrwl/workspace/src/tasks-runner/cache');
    exports.output = output;
    exports.appRootPath = appRootPath;
    exports.unparse = unparse;
    exports.tasksRunnerV2 = tasksRunnerV2;
    exports.CompositeLifeCycle = CompositeLifeCycle;
    exports.getDependencyConfigs = getDependencyConfigs;
    exports.getOutputs = getOutputs;
    exports.Cache = Cache;
}
//# sourceMappingURL=nx-imports.js.map