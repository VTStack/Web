import { IdentificationLinkResource } from './identificationLink';
import { ClerkResource } from './resource';
import { PhoneCodeStrategy } from './strategies';
import { VerificationResource } from './verification';
export declare type PhoneNumberVerificationStrategy = PhoneCodeStrategy;
export declare type PreparePhoneNumberVerificationParams = {
    strategy: PhoneNumberVerificationStrategy;
};
export declare type AttemptPhoneNumberVerificationParams = {
    code: string;
};
export declare type SetReservedForSecondFactorParams = {
    reserved: boolean;
};
export interface PhoneNumberResource extends ClerkResource {
    id: string;
    phoneNumber: string;
    verification: VerificationResource;
    reservedForSecondFactor: boolean;
    defaultSecondFactor: boolean;
    linkedTo: IdentificationLinkResource[];
    toString: () => string;
    prepareVerification: () => Promise<PhoneNumberResource>;
    attemptVerification: (params: AttemptPhoneNumberVerificationParams) => Promise<PhoneNumberResource>;
    makeDefaultSecondFactor: () => Promise<PhoneNumberResource>;
    setReservedForSecondFactor: (params: SetReservedForSecondFactorParams) => Promise<PhoneNumberResource>;
    destroy: () => Promise<void>;
}
//# sourceMappingURL=phoneNumber.d.ts.map