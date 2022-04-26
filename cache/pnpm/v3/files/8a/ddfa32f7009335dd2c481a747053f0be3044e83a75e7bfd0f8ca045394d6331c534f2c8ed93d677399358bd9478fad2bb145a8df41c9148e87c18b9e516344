"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkContextWrapper = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const ClientContext_1 = require("./ClientContext");
const IsomorphicClerkContext_1 = require("./IsomorphicClerkContext");
const SessionContext_1 = require("./SessionContext");
const UserContext_1 = require("./UserContext");
function ClerkContextWrapper({ isomorphicClerk, children, clerkLoaded, }) {
    const clerk = isomorphicClerk;
    const [state, setState] = react_1.default.useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
    });
    react_1.default.useEffect(() => {
        return clerk.addListener(e => setState(Object.assign({}, e)));
    }, []);
    const { client, session, user } = state;
    const clerkCtx = react_1.default.useMemo(() => ({ value: clerk }), [clerkLoaded]);
    const clientCtx = react_1.default.useMemo(() => ({ value: client }), [client]);
    const sessionCtx = react_1.default.useMemo(() => ({ value: session }), [session]);
    const userCtx = react_1.default.useMemo(() => ({ value: user }), [user]);
    return (react_1.default.createElement(IsomorphicClerkContext_1.IsomorphicClerkContext.Provider, { value: clerkCtx },
        react_1.default.createElement(ClientContext_1.ClientContext.Provider, { value: clientCtx },
            react_1.default.createElement(SessionContext_1.SessionContext.Provider, { value: sessionCtx },
                react_1.default.createElement(UserContext_1.UserContext.Provider, { value: userCtx },
                    react_1.default.createElement(react_1.default.Fragment, { key: session ? session.id : 'no-users' }, children))))));
}
exports.ClerkContextWrapper = ClerkContextWrapper;
//# sourceMappingURL=ClerkContextWrapper.js.map