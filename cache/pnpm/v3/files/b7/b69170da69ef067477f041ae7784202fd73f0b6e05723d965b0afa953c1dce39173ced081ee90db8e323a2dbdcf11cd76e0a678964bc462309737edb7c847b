import { CreateOrganizationParams, OrganizationMembershipResource, OrganizationResource } from '@clerk/types';
declare type UseOrganizationsReturn = {
    isLoaded: false;
    createOrganization: undefined;
    getOrganizationMemberships: undefined;
    getOrganization: undefined;
} | {
    isLoaded: true;
    createOrganization: (params: CreateOrganizationParams) => Promise<OrganizationResource>;
    getOrganizationMemberships: () => Promise<OrganizationMembershipResource[]>;
    getOrganization: (organizationId: string) => Promise<OrganizationResource | undefined>;
};
declare type UseOrganizations = () => UseOrganizationsReturn;
export declare const useOrganizations: UseOrganizations;
export {};
//# sourceMappingURL=useOrganizations.d.ts.map