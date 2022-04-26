"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const utils_1 = require("../utils");
function run(dir, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            options = (0, utils_1.prepareOptions)(options);
            if (options.dryRun) {
                devkit_1.logger.info('Dry-run: The pacakge is not going to be published');
            }
            /*
            Modifying the dist when the user is dry-run mode,
            thanks to the Nx Cache could lead to leading to publishing and unexpected package version
            when the option is removed
            */
            if (options.packageVersion && !options.dryRun) {
                yield (0, utils_1.setPackageVersion)(dir, options.packageVersion);
            }
            const npmOptions = extractOnlyNPMOptions(options);
            const commandToPublish = `npm publish "${dir}" ${getOptionsString(npmOptions)}`;
            const { stdout, stderr } = yield (0, utils_1.execAsync)(commandToPublish);
            devkit_1.logger.info(stdout);
            devkit_1.logger.info(stderr);
            if (options.dryRun) {
                devkit_1.logger.info('The options are:');
                devkit_1.logger.info(JSON.stringify(options, null, 1));
            }
            devkit_1.logger.info('🚀 Successfully published via ngx-deploy-npm! Have a nice day!');
        }
        catch (error) {
            devkit_1.logger.error('❌ An error occurred!');
            throw error;
        }
    });
}
exports.run = run;
/**
 * Extract only the options that the `npm publish` command can process
 *
 * @param param0 All the options sent to ng deploy
 */
function extractOnlyNPMOptions({ access, tag, otp, dryRun, }) {
    return {
        access,
        tag,
        otp,
        dryRun,
    };
}
function getOptionsString(options) {
    return (Object.keys(options)
        // Get only options with value
        .filter(optKey => !!options[optKey])
        // to CMD option
        .map(optKey => ({
        cmdOptions: `--${toKebabCase(optKey)}`,
        value: options[optKey],
    }))
        // to string
        .map(cmdOptionValue => `${cmdOptionValue.cmdOptions} ${cmdOptionValue.value}`)
        .join(' '));
    function toKebabCase(str) {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }
}
//# sourceMappingURL=engine.js.map