"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _flatten = require("@react-theming/flatten");

var styled = _interopRequireWildcard(require("./SelectTheme.styled"));

var _Toolbar = _interopRequireDefault(require("../UI/Toolbar"));

var _Caption = _interopRequireDefault(require("../UI/Caption"));

var _IconButton = _interopRequireDefault(require("../UI/IconButton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var materialPreview = function materialPreview(_ref) {
  var palette = _ref.palette;
  return {
    main: [palette.primary.main, palette.primary.light, palette.primary.dark],
    text: [palette.text.secondary],
    accent: [palette.secondary.main, palette.secondary.light, palette.secondary.dark],
    background: [palette.text.primary]
  };
};

var SelectTheme = function SelectTheme(_ref2) {
  var themeInfoList = _ref2.themeInfoList,
      themeInd = _ref2.themeInd,
      setCurrent = _ref2.setCurrent;
  if (!themeInfoList) return 'No themes info';
  var count = themeInfoList.length;
  var isMulti = count > 1;
  var isSingle = count <= 1;
  return /*#__PURE__*/_react.default.createElement(styled.Container, {
    size: 300
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Caption.default, null, isMulti ? "".concat(count, " themes") : 'Single Theme')), /*#__PURE__*/_react.default.createElement(styled.ListHolder, null, /*#__PURE__*/_react.default.createElement("ul", null, themeInfoList.map(function (_ref3, ind) {
    var name = _ref3.name,
        theme = _ref3.theme;
    var colorList;

    if (theme.palette && theme.palette.primary && theme.palette.primary.main) {
      colorList = materialPreview(theme);
    } else {
      var _flattenTheme = (0, _flatten.flattenTheme)(theme),
          flattenColors = _flattenTheme.flattenColors;

      colorList = flattenColors.map(function (_ref4) {
        var original = _ref4.original;
        return original;
      });
    }

    return /*#__PURE__*/_react.default.createElement("li", {
      key: name
    }, /*#__PURE__*/_react.default.createElement(styled.Theme, {
      onClick: function onClick() {
        return setCurrent(ind);
      },
      current: ind === themeInd,
      single: isSingle
    }, /*#__PURE__*/_react.default.createElement(styled.AvatarHolder, {
      single: isSingle
    }, /*#__PURE__*/_react.default.createElement(styled.ThemeAvatar, null, /*#__PURE__*/_react.default.createElement(styled.Swatch, {
      theme: colorList
    }))), /*#__PURE__*/_react.default.createElement(styled.Title, {
      single: isSingle
    }, name)));
  }))), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    footer: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    title: "download"
  })));
};

var _default = SelectTheme;
exports.default = _default;