"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeName = void 0;

var _getColorName = require("./get-color-name");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getValues = function getValues(theme, objName) {
  var obj = objName ? theme[objName] : theme;

  if (_typeof(obj) !== 'object') {
    return [];
  }

  return Object.values(obj);
};

var themeName = function themeName(theme, ind) {
  var name = theme.name,
      title = theme.title,
      themeTitle = theme.themeName;
  var providedName = name || title || themeTitle;
  if (providedName) return providedName;
  var colors = [].concat(_toConsumableArray(getValues(theme, 'main')), _toConsumableArray(getValues(theme, 'accent')), _toConsumableArray(getValues(theme, 'background')), _toConsumableArray(getValues(theme, 'text')), _toConsumableArray(getValues(theme))).slice(0, 2);
  var generatedName = colors.map(_getColorName.getColorName).filter(Boolean).reduce(function (fullName, colorName) {
    return "".concat(fullName, " ").concat(colorName);
  }, '').trim();
  if (generatedName) return generatedName;
  return ind !== undefined ? "theme ".concat(ind + 1) : undefined;
};

exports.themeName = themeName;