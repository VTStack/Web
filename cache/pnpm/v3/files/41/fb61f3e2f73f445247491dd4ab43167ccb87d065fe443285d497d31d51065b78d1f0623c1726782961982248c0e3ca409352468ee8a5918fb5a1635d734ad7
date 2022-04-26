"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJsonView = _interopRequireDefault(require("@usulpro/react-json-view"));

var _theming = require("@storybook/theming");

var styled = _interopRequireWildcard(require("./ThemeBrowser.styled"));

var _Toolbar = _interopRequireDefault(require("../UI/Toolbar"));

var _Caption = _interopRequireDefault(require("../UI/Caption"));

var _IconButton = _interopRequireDefault(require("../UI/IconButton"));

var _Text = _interopRequireDefault(require("../UI/Text"));

var _clipboard = require("../../utils/clipboard");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showThemePath = function showThemePath(selectedValue) {
  if (!selectedValue) return 'select value';

  try {
    var namespace = selectedValue.namespace,
        name = selectedValue.name;
    var path = namespace.join('.');
    var fullPath = "".concat(path, ".").concat(name);
    var themeProp = "${({ theme }) => theme.".concat(fullPath, "}");
    return themeProp;
  } catch (err) {
    return 'try to select value';
  }
};

var ThemeBrowser = function ThemeBrowser(_ref) {
  var theme = _ref.theme,
      themeInfo = _ref.themeInfo,
      selectValue = _ref.selectValue,
      selectedValue = _ref.selectedValue;
  var sbTheme = (0, _theming.useTheme)();
  var jsTheme = sbTheme.base === 'light' ? 'shapeshifter:inverted' : 'codeschool';
  var footerAction = showThemePath(selectedValue);
  return /*#__PURE__*/_react.default.createElement(styled.Container, null, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Caption.default, null, themeInfo.name)), /*#__PURE__*/_react.default.createElement(styled.ThemeHolder, null, /*#__PURE__*/_react.default.createElement(_reactJsonView.default, {
    src: theme,
    onSelect: selectValue,
    name: null,
    theme: jsTheme
  })), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    footer: true
  }, footerAction && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    icon: "copy",
    title: "copy to clipboard",
    onClick: (0, _clipboard.copyToClipboard)(footerAction)
  }), /*#__PURE__*/_react.default.createElement(_Text.default, null, footerAction)));
};

var _default = ThemeBrowser;
exports.default = _default;