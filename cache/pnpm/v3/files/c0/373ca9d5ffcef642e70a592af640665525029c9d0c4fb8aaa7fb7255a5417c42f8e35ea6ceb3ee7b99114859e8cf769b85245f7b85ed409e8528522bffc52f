"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorName = void 0;

var _nearestColor = _interopRequireDefault(require("nearest-color"));

var _colorNameList = _interopRequireDefault(require("color-name-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = _colorNameList["default"].reduce(function (o, _ref) {
  var name = _ref.name,
      hex = _ref.hex;
  return Object.assign(o, _defineProperty({}, name, hex));
}, {});

var nearest = _nearestColor["default"].from(colors);

var getColorName = function getColorName(color) {
  try {
    if (!color) return undefined;
    var colorInfo = nearest(color);
    if (!colorInfo) return undefined;
    return colorInfo.name;
  } catch (err) {
    return undefined;
  }
};

exports.getColorName = getColorName;