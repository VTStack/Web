"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeContextAndHook = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const assertHelpers_1 = require("../contexts/assertHelpers");
function makeContextAndHook(displayName, assertCtxFn = assertHelpers_1.assertWrappedByClerkProvider) {
    const Ctx = react_1.default.createContext(undefined);
    Ctx.displayName = displayName;
    const useCtx = () => {
        const ctx = react_1.default.useContext(Ctx);
        assertCtxFn(ctx);
        return ctx.value;
    };
    return [Ctx, useCtx];
}
exports.makeContextAndHook = makeContextAndHook;
//# sourceMappingURL=makeContextAndHook.js.map