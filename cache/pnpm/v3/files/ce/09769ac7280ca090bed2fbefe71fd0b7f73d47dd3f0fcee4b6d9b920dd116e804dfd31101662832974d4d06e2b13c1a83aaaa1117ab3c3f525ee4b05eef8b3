"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyze = void 0;
const chalk = require("chalk");
const devkit_1 = require("@nrwl/devkit");
const formatBytes = (bytes) => {
    if (bytes === 0)
        return '0 Byte';
    const k = 1000;
    const dm = 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
function analyze() {
    return {
        name: 'rollup-plugin-nx-analyzer',
        renderChunk(source, chunk) {
            const sourceBytes = formatBytes(source.length);
            const fileName = chunk.fileName;
            devkit_1.logger.info(`  ${chalk.bold(fileName)} ${chalk.cyan(sourceBytes)}`);
        },
    };
}
exports.analyze = analyze;
//# sourceMappingURL=analyze-plugin.js.map