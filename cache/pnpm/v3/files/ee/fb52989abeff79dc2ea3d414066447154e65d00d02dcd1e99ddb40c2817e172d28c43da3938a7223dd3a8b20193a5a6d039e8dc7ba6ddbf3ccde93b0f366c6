"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack = exports.core = exports.babelDefault = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const devkit_2 = require("@nrwl/devkit");
const config_1 = require("@nrwl/web/src/utils/config");
const web_config_1 = require("@nrwl/web/src/utils/web.config");
const version_utils_1 = require("@nrwl/workspace/src/utilities/version-utils");
const node_logger_1 = require("@storybook/node-logger");
const path_1 = require("path");
const semver_1 = require("semver");
const mergeWebpack = require("webpack-merge");
const merge_plugins_1 = require("./merge-plugins");
const reactWebpackConfig = require('../webpack');
const babelDefault = () => {
    // Add babel plugin for styled-components or emotion.
    // We don't have a good way to know when a project uses one or the other, so
    // add the plugin only if the other style package isn't used.
    const packageJson = (0, devkit_1.readJsonFile)((0, path_1.join)(devkit_2.workspaceRoot, 'package.json'));
    const deps = Object.assign(Object.assign({}, packageJson.dependencies), packageJson.devDependencies);
    const hasStyledComponents = !!deps['styled-components'];
    const plugins = [];
    if (hasStyledComponents) {
        plugins.push(['styled-components', { ssr: false }]);
    }
    return {
        presets: [],
        plugins: [...plugins],
    };
};
exports.babelDefault = babelDefault;
const core = (prev, options) => (Object.assign(Object.assign({}, prev), { disableWebpackDefaults: true }));
exports.core = core;
const webpack = (storybookWebpackConfig = {}, options) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    node_logger_1.logger.info('=> Loading Nrwl React Storybook preset from "@nrwl/react/plugins/storybook"');
    const tsconfigPath = (0, path_1.join)(options.configDir, 'tsconfig.json');
    const builderOptions = Object.assign(Object.assign({}, options), { root: options.configDir, sourceRoot: '', fileReplacements: [], sourceMap: {
            hidden: false,
            scripts: true,
            styles: true,
            vendors: false,
        }, styles: [], optimization: {}, tsConfig: tsconfigPath, extractCss: storybookWebpackConfig.mode === 'production' });
    const esm = true;
    const isScriptOptimizeOn = storybookWebpackConfig.mode !== 'development';
    const extractCss = storybookWebpackConfig.mode === 'production';
    // ESM build for modern browsers.
    const baseWebpackConfig = mergeWebpack.merge([
        (0, config_1.getBaseWebpackPartial)(builderOptions, {
            esm,
            isScriptOptimizeOn,
            skipTypeCheck: true,
        }),
        (0, web_config_1.getStylesPartial)(options.workspaceRoot, options.configDir, builderOptions, extractCss),
    ]);
    // run it through the React customizations
    const finalConfig = reactWebpackConfig(baseWebpackConfig);
    // Check whether the project .babelrc uses @emotion/babel-plugin. There's currently
    // a Storybook issue (https://github.com/storybookjs/storybook/issues/13277) which apparently
    // doesn't work with `@emotion/*` >= v11
    // this is a workaround to fix that
    let resolvedEmotionAliases = {};
    const packageJson = (0, devkit_1.readJsonFile)((0, path_1.join)(devkit_2.workspaceRoot, 'package.json'));
    const deps = Object.assign(Object.assign({}, packageJson.dependencies), packageJson.devDependencies);
    const emotionReactVersion = deps['@emotion/react'];
    if (emotionReactVersion &&
        (0, semver_1.gte)((0, version_utils_1.checkAndCleanWithSemver)('@emotion/react', emotionReactVersion), '11.0.0')) {
        const babelrc = (0, devkit_1.readJsonFile)((0, devkit_1.joinPathFragments)(options.configDir, '../', '.babelrc'));
        if ((_a = babelrc === null || babelrc === void 0 ? void 0 : babelrc.plugins) === null || _a === void 0 ? void 0 : _a.includes('@emotion/babel-plugin')) {
            resolvedEmotionAliases = {
                resolve: {
                    alias: {
                        '@emotion/core': (0, devkit_1.joinPathFragments)(devkit_2.workspaceRoot, 'node_modules', '@emotion/react'),
                        '@emotion/styled': (0, devkit_1.joinPathFragments)(devkit_2.workspaceRoot, 'node_modules', '@emotion/styled'),
                        'emotion-theming': (0, devkit_1.joinPathFragments)(devkit_2.workspaceRoot, 'node_modules', '@emotion/react'),
                    },
                },
            };
        }
    }
    return mergeWebpack.merge(Object.assign(Object.assign({}, storybookWebpackConfig), { module: Object.assign(Object.assign({}, storybookWebpackConfig.module), { rules: [
                ...storybookWebpackConfig.module.rules,
                ...finalConfig.module.rules,
            ] }), resolve: Object.assign(Object.assign({}, storybookWebpackConfig.resolve), { plugins: (0, merge_plugins_1.mergePlugins)(...((_b = storybookWebpackConfig.resolve.plugins) !== null && _b !== void 0 ? _b : []), ...((_c = finalConfig.resolve.plugins) !== null && _c !== void 0 ? _c : [])) }), plugins: (0, merge_plugins_1.mergePlugins)(...((_d = storybookWebpackConfig.plugins) !== null && _d !== void 0 ? _d : []), ...((_e = finalConfig.plugins) !== null && _e !== void 0 ? _e : [])) }), resolvedEmotionAliases);
});
exports.webpack = webpack;
//# sourceMappingURL=index.js.map