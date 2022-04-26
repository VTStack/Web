"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorString = exports.colorModel = void 0;

var _colorRgba = _interopRequireDefault(require("color-rgba"));

var _isColorStop = _interopRequireDefault(require("is-color-stop"));

var _color = _interopRequireDefault(require("color"));

var _rgbHex = _interopRequireDefault(require("rgb-hex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isRGB = function isRGB(str) {
  return /^rgb/.test(str);
};

var isHSL = function isHSL(str) {
  return /^hsl/.test(str);
};

var isHex = function isHex(str) {
  return /^#/.test(str);
};

var round = function round(values) {
  return values.map(function (v) {
    return Math.round(v * 100) / 100;
  });
};

var colorModel = function colorModel(string) {
  if (!string) {
    return null;
  }

  var isColor = _isColorStop["default"].isColor(string);

  if (!isColor) {
    return null;
  }

  var values = (0, _colorRgba["default"])(string);

  if (!values || !values.length) {
    return null;
  }

  if (values[3] === 1) {
    values.pop();
  }

  var model = {
    values: round(values),
    format: 'keyword',
    isChanged: false,
    original: string
  };

  if (isRGB(string)) {
    model.format = 'rgb';
  }

  if (isHSL(string)) {
    model.format = 'hsl';
  }

  if (isHex(string)) {
    model.format = 'hex';
  }

  return model;
};

exports.colorModel = colorModel;

var colorString = function colorString(model) {
  var format = model.format,
      values = model.values,
      isChanged = model.isChanged,
      original = model.original;

  if (!isChanged) {
    return original;
  }

  var color = _color["default"].rgb(values);

  if (format === 'hex' || format === 'keyword') {
    return "#".concat(_rgbHex["default"].apply(void 0, _toConsumableArray(values)).toLowerCase());
  }

  if (format === 'rgb') {
    return color.rgb().string();
  }

  return color.hsl().string();
};

exports.colorString = colorString;