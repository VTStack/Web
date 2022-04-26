"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const path_1 = require("path");
const cypress_version_1 = require("../../utils/cypress-version");
const devkit_1 = require("@nrwl/devkit");
const Cypress = require('cypress'); // @NOTE: Importing via ES6 messes the whole test dependencies.
function cypressExecutor(options, context) {
    var e_1, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        options = normalizeOptions(options, context);
        let success;
        try {
            for (var _b = tslib_1.__asyncValues(startDevServer(options, context)), _c; _c = yield _b.next(), !_c.done;) {
                const baseUrl = _c.value;
                try {
                    success = yield runCypress(baseUrl, options);
                    if (!options.watch)
                        break;
                }
                catch (e) {
                    devkit_1.logger.error(e.message);
                    success = false;
                    if (!options.watch)
                        break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { success };
    });
}
exports.default = cypressExecutor;
function normalizeOptions(options, context) {
    options.env = options.env || {};
    if (options.tsConfig) {
        const tsConfigPath = (0, path_1.join)(context.root, options.tsConfig);
        options.env.tsConfig = tsConfigPath;
        process.env.TS_NODE_PROJECT = tsConfigPath;
    }
    checkSupportedBrowser(options);
    warnDeprecatedHeadless(options);
    return options;
}
function checkSupportedBrowser({ browser }) {
    // Browser was not passed in as an option, cypress will use whatever default it has set and we dont need to check it
    if (!browser) {
        return;
    }
    if ((0, cypress_version_1.installedCypressVersion)() >= 4 && browser == 'canary') {
        devkit_1.logger.warn((0, devkit_1.stripIndents) `
  Warning:
  You are using a browser that is not supported by cypress v4+.

  Read here for more info:
  https://docs.cypress.io/guides/references/migration-guide.html#Launching-Chrome-Canary-with-browser
  `);
        return;
    }
    const supportedV3Browsers = ['electron', 'chrome', 'canary', 'chromium'];
    if ((0, cypress_version_1.installedCypressVersion)() <= 3 &&
        !supportedV3Browsers.includes(browser)) {
        devkit_1.logger.warn((0, devkit_1.stripIndents) `
    Warning:
    You are using a browser that is not supported by cypress v3.
    `);
        return;
    }
}
function warnDeprecatedHeadless({ headless }) {
    if ((0, cypress_version_1.installedCypressVersion)() < 8 || headless === undefined) {
        return;
    }
    if (headless) {
        const deprecatedMsg = (0, devkit_1.stripIndents) `
    NOTE:
    You can now remove the use of the '--headless' flag during 'cypress run' as this is the default for all browsers.`;
        devkit_1.logger.warn(deprecatedMsg);
    }
}
function startDevServer(opts, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* startDevServer_1() {
        var e_2, _a;
        // no dev server, return the provisioned base url
        if (!opts.devServerTarget || opts.skipServe) {
            yield yield tslib_1.__await(opts.baseUrl);
            return yield tslib_1.__await(void 0);
        }
        const { project, target, configuration } = (0, devkit_1.parseTargetString)(opts.devServerTarget);
        const devServerTargetOpts = (0, devkit_1.readTargetOptions)({ project, target, configuration }, context);
        const targetSupportsWatchOpt = Object.keys(devServerTargetOpts).includes('watch');
        try {
            for (var _b = tslib_1.__asyncValues(yield tslib_1.__await((0, devkit_1.runExecutor)({ project, target, configuration }, 
            // @NOTE: Do not forward watch option if not supported by the target dev server,
            // this is relevant for running Cypress against dev server target that does not support this option,
            // for instance @nguniversal/builders:ssr-dev-server.
            targetSupportsWatchOpt ? { watch: opts.watch } : {}, context))), _c; _c = yield tslib_1.__await(_b.next()), !_c.done;) {
                const output = _c.value;
                if (!output.success && !opts.watch)
                    throw new Error('Could not compile application files');
                yield yield tslib_1.__await(opts.baseUrl || output.baseUrl);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield tslib_1.__await(_a.call(_b));
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
}
/**
 * @whatItDoes Initialize the Cypress test runner with the provided project configuration.
 * By default, Cypress will run tests from the CLI without the GUI and provide directly the results in the console output.
 * If `watch` is `true`: Open Cypress in the interactive GUI to interact directly with the application.
 */
function runCypress(baseUrl, opts) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Cypress expects the folder where a `cypress.json` is present
        const projectFolderPath = (0, path_1.dirname)(opts.cypressConfig);
        const options = {
            project: projectFolderPath,
            configFile: (0, path_1.basename)(opts.cypressConfig),
        };
        // If not, will use the `baseUrl` normally from `cypress.json`
        if (baseUrl) {
            options.config = { baseUrl };
        }
        if (opts.browser) {
            options.browser = opts.browser;
        }
        if (opts.env) {
            options.env = opts.env;
        }
        if (opts.spec) {
            options.spec = opts.spec;
        }
        options.tag = opts.tag;
        options.exit = opts.exit;
        options.headed = opts.headed;
        if (opts.headless) {
            options.headless = opts.headless;
        }
        options.record = opts.record;
        options.key = opts.key;
        options.parallel = opts.parallel;
        options.ciBuildId = (_a = opts.ciBuildId) === null || _a === void 0 ? void 0 : _a.toString();
        options.group = opts.group;
        options.ignoreTestFiles = opts.ignoreTestFiles;
        if (opts.reporter) {
            options.reporter = opts.reporter;
        }
        if (opts.reporterOptions) {
            options.reporterOptions = opts.reporterOptions;
        }
        options.testingType = opts.testingType;
        const result = yield (opts.watch
            ? Cypress.open(options)
            : Cypress.run(options));
        /**
         * `cypress.open` is returning `0` and is not of the same type as `cypress.run`.
         * `cypress.open` is the graphical UI, so it will be obvious to know what wasn't
         * working. Forcing the build to success when `cypress.open` is used.
         */
        return !result.totalFailed && !result.failures;
    });
}
//# sourceMappingURL=cypress.impl.js.map