"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = void 0;
const info_1 = require("../info");
const FAILED_TO_LOAD_ERROR = 'Clerk: Failed to load Clerk';
const MISSING_PROVIDER_ERROR = 'Clerk: Missing provider';
const MISSING_BODY_ERROR = 'Clerk: Missing <body> element.';
const UNSTABLE_RELEASE_TAGS = ['staging'];
const extractNonStableTag = (packageVersion) => {
    var _a;
    const tag = (_a = packageVersion.match(/-(.*)\./)) === null || _a === void 0 ? void 0 : _a[1];
    return tag && UNSTABLE_RELEASE_TAGS.includes(tag) ? tag : undefined;
};
const extractMajorVersion = (packageVersion) => {
    return packageVersion.split('.')[0];
};
const forceStagingReleaseForClerkFapi = (frontendApi) => {
    return (frontendApi.endsWith('.lclstage.dev') ||
        frontendApi.endsWith('.stgstage.dev') ||
        frontendApi.endsWith('.clerkstage.dev'));
};
function getScriptSrc({ frontendApi, scriptUrl, scriptVariant = '' }) {
    if (scriptUrl) {
        return scriptUrl;
    }
    const variant = scriptVariant ? `${scriptVariant.replace(/\.+$/, '')}.` : '';
    const getUrlForTag = (target) => {
        return `https://${frontendApi}/npm/@clerk/clerk-js@${target}/dist/clerk.${variant}browser.js`;
    };
    if (forceStagingReleaseForClerkFapi(frontendApi)) {
        return getUrlForTag('staging');
    }
    const nonStableTag = extractNonStableTag(info_1.LIB_VERSION);
    if (nonStableTag) {
        return getUrlForTag(nonStableTag);
    }
    return getUrlForTag(extractMajorVersion(info_1.LIB_VERSION));
}
function loadScript(params) {
    return new Promise((resolve, reject) => {
        const { frontendApi } = params;
        if (global.Clerk) {
            resolve(null);
        }
        if (!frontendApi) {
            reject(MISSING_PROVIDER_ERROR);
        }
        const script = document.createElement('script');
        const src = getScriptSrc(params);
        script.setAttribute('data-clerk-frontend-api', frontendApi);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        if (!document.body) {
            reject(MISSING_BODY_ERROR);
        }
        script.addEventListener('load', () => resolve(script));
        script.addEventListener('error', () => reject(FAILED_TO_LOAD_ERROR));
        script.src = src;
        document.body.appendChild(script);
    });
}
exports.loadScript = loadScript;
//# sourceMappingURL=scriptLoader.js.map