"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlRewritingStream = void 0;
const tslib_1 = require("tslib");
const stream_1 = require("stream");
function htmlRewritingStream(content) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const chunks = [];
        const rewriter = new (yield Promise.resolve().then(() => require('parse5-html-rewriting-stream')))();
        return {
            rewriter,
            transformedContent: new Promise((resolve) => {
                new stream_1.Readable({
                    encoding: 'utf8',
                    read() {
                        this.push(Buffer.from(content));
                        this.push(null);
                    },
                })
                    .pipe(rewriter)
                    .pipe(new stream_1.Writable({
                    write(chunk, encoding, callback) {
                        chunks.push(typeof chunk === 'string'
                            ? Buffer.from(chunk, encoding)
                            : chunk);
                        callback();
                    },
                    final(callback) {
                        callback();
                        resolve(Buffer.concat(chunks).toString());
                    },
                }));
            }),
        };
    });
}
exports.htmlRewritingStream = htmlRewritingStream;
//# sourceMappingURL=html-rewriting-stream.js.map