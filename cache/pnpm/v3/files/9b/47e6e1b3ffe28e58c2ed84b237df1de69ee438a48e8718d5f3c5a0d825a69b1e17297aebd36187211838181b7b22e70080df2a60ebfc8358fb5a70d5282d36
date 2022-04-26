"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrganizations = void 0;
const IsomorphicClerkContext_1 = require("../contexts/IsomorphicClerkContext");
const useOrganizations = () => {
    const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
    if (!isomorphicClerk.loaded) {
        return {
            isLoaded: false,
            createOrganization: undefined,
            getOrganizationMemberships: undefined,
            getOrganization: undefined,
        };
    }
    const clerk = isomorphicClerk;
    return {
        isLoaded: true,
        createOrganization: clerk.createOrganization,
        getOrganizationMemberships: clerk.getOrganizationMemberships,
        getOrganization: clerk.getOrganization,
    };
};
exports.useOrganizations = useOrganizations;
//# sourceMappingURL=useOrganizations.js.map