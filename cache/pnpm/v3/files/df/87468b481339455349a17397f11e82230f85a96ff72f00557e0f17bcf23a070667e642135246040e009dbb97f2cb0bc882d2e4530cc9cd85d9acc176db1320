/// <reference types="react" />
import type { Clerk, ClerkOptions, ClientResource, LoadedClerk, RedirectOptions, UserResource } from '@clerk/types';
export interface IsomorphicClerkOptions extends ClerkOptions {
    Clerk?: ClerkProp;
    clerkJSUrl?: string;
    clerkJSVariant?: 'headless' | '';
}
export interface BrowserClerkConstructor {
    new (frontendApi: string): BrowserClerk;
}
export declare type WithClerkProp<T> = T & {
    clerk: LoadedClerk;
};
export declare type WithUserProp<T> = T & {
    user: UserResource;
};
export interface MountProps {
    mount: (node: HTMLDivElement, props: any) => void;
    unmount: (node: HTMLDivElement) => void;
    props?: any;
}
export interface BrowserClerk extends Clerk {
    load: (opts?: ClerkOptions) => Promise<void>;
    updateClient: (client: ClientResource) => void;
    onComponentsReady: Promise<void>;
    components: any;
}
export declare type ClerkProp = BrowserClerkConstructor | BrowserClerk | undefined | null;
declare type ButtonProps = {
    afterSignInUrl?: string;
    afterSignUpUrl?: string;
    redirectUrl?: string;
    mode?: 'redirect' | 'modal';
    children?: React.ReactNode;
};
export declare type SignInButtonProps = ButtonProps;
export declare type SignUpButtonProps = ButtonProps;
export declare type SignInWithMetamaskButtonProps = Pick<ButtonProps, 'redirectUrl' | 'children'>;
export declare type RedirectToProps = RedirectOptions;
export {};
//# sourceMappingURL=types.d.ts.map