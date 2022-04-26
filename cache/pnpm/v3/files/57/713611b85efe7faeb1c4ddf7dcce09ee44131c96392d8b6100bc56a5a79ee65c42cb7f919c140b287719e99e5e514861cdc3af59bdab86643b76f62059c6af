"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.ThemeAvatar = exports.AvatarHolder = exports.Theme = exports.ListHolder = exports.Container = exports.Swatch = void 0;

var _theming = require("@storybook/theming");

var _addonDevkit = require("@storybook/addon-devkit");

var _themeSwatch = require("@react-theming/theme-swatch");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Swatch = (0, _themeSwatch.createSwatch)(_theming.styled);
exports.Swatch = Swatch;
var Container = (0, _theming.styled)(_addonDevkit.Block)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: ", ";\n  color: ", ";\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background.app;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.input.color;
});
exports.Container = Container;

var ListHolder = _theming.styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: auto;\n  height: 1px;\n  flex-grow: 1;\n  padding: ", "px;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.layoutMargin;
});

exports.ListHolder = ListHolder;

var Theme = _theming.styled.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  ", "\n\n  border-radius: ", "px;\n  background-color: ", ";\n  margin: ", "px 0px;\n  padding: 0px;\n  width: 100%;\n  cursor: pointer;\n  color: ", ";\n\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    outline: 1px solid ", ";\n    outline-offset: 2px;\n  }\n\n  display: flex;\n  flex-direction: ", ";\n  justify-content: flex-start;\n  align-items: center;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.input.border;
}, function (_ref5) {
  var current = _ref5.current,
      theme = _ref5.theme;
  return current ? "border-color: ".concat(theme.color.secondary, " !important;") : null;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.appBorderRadius;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.background.hoverable;
}, function (_ref8) {
  var theme = _ref8.theme;
  return Math.floor(theme.layoutMargin / 2);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.input.color;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.appBorderColor;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.dark;
}, function (_ref12) {
  var single = _ref12.single;
  return single ? 'column' : 'row';
});

exports.Theme = Theme;

var AvatarHolder = _theming.styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin: 16px;\n"])), function (_ref13) {
  var single = _ref13.single;
  return single ? '120px' : '36px';
}, function (_ref14) {
  var single = _ref14.single;
  return single ? '120px' : '36px';
});

exports.AvatarHolder = AvatarHolder;

var ThemeAvatar = _theming.styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"])));

exports.ThemeAvatar = ThemeAvatar;

var Title = _theming.styled.h4(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-left: 6px;\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_ref15) {
  var single = _ref15.single;
  return single ? '32px' : '16px';
}, function (_ref16) {
  var single = _ref16.single;
  return single ? 'bold' : 'normal';
});

exports.Title = Title;