"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNoNewMessagesTimeout = void 0;
const environment_1 = require("./environment");
const { output } = require('./nx-imports');
function createNoNewMessagesTimeout() {
    let value = new Object();
    let valueIsSetAt;
    return (newValue) => {
        if (value !== newValue) {
            value = newValue;
            valueIsSetAt = new Date();
        }
        else {
            if (new Date().getTime() - valueIsSetAt.getTime() > environment_1.NO_MESSAGES_TIMEOUT) {
                output.error({
                    title: 'No new messages received in 60 minutes',
                });
                process.exit(1);
            }
        }
    };
}
exports.createNoNewMessagesTimeout = createNoNewMessagesTimeout;
//# sourceMappingURL=create-no-new-messages-timeout.js.map