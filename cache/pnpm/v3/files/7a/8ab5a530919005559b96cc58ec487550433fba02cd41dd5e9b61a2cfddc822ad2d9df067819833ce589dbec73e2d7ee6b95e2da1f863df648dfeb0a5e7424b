"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStylesConfig = void 0;
const path = require("path");
const remove_empty_scripts_plugin_1 = require("../plugins/remove-empty-scripts-plugin");
const hash_format_1 = require("../../hash-format");
const normalize_1 = require("../../normalize");
const postcss_cli_resources_1 = require("../plugins/postcss-cli-resources");
const remove_hash_plugin_1 = require("../plugins/remove-hash-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const postcssImports = require('postcss-import');
const RawCssLoader = require.resolve(path.join(__dirname, '../plugins/raw-css-loader.js'));
function getStylesConfig(root, buildOptions, includePaths) {
    const entryPoints = {};
    const globalStylePaths = [];
    const extraPlugins = [];
    const cssSourceMap = !!buildOptions.sourceMap;
    // Determine hashing format.
    const hashFormat = (0, hash_format_1.getOutputHashFormat)(buildOptions.outputHashing);
    const postcssOptionsCreator = (sourceMap) => {
        return (loader) => ({
            map: sourceMap && {
                inline: true,
                annotation: false,
            },
            plugins: [
                postcssImports({
                    addModulesDirectories: includePaths,
                    resolve: (url) => (url.startsWith('~') ? url.slice(1) : url),
                }),
                (0, postcss_cli_resources_1.PostcssCliResources)({
                    baseHref: buildOptions.baseHref,
                    deployUrl: buildOptions.deployUrl,
                    loader,
                    filename: `[name]${hashFormat.file}.[ext]`,
                }),
                autoprefixer(),
            ],
        });
    };
    let lessPathOptions = {};
    if (includePaths.length > 0) {
        lessPathOptions = {
            paths: includePaths,
        };
    }
    // Process global styles.
    if (buildOptions.styles.length > 0) {
        const chunkNames = [];
        (0, normalize_1.normalizeExtraEntryPoints)(buildOptions.styles, 'styles').forEach((style) => {
            const resolvedPath = path.resolve(root, style.input);
            // Add style entry points.
            if (entryPoints[style.bundleName]) {
                entryPoints[style.bundleName].push(resolvedPath);
            }
            else {
                entryPoints[style.bundleName] = [resolvedPath];
            }
            // Add non injected styles to the list.
            if (!style.inject) {
                chunkNames.push(style.bundleName);
            }
            // Add global css paths.
            globalStylePaths.push(resolvedPath);
        });
        if (chunkNames.length > 0) {
            // Add plugin to remove hashes from lazy styles.
            extraPlugins.push(new remove_hash_plugin_1.RemoveHashPlugin({ chunkNames, hashFormat }));
        }
    }
    // set base rules to derive final rules from
    const baseRules = [
        { test: /\.css$/, use: [] },
        {
            test: /\.scss$|\.sass$/,
            use: [
                {
                    loader: require.resolve('sass-loader'),
                    options: {
                        implementation: require('sass'),
                        sourceMap: cssSourceMap,
                        sassOptions: {
                            fiber: false,
                            // bootstrap-sass requires a minimum precision of 8
                            precision: 8,
                            includePaths,
                        },
                    },
                },
            ],
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: require.resolve('less-loader'),
                    options: {
                        sourceMap: cssSourceMap,
                        lessOptions: Object.assign({ javascriptEnabled: true }, lessPathOptions),
                    },
                },
            ],
        },
        {
            test: /\.styl$/,
            use: [
                {
                    loader: require.resolve('stylus-loader'),
                    options: {
                        sourceMap: cssSourceMap,
                        stylusOptions: {
                            include: includePaths,
                        },
                    },
                },
            ],
        },
    ];
    // load component css as raw strings
    const componentsSourceMap = !!(cssSourceMap &&
        // Never use component css sourcemap when style optimizations are on.
        // It will just increase bundle size without offering good debug experience.
        typeof buildOptions.optimization === 'undefined'
        ? true
        : typeof buildOptions.optimization === 'boolean'
            ? !buildOptions.optimization
            : buildOptions.optimization.styles &&
                // Inline all sourcemap types except hidden ones, which are the same as no sourcemaps
                // for component css.
                buildOptions.sourceMap !== 'hidden');
    const rules = baseRules.map(({ test, use }) => ({
        exclude: globalStylePaths,
        test,
        use: [
            { loader: require.resolve('raw-loader') },
            { loader: RawCssLoader },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    implementation: require('postcss'),
                    postcssOptions: postcssOptionsCreator(componentsSourceMap),
                },
            },
            ...(Array.isArray(use) ? use : []),
        ],
    }));
    // load global css as css files
    if (globalStylePaths.length > 0) {
        const globalSourceMap = !!cssSourceMap && buildOptions.sourceMap !== 'hidden';
        rules.push(...baseRules.map(({ test, use }) => {
            return {
                include: globalStylePaths,
                test,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true },
                    },
                    { loader: RawCssLoader },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            implementation: require('postcss'),
                            postcssOptions: postcssOptionsCreator(globalSourceMap),
                        },
                    },
                    ...use,
                ],
            };
        }));
    }
    extraPlugins.push(
    // extract global css from js files into own css file
    new MiniCssExtractPlugin({
        filename: `[name]${hashFormat.extract}.css`,
    }), 
    // suppress empty .js files in css only entry points
    new remove_empty_scripts_plugin_1.RemoveEmptyScriptsPlugin());
    return {
        entry: entryPoints,
        module: { rules },
        plugins: extraPlugins,
    };
}
exports.getStylesConfig = getStylesConfig;
//# sourceMappingURL=styles.js.map