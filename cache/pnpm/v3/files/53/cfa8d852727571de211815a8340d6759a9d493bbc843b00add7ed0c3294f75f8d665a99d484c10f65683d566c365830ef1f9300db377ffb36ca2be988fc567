import { GetToken, SignOut } from '@clerk/types';
declare type UseAuthReturn = {
    isLoaded: false;
    isSignedIn: undefined;
    userId: undefined;
    sessionId: undefined;
    signOut: SignOut;
    getToken: GetToken;
} | {
    isLoaded: true;
    isSignedIn: false;
    userId: null;
    sessionId: null;
    signOut: SignOut;
    getToken: GetToken;
} | {
    isLoaded: true;
    isSignedIn: true;
    userId: string;
    sessionId: string;
    signOut: SignOut;
    getToken: GetToken;
};
declare type UseAuth = () => UseAuthReturn;
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
export declare const useAuth: UseAuth;
export {};
//# sourceMappingURL=useAuth.d.ts.map