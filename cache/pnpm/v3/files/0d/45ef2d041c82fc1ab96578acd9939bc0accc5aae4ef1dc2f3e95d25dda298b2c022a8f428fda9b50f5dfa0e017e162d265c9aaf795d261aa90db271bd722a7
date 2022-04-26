"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRootBabelConfig = void 0;
function initRootBabelConfig() {
    return (host) => {
        if (host.exists('/babel.config.json') || host.exists('/babel.config.js'))
            return;
        host.create('/babel.config.json', JSON.stringify({
            presets: ['@nrwl/web/babel'],
            babelrcRoots: ['*'], // Make sure .babelrc files other than root can be loaded in a monorepo
        }, null, 2));
    };
}
exports.initRootBabelConfig = initRootBabelConfig;
//# sourceMappingURL=rules.js.map