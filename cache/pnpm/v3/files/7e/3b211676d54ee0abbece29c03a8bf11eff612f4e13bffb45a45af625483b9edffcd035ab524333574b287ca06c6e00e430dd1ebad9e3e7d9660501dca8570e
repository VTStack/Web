"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
const AuthContext_1 = require("../contexts/AuthContext");
const IsomorphicClerkContext_1 = require("../contexts/IsomorphicClerkContext");
const errors_1 = require("../errors");
const utils_1 = require("./utils");
/**
 * Returns the current auth state, the user and session ids and the `getToken`
 * that can be used to retrieve the given template or the default Clerk token.
 *
 * Until Clerk loads, `isLoaded` will be set to `false`.
 * Once Clerk loads, `isLoaded` will be set to `true`, and you can
 * safely access the `userId` and `sessionId` variables.
 *
 * For projects using NextJs or Remix, you can have immediate access to this data  during SSR
 * simply by using the `withServerSideAuth` helper.
 *
 * @example
 * A simple example:
 *
 * import { useAuth } from '@clerk/clerk-react'
 *
 * function Hello() {
 *   const { isSignedIn, sessionId, userId } = useAuth();
 *   if(isSignedIn) {
 *     return null;
 *   }
 *   console.log(sessionId, userId)
 *   return <div>...</div>
 * }
 *
 * @example
 * Basic example in a NextJs app. This page will be fully rendered during SSR:
 *
 * import { useAuth } from '@clerk/nextjs'
 * import { withServerSideAuth } from '@clerk/nextjs/api'
 *
 * export getServerSideProps = withServerSideAuth();
 *
 * export HelloPage = () => {
 *   const { isSignedIn, sessionId, userId } = useAuth();
 *   console.log(isSignedIn, sessionId, userId)
 *   return <div>...</div>
 * }
 */
const useAuth = () => {
    const { sessionId, userId } = (0, AuthContext_1.useAuthContext)();
    const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
    const getToken = (0, utils_1.createGetToken)(isomorphicClerk);
    const signOut = (0, utils_1.createSignOut)(isomorphicClerk);
    if (sessionId === undefined && userId === undefined) {
        return {
            isLoaded: false,
            isSignedIn: undefined,
            sessionId,
            userId,
            signOut,
            getToken,
        };
    }
    if (sessionId === null && userId === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            sessionId,
            userId,
            signOut,
            getToken,
        };
    }
    if (!!sessionId && !!userId) {
        return {
            isLoaded: true,
            isSignedIn: true,
            sessionId,
            userId,
            signOut,
            getToken,
        };
    }
    throw new Error(errors_1.invalidStateError);
};
exports.useAuth = useAuth;
//# sourceMappingURL=useAuth.js.map