"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedValue = exports.getThemeInfo = exports.getThemeInfoList = exports.getTheme = exports.getThemesList = exports.getCurrentInd = exports.createSelector = void 0;

var _themeName = require("@react-theming/theme-name");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createSelector = function createSelector() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var resultFn = args.pop();
  return function (store) {
    var selected = args.map(function (selector) {
      return selector(store);
    });
    return resultFn.apply(void 0, _toConsumableArray(selected).concat([store]));
  };
};

exports.createSelector = createSelector;

var getCurrentInd = function getCurrentInd(store) {
  return store.currentTheme;
};

exports.getCurrentInd = getCurrentInd;

var getThemesList = function getThemesList(store) {
  return store.themesList;
};

exports.getThemesList = getThemesList;
var getTheme = createSelector(getCurrentInd, getThemesList, function (ind, themes) {
  return themes ? themes[ind] : undefined;
});
exports.getTheme = getTheme;
var getThemeInfoList = createSelector(getThemesList, function () {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return list.map(function (theme, ind) {
    return {
      name: (0, _themeName.themeName)(theme, ind),
      theme: theme
    };
  });
});
exports.getThemeInfoList = getThemeInfoList;
var getThemeInfo = createSelector(getCurrentInd, getThemeInfoList, function (ind, themesInfo) {
  return themesInfo ? themesInfo[ind] : undefined;
});
exports.getThemeInfo = getThemeInfo;
var getSelectedValue = createSelector(getTheme, function (theme, store) {
  var selectedValue = store.selectedValue;
  if (!selectedValue) return undefined;
  var name = selectedValue.name,
      namespace = selectedValue.namespace,
      type = selectedValue.type;
  var nestedObj = namespace.reduce(function (subObj, subKey) {
    return subObj[subKey];
  }, theme);
  var value = nestedObj[name];
  return {
    name: name,
    namespace: namespace,
    value: value,
    type: type
  };
});
exports.getSelectedValue = getSelectedValue;