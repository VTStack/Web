"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMessage = void 0;
const { output } = require('./nx-imports');
function printMessage(message) {
    // the new format uses a different offset, so we need to make sure it works with both
    let offset = '  ';
    try {
        require('nx/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle');
        offset = '   ';
    }
    catch (e) { }
    let formattedMessage;
    // TODO(Altan): Remove after Nx 15-ish
    // output.dim causes incompatibility with older versions of Nx, so fall back
    // to old method if function is undefined
    if (typeof output.dim === 'function') {
        formattedMessage = output.dim(message);
    }
    else {
        try {
            // Old (pre 13.4/13.5) method
            formattedMessage = output.colors.gray(message);
        }
        catch (e) {
            // Ultra fallback, we should never hit this
            formattedMessage = message;
        }
    }
    process.stdout.write(`${offset}${formattedMessage}`);
    output.addNewline();
    output.addNewline();
}
exports.printMessage = printMessage;
//# sourceMappingURL=print-message.js.map