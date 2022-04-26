import { MembershipRole } from './organizationMembership';
export interface OrganizationInvitationResource {
    id: string;
    emailAddress: string;
    organizationId: string;
    role: MembershipRole;
    status: OrganizationInvitationStatus;
    createdAt: Date;
    updatedAt: Date;
    revoke: () => Promise<OrganizationInvitationResource>;
}
export declare type OrganizationInvitationStatus = 'pending' | 'accepted' | 'revoked';
//# sourceMappingURL=organizationInvitation.d.ts.map