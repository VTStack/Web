"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWorkspaceRoot = exports.runCommandAndStoreInCloud = void 0;
const cp = require("child_process");
const fs_1 = require("fs");
const path = require("path");
const environment_1 = require("../../utilities/environment");
const axios_1 = require("../../utilities/axios");
const util_1 = require("util");
const zlib_1 = require("zlib");
const output_obfuscator_1 = require("../terminal-output/output-obfuscator");
const print_message_1 = require("../../utilities/print-message");
const { output } = require('../../utilities/nx-imports');
const MAX_CHARACTERS_OUTPUT_CAPTURE = 200000;
function runCommandAndStoreInCloud() {
    return __awaiter(this, void 0, void 0, function* () {
        const taskRunnerOptions = getTaskRunnerOptions();
        const axios = (0, axios_1.createApiAxiosInstance)(taskRunnerOptions);
        const outputObfuscator = new output_obfuscator_1.OutputObfuscator(taskRunnerOptions.maskedProperties);
        const branch = (0, environment_1.getBranch)();
        const runGroup = (0, environment_1.getRunGroup)();
        let userCommandAndArgs;
        const commandStartIndex = process.argv.findIndex((arg) => arg === 'record') + 1;
        if (commandStartIndex < process.argv.length) {
            // Different package managers may remove not the "--" from the command automatically, so account for that
            const sliceOffset = process.argv[commandStartIndex] === '--' ? 1 : 0;
            userCommandAndArgs = process.argv.slice(commandStartIndex + sliceOffset);
        }
        else {
            console.log('Invalid command. Use `nx-cloud record [my command] [my arg1] [my arg...]`');
            process.exit(1);
        }
        const [userCommand, ...userArgs] = userCommandAndArgs;
        const startRecordRunRequest = {
            branch,
            runGroup,
            hashes: [],
        };
        yield (0, axios_1.axiosMultipleTries)(() => axios.post('/nx-cloud/runs/start', startRecordRunRequest));
        const startTime = new Date().toISOString();
        const { statusCode, terminalOutput } = yield spawnUserCommandAndCaptureOutput(userCommand, userArgs);
        const endTime = new Date().toISOString();
        const endRecordOutputRunParams = {
            statusCode,
            terminalOutput,
            userCommandAndArgsString: userCommandAndArgs.join(' '),
            startTime,
            endTime,
            branch,
            runGroup,
        };
        yield endRecordOutputRun(axios, outputObfuscator, taskRunnerOptions, endRecordOutputRunParams);
        process.exit(statusCode);
    });
}
exports.runCommandAndStoreInCloud = runCommandAndStoreInCloud;
function getTaskRunnerOptions() {
    var _a, _b, _c;
    const workspaceRoot = findWorkspaceRoot(process.cwd());
    if (workspaceRoot == null) {
        throw new Error('Unable to locate task runner options.');
    }
    else {
        const taskRunnerOptions = (_c = (_b = (_a = require(`${workspaceRoot.dir}/nx.json`)) === null || _a === void 0 ? void 0 : _a.tasksRunnerOptions) === null || _b === void 0 ? void 0 : _b.default) === null || _c === void 0 ? void 0 : _c.options;
        return taskRunnerOptions;
    }
}
function splitUserCommandAndArgs(userCommandAndArgs) {
    const userCommand = userCommandAndArgs[0];
    let userArgs = [];
    if (userCommandAndArgs.length > 1) {
        userArgs = userCommandAndArgs.slice(1);
    }
    return { userCommand, userArgs };
}
function spawnUserCommandAndCaptureOutput(command, args) {
    return new Promise((res, rej) => {
        try {
            const userCommandProcess = cp.spawn(command, args, {
                stdio: ['inherit', 'pipe', 'pipe', 'ipc'],
            });
            const outLines = [];
            userCommandProcess.stdout.on('data', (chunk) => {
                process.stdout.write(chunk);
                outLines.push(chunk.toString());
            });
            userCommandProcess.stderr.on('data', (chunk) => {
                process.stderr.write(chunk);
                outLines.push(chunk.toString());
            });
            userCommandProcess.on('exit', (exitCode, exitSignal) => {
                const statusCode = exitCode !== null && exitCode !== void 0 ? exitCode : signalToCode(exitSignal || '');
                const joinedOutput = outLines.join('');
                res({
                    statusCode,
                    terminalOutput: joinedOutput,
                });
            });
        }
        catch (e) {
            rej(e);
        }
    });
}
function createTaskDefinitionFromUserCommand(outputObfuscator, params) {
    const sanitizedOutput = outputObfuscator.obfuscate(params.terminalOutput);
    const truncatedOutput = sanitizedOutput.length > MAX_CHARACTERS_OUTPUT_CAPTURE
        ? `TRUNCATED\n\n${sanitizedOutput.slice(sanitizedOutput.length - MAX_CHARACTERS_OUTPUT_CAPTURE)}`
        : sanitizedOutput;
    return {
        taskId: 'nx-cloud-tasks-runner:record-command',
        target: 'record-command',
        projectName: 'nx-cloud-tasks-runner',
        hash: '',
        startTime: params.startTime,
        endTime: params.endTime,
        hashDetails: {},
        params: params.userCommandAndArgsString,
        cacheStatus: 'n/a',
        status: params.statusCode,
        terminalOutput: truncatedOutput,
    };
}
function endRecordOutputRun(axios, obfuscator, taskRunnerOptions, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandWithPrefix = `nx-cloud record -- ${params.userCommandAndArgsString}`;
        const endRunReq = {
            meta: {
                nxCloudVersion: '0.0.0',
            },
            tasks: [createTaskDefinitionFromUserCommand(obfuscator, params)],
            run: {
                command: commandWithPrefix,
                startTime: params.startTime,
                endTime: params.endTime,
                branch: params.branch,
                scan: true,
                runGroup: params.runGroup,
                // only set sha if branch is set because we invoke a separate process,
                // which adds a few millis
                sha: params.branch ? (0, environment_1.extractGitSha)() : undefined,
            },
            machineInfo: (0, environment_1.getMachineInfo)(taskRunnerOptions),
        };
        const uncompressedBuffer = Buffer.from(JSON.stringify(endRunReq));
        const compressedBuffer = yield (0, util_1.promisify)(zlib_1.gzip)(uncompressedBuffer);
        const endRunResp = yield (0, axios_1.axiosMultipleTries)(() => axios.post('/nx-cloud/runs/end', compressedBuffer, {
            headers: Object.assign(Object.assign({}, axios.defaults.headers), { 'Content-Encoding': 'gzip', 'Content-Type': 'application/octet-stream' }),
        }));
        printRecordOutputRunEndMessage(endRunResp.data.runUrl);
    });
}
function printRecordOutputRunEndMessage(runUrl) {
    output.addVerticalSeparator();
    output.note({ title: 'Nx Cloud: Successfully recorded command output' });
    (0, print_message_1.printMessage)(`You can view or share your output by visiting ${runUrl}`);
}
// Everything from here down is ripped from the nx package
// You probably don't want to adjust this manually
/**
 * https://github.com/nrwl/nx/blob/master/packages/nx/src/utils/find-workspace-root.ts
 * Recursive function that walks back up the directory
 * tree to try and find a workspace file.
 *
 * @param dir Directory to start searching with
 */
function findWorkspaceRoot(dir) {
    if ((0, fs_1.existsSync)(path.join(dir, 'angular.json'))) {
        return { type: 'angular', dir };
    }
    if ((0, fs_1.existsSync)(path.join(dir, 'nx.json'))) {
        return { type: 'nx', dir };
    }
    if (path.dirname(dir) === dir) {
        return null;
    }
    return findWorkspaceRoot(path.dirname(dir));
}
exports.findWorkspaceRoot = findWorkspaceRoot;
/**
 * https://github.com/nrwl/nx/blob/master/packages/nx/src/tasks-runner/forked-process-task-runner.ts
 *
 * @param signal
 */
function signalToCode(signal) {
    if (signal === 'SIGHUP')
        return 128 + 1;
    if (signal === 'SIGINT')
        return 128 + 2;
    if (signal === 'SIGTERM')
        return 128 + 15;
    return 128;
}
//# sourceMappingURL=record-output.js.map