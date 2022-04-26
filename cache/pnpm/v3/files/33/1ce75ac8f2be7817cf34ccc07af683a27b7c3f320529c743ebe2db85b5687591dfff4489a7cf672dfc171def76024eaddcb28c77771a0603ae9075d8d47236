"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactColor = require("react-color");

var styled = _interopRequireWildcard(require("./ColorDetails.styled"));

var _Toolbar = _interopRequireDefault(require("../UI/Toolbar"));

var _Caption = _interopRequireDefault(require("../UI/Caption"));

var _IconButton = _interopRequireDefault(require("../UI/IconButton"));

var _Text = _interopRequireDefault(require("../UI/Text"));

var _clipboard = require("../../utils/clipboard");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorDetails = function ColorDetails(_ref) {
  var selectedValue = _ref.selectedValue,
      onChange = _ref.onChange;

  var _ref2 = selectedValue || {},
      value = _ref2.value,
      name = _ref2.name,
      type = _ref2.type;

  var isColor = type === 'color';

  var handleChange = function handleChange(colorInfo) {
    var hex = colorInfo.hex;
    onChange(hex);
  };

  return /*#__PURE__*/_react.default.createElement(styled.Container, {
    size: 250
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Caption.default, null, name || 'Select color')), /*#__PURE__*/_react.default.createElement(styled.PickerHolder, null, isColor && /*#__PURE__*/_react.default.createElement(_reactColor.ChromePicker, {
    color: value,
    onChangeComplete: handleChange
  })), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    footer: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    icon: "copy",
    title: "copy to clipboard",
    onClick: (0, _clipboard.copyToClipboard)(value)
  }), /*#__PURE__*/_react.default.createElement(_Text.default, null, value)));
};

var _default = ColorDetails;
exports.default = _default;