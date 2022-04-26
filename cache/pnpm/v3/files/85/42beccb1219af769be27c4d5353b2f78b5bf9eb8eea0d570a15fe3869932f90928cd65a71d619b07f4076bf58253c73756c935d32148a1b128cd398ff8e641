"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _addonDevkit = require("@storybook/addon-devkit");

var _selectors = require("../selectors");

var _SelectTheme = _interopRequireDefault(require("./components/SelectTheme"));

var _ThemeBrowser = _interopRequireDefault(require("./components/ThemeBrowser"));

require("../config");

var _ColorDetails = _interopRequireDefault(require("./components/ColorDetails"));

var actions = _interopRequireWildcard(require("../actions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddonThemingPanel = function AddonThemingPanel(_ref) {
  var theme = _ref.theme,
      themeInd = _ref.themeInd,
      themeInfoList = _ref.themeInfoList,
      themeInfo = _ref.themeInfo,
      selectedValue = _ref.selectedValue,
      setCurrent = _ref.setCurrent,
      selectValue = _ref.selectValue,
      changeSelectedColor = _ref.changeSelectedColor,
      isFirstDataReceived = _ref.isFirstDataReceived,
      api = _ref.api;
  window.api = api;

  _react.default.useEffect(function () {
    if (themeInd === null) {
      var storedThemeInd = api.getQueryParam('themeInd');
      setCurrent(storedThemeInd || 0);
    }
  }, [themeInd]);

  return isFirstDataReceived && themeInd !== null ? /*#__PURE__*/_react.default.createElement(_addonDevkit.Layout, {
    name: "adk-tmp"
  }, /*#__PURE__*/_react.default.createElement(_SelectTheme.default, {
    themeInfoList: themeInfoList,
    themeInd: themeInd,
    setCurrent: setCurrent
  }), /*#__PURE__*/_react.default.createElement(_ThemeBrowser.default, {
    theme: theme,
    themeInfo: themeInfo,
    selectValue: selectValue,
    selectedValue: selectedValue
  }), /*#__PURE__*/_react.default.createElement(_ColorDetails.default, {
    selectedValue: selectedValue,
    onChange: changeSelectedColor
  })) : /*#__PURE__*/_react.default.createElement("p", null, "Waiting for data");
};

(0, _addonDevkit.register)({
  themeInfoList: _selectors.getThemeInfoList,
  theme: _selectors.getTheme,
  themeInfo: _selectors.getThemeInfo,
  themeInd: _selectors.getCurrentInd,
  selectedValue: _selectors.getSelectedValue
}, function (_ref2) {
  var global = _ref2.global;
  return {
    setCurrent: global(actions.setCurrent),
    selectValue: global(actions.selectValue),
    changeSelectedColor: global(actions.changeSelectedColor)
  };
})(AddonThemingPanel);