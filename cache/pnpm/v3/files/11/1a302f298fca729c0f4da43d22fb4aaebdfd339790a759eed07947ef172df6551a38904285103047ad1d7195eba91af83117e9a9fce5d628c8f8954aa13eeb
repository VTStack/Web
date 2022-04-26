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
exports.FileStorage = void 0;
const path = require("path");
const environment_1 = require("../../utilities/environment");
const axios_1 = require("../../utilities/axios");
const fs_1 = require("fs");
const waiter_1 = require("../../utilities/waiter");
const metric_logger_1 = require("../../utilities/metric-logger");
const axios = require('axios');
const tar = require('tar');
const { output } = require('../../utilities/nx-imports');
class FileStorage {
    constructor(encryption) {
        this.encryption = encryption;
    }
    retrieve(hash, url, cacheDirectory) {
        return __awaiter(this, void 0, void 0, function* () {
            if (environment_1.VERBOSE_LOGGING) {
                output.note({
                    title: `Nx Cloud: Downloading ${hash}`,
                    bodyLines: [`RETRIEVAL URL: ${url}`],
                });
            }
            const tgz = this.createFileName(hash, cacheDirectory);
            const commitFilePath = this.createCommitFilePath(hash, cacheDirectory);
            yield this.downloadFile(url, tgz, commitFilePath);
            this.createCommitFile(commitFilePath);
            if (environment_1.VERBOSE_LOGGING) {
                output.note({ title: `Nx Cloud: Downloaded ${hash}` });
            }
        });
    }
    store(hash, url, cacheDirectory) {
        return __awaiter(this, void 0, void 0, function* () {
            if (environment_1.VERBOSE_LOGGING) {
                output.note({
                    title: `Nx Cloud: Storing ${hash}`,
                    bodyLines: [`STORAGE URL: ${url}`],
                });
            }
            const tgz = yield this.createFile(hash, cacheDirectory);
            yield this.uploadFile(url, tgz);
            if (environment_1.VERBOSE_LOGGING) {
                output.note({ title: `Nx Cloud: Stored ${hash}` });
            }
        });
    }
    createFileName(hash, cacheDirectory) {
        return path.join(cacheDirectory, `${hash}.tar.gz`);
    }
    downloadFile(url, tgz, commitFilePath) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const recorder = (0, metric_logger_1.createMetricRecorder)('retrieveFile');
            let resp;
            try {
                resp = yield (0, axios_1.axiosMultipleTries)(() => axios(url, {
                    method: 'GET',
                    responseType: 'stream',
                    maxContentLength: environment_1.NX_CLOUD_NO_TIMEOUTS
                        ? environment_1.UNLIMITED_FILE_SIZE
                        : environment_1.DEFAULT_FILE_SIZE_LIMIT,
                    maxBodyLength: environment_1.NX_CLOUD_NO_TIMEOUTS
                        ? environment_1.UNLIMITED_FILE_SIZE
                        : environment_1.DEFAULT_FILE_SIZE_LIMIT,
                    timeout: environment_1.NX_CLOUD_NO_TIMEOUTS ? environment_1.UNLIMITED_TIMEOUT : 60000,
                }));
                recorder.recordMetric(Object.assign(Object.assign({}, (0, metric_logger_1.mapRespToPerfEntry)(resp)), { payloadSize: resp.data.headers['content-length'] }));
            }
            catch (e) {
                // Log performance metrics before re-throwing
                recorder.recordMetric(((_a = e === null || e === void 0 ? void 0 : e.axiosException) === null || _a === void 0 ? void 0 : _a.response)
                    ? (0, metric_logger_1.mapRespToPerfEntry)(e.axiosException.response)
                    : metric_logger_1.RUNNER_FAILURE_PERF_ENTRY);
                throw e;
            }
            // if the tar file is here, we wait for the commit file to appear for 25 seconds
            // this is to avoid race conditions, where two processes are downloading the same
            // artifact in parallel
            if ((0, fs_1.existsSync)(tgz)) {
                let i = 0;
                while (i++ < 50) {
                    if ((0, fs_1.existsSync)(commitFilePath))
                        return;
                    yield (0, waiter_1.wait)(500);
                }
            }
            // if the tar file is already here, do nothing, wait for the commit file to appear
            if (this.encryption.hasEncryption()) {
                yield new Promise((res) => {
                    const f = resp.data.pipe((0, fs_1.createWriteStream)(tgz));
                    f.on('close', () => res(null));
                });
                this.encryption.decryptFile(tgz);
                const q = (0, fs_1.createReadStream)(tgz).pipe(tar.x({
                    cwd: path.dirname(tgz),
                }));
                return new Promise((res) => {
                    q.on('close', () => res(null));
                });
            }
            else {
                const q = resp.data.pipe(tar.x({
                    cwd: path.dirname(tgz),
                }));
                return new Promise((res) => {
                    q.on('close', () => res(null));
                });
            }
        });
    }
    createCommitFile(commitFilePath) {
        (0, fs_1.writeFileSync)(commitFilePath, 'true');
    }
    createCommitFilePath(hash, cacheDirectory) {
        return path.join(cacheDirectory, `${hash}.commit`);
    }
    createFile(hash, cacheDirectory) {
        return __awaiter(this, void 0, void 0, function* () {
            const tgz = this.createFileName(hash, cacheDirectory);
            yield tar.c({
                gzip: true,
                file: tgz,
                cwd: cacheDirectory,
            }, [hash]);
            if (this.encryption.hasEncryption()) {
                this.encryption.encryptFile(tgz);
            }
            return tgz;
        });
    }
    uploadFile(url, tgz) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const recorder = (0, metric_logger_1.createMetricRecorder)('storeFile');
            try {
                const resp = yield (0, axios_1.axiosMultipleTries)(() => axios(url, {
                    method: 'PUT',
                    data: (0, fs_1.readFileSync)(tgz),
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'x-ms-blob-type': 'BlockBlob',
                    },
                    maxContentLength: environment_1.NX_CLOUD_NO_TIMEOUTS
                        ? environment_1.UNLIMITED_FILE_SIZE
                        : environment_1.DEFAULT_FILE_SIZE_LIMIT,
                    maxBodyLength: environment_1.NX_CLOUD_NO_TIMEOUTS
                        ? environment_1.UNLIMITED_FILE_SIZE
                        : environment_1.DEFAULT_FILE_SIZE_LIMIT,
                    timeout: environment_1.NX_CLOUD_NO_TIMEOUTS ? environment_1.UNLIMITED_TIMEOUT : 120000,
                }));
                recorder.recordMetric(Object.assign(Object.assign({}, (0, metric_logger_1.mapRespToPerfEntry)(resp)), { payloadSize: resp.config.headers['Content-Length'] }));
            }
            catch (e) {
                recorder.recordMetric(((_a = e === null || e === void 0 ? void 0 : e.axiosException) === null || _a === void 0 ? void 0 : _a.response)
                    ? (0, metric_logger_1.mapRespToPerfEntry)(e.axiosException.response)
                    : metric_logger_1.RUNNER_FAILURE_PERF_ENTRY);
                throw e;
            }
        });
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=file-storage.js.map