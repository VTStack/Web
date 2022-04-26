"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSignOut = exports.createGetToken = void 0;
/**
 * @internal
 */
const clerkLoaded = (isomorphicClerk) => {
    return new Promise(resolve => {
        if (isomorphicClerk.loaded) {
            resolve();
        }
        isomorphicClerk.addOnLoaded(resolve);
    });
};
/**
 * @internal
 */
const createGetToken = (isomorphicClerk) => async (options) => {
    await clerkLoaded(isomorphicClerk);
    if (!isomorphicClerk.session) {
        return null;
    }
    return isomorphicClerk.session.getToken(options);
};
exports.createGetToken = createGetToken;
/**
 * @internal
 */
const createSignOut = (isomorphicClerk) => async (...args) => {
    await clerkLoaded(isomorphicClerk);
    return isomorphicClerk.signOut(...args);
};
exports.createSignOut = createSignOut;
//# sourceMappingURL=utils.js.map