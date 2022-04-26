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
exports.axiosMultipleTries = exports.createApiAxiosInstance = exports.AxiosException = void 0;
const environment_1 = require("./environment");
const waiter_1 = require("./waiter");
const { output } = require('./nx-imports');
const axios = require('axios');
class AxiosException {
    constructor(type, message, axiosException) {
        this.type = type;
        this.message = message;
        this.axiosException = axiosException;
    }
}
exports.AxiosException = AxiosException;
function createApiAxiosInstance(options) {
    const baseUrl = options.url || 'https://api.nrwl.io';
    const authToken = environment_1.ACCESS_TOKEN ? environment_1.ACCESS_TOKEN : options.accessToken;
    if (!authToken) {
        throw new Error(`Unable to authenticate: ${authToken}`);
    }
    return axios.create({
        baseURL: baseUrl,
        timeout: environment_1.NX_CLOUD_NO_TIMEOUTS ? environment_1.UNLIMITED_TIMEOUT : 10000,
        headers: { authorization: authToken },
    });
}
exports.createApiAxiosInstance = createApiAxiosInstance;
function axiosMultipleTries(axiosCallCreator, attemptsLeft = environment_1.NUMBER_OF_AXIOS_RETRIES) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield axiosCallCreator();
        }
        catch (e) {
            const code = e.code || (e.response && e.response.status);
            // Do not retry if we receive an unauthorized or forbidden response
            if (code === 401 || code === 403) {
                attemptsLeft = 0;
            }
            if (attemptsLeft === 0) {
                let message = e.response
                    ? e.response.data.message
                        ? e.response.data.message
                        : e.response.data
                    : e.message;
                if (typeof message !== 'string') {
                    message = e.message;
                }
                throw new AxiosException('failure', `Error when connecting to Nx Cloud. Code: ${code}. Error: ${message}.`, e);
            }
            else {
                if (environment_1.VERBOSE_LOGGING) {
                    output.note({
                        title: `Received ${code}. Retrying in under 10 seconds.`,
                    });
                }
                yield (0, waiter_1.wait)((environment_1.NUMBER_OF_AXIOS_RETRIES + 1 - attemptsLeft) * 10000 * Math.random());
                return axiosMultipleTries(axiosCallCreator, attemptsLeft - 1);
            }
        }
    });
}
exports.axiosMultipleTries = axiosMultipleTries;
//# sourceMappingURL=axios.js.map