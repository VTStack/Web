"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolyfillsPartial = exports.getStylesPartial = exports.getWebConfig = void 0;
const path = require("path");
const path_1 = require("path");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const typescript_2 = require("typescript");
const loader_utils_1 = require("loader-utils");
const normalize_1 = require("./normalize");
// TODO(jack): These should be inlined in a single function so it is easier to understand
const config_1 = require("./config");
const browser_1 = require("./webpack/partials/browser");
const common_1 = require("./webpack/partials/common");
const styles_1 = require("./webpack/partials/styles");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require("webpack-merge");
const postcssImports = require("postcss-import");
function getWebConfig(workspaceRoot, projectRoot, sourceRoot, options, esm, isScriptOptimizeOn, configuration) {
    const tsConfig = (0, typescript_1.readTsConfig)(options.tsConfig);
    if (isScriptOptimizeOn) {
        // Angular CLI uses an environment variable (NG_BUILD_DIFFERENTIAL_FULL)
        // to determine whether to use the scriptTargetOverride
        // or the tsConfig target
        // We want to force the target if overridden
        tsConfig.options.target = typescript_2.ScriptTarget.ES5;
    }
    const wco = {
        root: workspaceRoot,
        projectRoot: (0, path_1.resolve)(workspaceRoot, projectRoot),
        sourceRoot: (0, path_1.resolve)(workspaceRoot, sourceRoot),
        buildOptions: (0, normalize_1.convertBuildOptions)(options),
        esm,
        console,
        tsConfig,
        tsConfigPath: options.tsConfig,
    };
    // TODO(jack): Replace merge behavior with an inlined config so it is easier to understand.
    return webpackMerge.merge([
        _getBaseWebpackPartial(options, esm, isScriptOptimizeOn, tsConfig.options.emitDecoratorMetadata, configuration),
        getPolyfillsPartial(options.polyfills, options.es2015Polyfills, esm, isScriptOptimizeOn),
        getStylesPartial(wco.root, wco.projectRoot, wco.buildOptions, true, options.postcssConfig),
        getCommonPartial(wco),
        (0, browser_1.getBrowserConfig)(wco),
    ]);
}
exports.getWebConfig = getWebConfig;
function _getBaseWebpackPartial(options, esm, isScriptOptimizeOn, emitDecoratorMetadata, configuration) {
    let partial = (0, config_1.getBaseWebpackPartial)(options, {
        esm,
        isScriptOptimizeOn,
        emitDecoratorMetadata,
        configuration,
    });
    delete partial.resolve.mainFields;
    return partial;
}
function getCommonPartial(wco) {
    const commonConfig = (0, common_1.getCommonConfig)(wco);
    delete commonConfig.entry;
    delete commonConfig.resolve.modules;
    delete commonConfig.resolve.extensions;
    delete commonConfig.output.path;
    delete commonConfig.module;
    return commonConfig;
}
function getStylesPartial(workspaceRoot, projectRoot, options, extractCss, postcssConfig) {
    var _a, _b;
    const includePaths = [];
    if (((_b = (_a = options === null || options === void 0 ? void 0 : options.stylePreprocessorOptions) === null || _a === void 0 ? void 0 : _a.includePaths) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        options.stylePreprocessorOptions.includePaths.forEach((includePath) => includePaths.push(path.resolve(workspaceRoot, includePath)));
    }
    const partial = (0, styles_1.getStylesConfig)(workspaceRoot, options, includePaths);
    const rules = partial.module.rules.map((rule) => {
        if (!Array.isArray(rule.use)) {
            return rule;
        }
        rule.use = rule.use.map((loaderConfig) => {
            if (typeof loaderConfig === 'object' &&
                loaderConfig.loader === require.resolve('raw-loader')) {
                return {
                    loader: require.resolve('style-loader'),
                };
            }
            return loaderConfig;
        });
        return rule;
    });
    const loaderModulesOptions = {
        modules: {
            mode: 'local',
            getLocalIdent: getCSSModuleLocalIdent,
        },
        importLoaders: 1,
    };
    const postcssOptions = () => ({
        plugins: [
            postcssImports({
                addModulesDirectories: includePaths,
                resolve: (url) => (url.startsWith('~') ? url.slice(1) : url),
            }),
        ],
    });
    // If a path to postcssConfig is passed in, set it for app and all libs, otherwise
    // use automatic detection.
    if (typeof postcssConfig === 'string') {
        postcssOptions.config = path.join(workspaceRoot, postcssConfig);
    }
    const commonLoaders = [
        {
            loader: extractCss
                ? MiniCssExtractPlugin.loader
                : require.resolve('style-loader'),
        },
        {
            loader: require.resolve('css-loader'),
            options: loaderModulesOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                implementation: require('postcss'),
                postcssOptions: postcssOptions,
            },
        },
    ];
    partial.module.rules = [
        {
            test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
            oneOf: [
                {
                    test: /\.module\.css$/,
                    use: commonLoaders,
                },
                {
                    test: /\.module\.(scss|sass)$/,
                    use: [
                        ...commonLoaders,
                        {
                            loader: require.resolve('sass-loader'),
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: false,
                                    precision: 8,
                                    includePaths,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.module\.less$/,
                    use: [
                        ...commonLoaders,
                        {
                            loader: require.resolve('less-loader'),
                            options: {
                                lessOptions: {
                                    paths: includePaths,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.module\.styl$/,
                    use: [
                        ...commonLoaders,
                        {
                            loader: require.resolve('stylus-loader'),
                            options: {
                                stylusOptions: {
                                    include: includePaths,
                                },
                            },
                        },
                    ],
                },
                ...rules,
            ],
        },
    ];
    return partial;
}
exports.getStylesPartial = getStylesPartial;
function getPolyfillsPartial(polyfills, es2015Polyfills, esm, isScriptOptimizeOn) {
    const config = {
        entry: {},
    };
    if (polyfills && esm && isScriptOptimizeOn) {
        // Safari 10.1 supports <script type="module"> but not <script nomodule>.
        // Need to patch it up so the browser doesn't load both sets.
        config.entry.polyfills = [
            require.resolve('@nrwl/web/src/utils/webpack/safari-nomodule.js'),
            ...(polyfills ? [polyfills] : []),
        ];
    }
    else if (es2015Polyfills && !esm && isScriptOptimizeOn) {
        config.entry.polyfills = [
            es2015Polyfills,
            ...(polyfills ? [polyfills] : []),
        ];
    }
    else {
        if (polyfills) {
            config.entry.polyfills = [polyfills];
        }
        if (es2015Polyfills) {
            config.entry['polyfills-es5'] = [es2015Polyfills];
        }
    }
    return config;
}
exports.getPolyfillsPartial = getPolyfillsPartial;
function getCSSModuleLocalIdent(context, localIdentName, localName, options) {
    // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
    const fileNameOrFolder = context.resourcePath.match(/index\.module\.(css|scss|sass|styl)$/)
        ? '[folder]'
        : '[name]';
    // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
    const hash = (0, loader_utils_1.getHashDigest)(path_1.posix.relative(context.rootContext, context.resourcePath) + localName, 'md5', 'base64', 5);
    // Use loaderUtils to find the file or folder name
    const className = (0, loader_utils_1.interpolateName)(context, `${fileNameOrFolder}_${localName}__${hash}`, options);
    // Remove the .module that appears in every classname when based on the file and replace all "." with "_".
    return className.replace('.module_', '_').replace(/\./g, '_');
}
//# sourceMappingURL=web.config.js.map