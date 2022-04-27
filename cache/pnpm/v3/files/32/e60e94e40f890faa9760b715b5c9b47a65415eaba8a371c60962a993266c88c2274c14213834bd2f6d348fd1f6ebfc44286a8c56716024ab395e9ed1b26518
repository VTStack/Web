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
exports.schematic = exports.generator = void 0;
const fs_1 = require("fs");
const rxjs_1 = require("rxjs");
function updateNxJson(json, token) {
    var _a, _b, _c;
    const alreadySetOptions = (_c = (_b = (_a = json.tasksRunnerOptions) === null || _a === void 0 ? void 0 : _a.default) === null || _b === void 0 ? void 0 : _b.options) !== null && _c !== void 0 ? _c : {};
    const options = Object.assign(Object.assign({}, alreadySetOptions), { accessToken: token });
    // TODO: remove after Nx 13 is out
    if (process.env.NRWL_API) {
        options.url = process.env.NRWL_API;
    }
    if (process.env.NX_CLOUD_API) {
        options.url = process.env.NX_CLOUD_API;
    }
    json.tasksRunnerOptions = {
        default: {
            runner: '@nrwl/nx-cloud',
            options,
        },
    };
}
function updateNxJsonUsingNx(host, token) {
    try {
        const jsonUtils = require('nx/src/utils/json');
        const json = jsonUtils.parseJson(host.read('nx.json', 'utf-8'));
        updateNxJson(json, token);
        host.write('nx.json', jsonUtils.serializeJson(json));
    }
    catch (ee) {
        const json = JSON.parse(host.read('nx.json', 'utf-8'));
        updateNxJson(json, token);
        host.write('nx.json', JSON.stringify(json, null, 2));
    }
}
function updateNxJsonUsingNrwlWorkspace(token) {
    return require('@nrwl/workspace').updateJsonInTree('nx.json', (json) => {
        updateNxJson(json, token);
        return json;
    });
}
function readNpmScope() {
    const nxJson = JSON.parse((0, fs_1.readFileSync)('nx.json').toString());
    return nxJson.npmScope;
}
function removeTrailingSlash(apiUrl) {
    return apiUrl[apiUrl.length - 1] === '/'
        ? apiUrl.substr(0, apiUrl.length - 1)
        : apiUrl;
}
function createNxCloudWorkspace(workspaceName) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = removeTrailingSlash(process.env.NX_CLOUD_API || process.env.NRWL_API || `https://api.nrwl.io`);
        const response = yield require('axios').post(`${apiUrl}/nx-cloud/create-org-and-workspace`, {
            workspaceName,
        });
        if (response.data.message) {
            throw new Error(response.data.message);
        }
        return response.data;
    });
}
function printMessage(url) {
    const { output } = require('../../utilities/nx-imports');
    let host = 'nx.app';
    try {
        host = new (require('url').URL)(url).host;
    }
    catch (e) { }
    output.note({
        title: `Nx Cloud has been enabled`,
        bodyLines: [
            `Your workspace is currently public. Anybody with code access can view the workspace on ${host}. `,
            `You can connect the workspace to your Nx Cloud account at ${url} (You can do this later.)`,
        ],
    });
}
function printMessageTaskExecutor(url) {
    return {
        name: 'NxCloudPrintMessage',
        create: () => {
            return Promise.resolve(() => {
                return new rxjs_1.Observable((obs) => {
                    printMessage(url);
                    obs.next();
                    obs.complete();
                });
            });
        },
    };
}
function generator(host) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = yield createNxCloudWorkspace(readNpmScope());
        updateNxJsonUsingNx(host, r.token);
        return () => printMessage(r.url);
    });
}
exports.generator = generator;
function schematic() {
    return () => __awaiter(this, void 0, void 0, function* () {
        const r = yield createNxCloudWorkspace(readNpmScope());
        return (host, context) => {
            const engineHost = context.engine.workflow.engineHost;
            engineHost.registerTaskExecutor(printMessageTaskExecutor(r.url));
            context.addTask({
                toConfiguration() {
                    return { name: 'NxCloudPrintMessage' };
                },
            });
            updateNxJsonUsingNrwlWorkspace(r.token)(host, context);
        };
    });
}
exports.schematic = schematic;
//# sourceMappingURL=init.js.map