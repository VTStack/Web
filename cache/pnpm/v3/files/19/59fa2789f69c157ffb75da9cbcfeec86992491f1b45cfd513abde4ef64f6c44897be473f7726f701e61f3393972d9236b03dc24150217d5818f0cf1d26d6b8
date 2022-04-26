/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var EMPTY_ARRAY_STRING = '[\u00A0]';
function stripLeadingHashOrQuestionMark(s) {
    if (s === void 0) { s = ''; }
    if (s && (s.indexOf('?') === 0 || s.indexOf('#') === 0)) {
        return s.slice(1);
    }
    return s;
}
function parseQueryState(queryString) {
    var queryState = {};
    var params = new URLSearchParams(stripLeadingHashOrQuestionMark(queryString));
    params.forEach(function (value, key) {
        if (key in queryState.constructor.prototype) {
            return console.warn("parseQueryState | invalid key \"" + key + "\" will be ignored");
        }
        if (key in queryState) {
            var queryStateForKey = queryState[key];
            if (Array.isArray(queryStateForKey)) {
                queryStateForKey.push(value);
            }
            else {
                queryState[key] = [queryStateForKey, value];
            }
        }
        else {
            queryState[key] = value;
        }
    });
    return Object.keys(queryState).length ? queryState : null;
}
function createMergedQuery() {
    var queryStates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        queryStates[_i] = arguments[_i];
    }
    var mergedQueryStates = Object.assign.apply(Object, __spreadArrays([{}], queryStates));
    var params = new URLSearchParams();
    Object.entries(mergedQueryStates).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        // entries with null or undefined values are removed from the query string
        if (value === null || value === undefined) {
            return;
        }
        if (Array.isArray(value)) {
            if (value.length) {
                value.forEach(function (v) {
                    params.append(key, v || '');
                });
            }
            else {
                params.append(key, EMPTY_ARRAY_STRING);
            }
        }
        else {
            params.append(key, value);
        }
    });
    params.sort();
    return params.toString();
}
function toQueryStateValue(value) {
    if (Array.isArray(value)) {
        return value.map(function (v) { return v.toString(); });
    }
    else if (value || value === '' || value === false || value === 0) {
        if (value instanceof Date) {
            return value.toJSON();
        }
        switch (typeof value) {
            case 'string':
            case 'number':
            case 'boolean':
                return value.toString();
        }
    }
    return null;
}
var newStringArray = function () { return []; };
function parseQueryStateValue(value, defaultValue) {
    var defaultValueType = typeof defaultValue;
    var num;
    if (Array.isArray(defaultValue)) {
        // special case of empty array saved in query string to keep it distinguishable from ['']
        if (value === EMPTY_ARRAY_STRING) {
            return newStringArray();
        }
        return newStringArray().concat(value);
    }
    if (typeof value !== 'string' && !Array.isArray(value)) {
        return null;
    }
    if (defaultValue instanceof Date) {
        var valueAsDate = new Date(value.toString());
        if (!isNaN(valueAsDate.valueOf())) {
            return valueAsDate;
        }
    }
    switch (defaultValueType) {
        case 'string':
            return value.toString();
        case 'number':
            num = Number(value);
            return (num || num === 0 ? num : null);
        case 'boolean':
            if (value === 'true') {
                return true;
            }
            else if (value === 'false') {
                return false;
            }
            break;
    }
    return null;
}

export { EMPTY_ARRAY_STRING, createMergedQuery, newStringArray, parseQueryState, parseQueryStateValue, stripLeadingHashOrQuestionMark, toQueryStateValue };
