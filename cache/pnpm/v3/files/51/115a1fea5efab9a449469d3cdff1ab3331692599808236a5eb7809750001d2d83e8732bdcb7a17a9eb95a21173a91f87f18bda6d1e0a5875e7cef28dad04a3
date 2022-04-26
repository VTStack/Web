import { EmailCodeStrategy, EmailLinkStrategy, OAuthStrategy, PasswordStrategy, PhoneCodeStrategy, Web3Strategy } from './strategies';
export declare type EmailCodeFactor = {
    strategy: EmailCodeStrategy;
    emailAddressId: string;
    safeIdentifier: string;
};
export declare type EmailLinkFactor = {
    strategy: EmailLinkStrategy;
    emailAddressId: string;
    safeIdentifier: string;
};
export declare type PhoneCodeFactor = {
    strategy: PhoneCodeStrategy;
    phoneNumberId: string;
    safeIdentifier: string;
    default?: boolean;
};
export declare type Web3SignatureFactor = {
    strategy: Web3Strategy;
    web3WalletId: string;
};
export declare type PasswordFactor = {
    strategy: PasswordStrategy;
};
export declare type OauthFactor = {
    strategy: OAuthStrategy;
};
export declare type EmailCodeConfig = Omit<EmailCodeFactor, 'safeIdentifier'>;
export declare type EmailLinkConfig = Omit<EmailLinkFactor, 'safeIdentifier'> & {
    redirectUrl: string;
};
export declare type PhoneCodeConfig = Omit<PhoneCodeFactor, 'safeIdentifier'>;
export declare type Web3SignatureConfig = Web3SignatureFactor;
export declare type OAuthConfig = OauthFactor & {
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
};
export declare type PhoneCodeSecondFactorConfig = {
    strategy: PhoneCodeStrategy;
    phoneNumberId?: string;
};
export declare type EmailCodeAttempt = {
    strategy: EmailCodeStrategy;
    code: string;
};
export declare type PhoneCodeAttempt = {
    strategy: PhoneCodeStrategy;
    code: string;
};
export declare type PasswordAttempt = {
    strategy: PasswordStrategy;
    password: string;
};
export declare type Web3Attempt = {
    strategy: Web3Strategy;
    signature: string;
};
//# sourceMappingURL=factors.d.ts.map