"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndOfRunMessage = void 0;
const environment_1 = require("../../utilities/environment");
const print_message_1 = require("../../utilities/print-message");
const chalk = require('chalk');
class EndOfRunMessage {
    constructor(runContext, taskExecutions) {
        this.runContext = runContext;
        this.taskExecutions = taskExecutions;
    }
    printCacheHitsMessage() {
        if (environment_1.AGENT_RUNNING_IN_DISTRIBUTED_EXECUTION)
            return;
        const hits = this.taskExecutions
            .filter((t) => this.runContext.statuses[t.hash] === 'remote-cache-hit')
            .map((t) => t.projectName);
        if (hits.length === 0 && !this.runContext.runUrl) {
            return;
        }
        const tasks = hits.length === 1 ? hits[0] : `${hits.length} tasks`;
        const message = [];
        if (hits.length > 0) {
            message.push(`Nx Cloud made it possible to reuse ${tasks}${this.runContext.runUrl ? `: ${this.runContext.runUrl}` : ''}`);
        }
        else {
            if (this.runContext.runUrl) {
                message.push(`See Nx Cloud run details at ${this.runContext.runUrl}`);
            }
        }
        if (message.length > 0) {
            (0, print_message_1.printMessage)(message.join(' '));
        }
    }
}
exports.EndOfRunMessage = EndOfRunMessage;
//# sourceMappingURL=end-of-run-message.js.map