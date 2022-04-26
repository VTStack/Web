"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = exports.Layout = exports.LayoutProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _rect = _interopRequireDefault(require("@reach/rect"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const layout = /*#__PURE__*/_react.default.createContext({});

const panelDimensions = rect => rect ? {
  width: rect.width,
  height: rect.height,
  isLandscape: rect.width >= rect.height
} : {};

const AddonHolder = (0, _theming.styled)('div')`
  height: 100%;
  label: addon-holder;
`;

const LayoutProvider = ({
  children
}) => /*#__PURE__*/_react.default.createElement(_rect.default, null, ({
  rect,
  ref
}) => {
  const dimensions = panelDimensions(rect);
  return /*#__PURE__*/_react.default.createElement(AddonHolder, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(layout.Provider, {
    value: dimensions
  }, children));
});

exports.LayoutProvider = LayoutProvider;

const StyledOverridden = ({
  className,
  overrides,
  children,
  isLandscape,
  size,
  ...props
}) => /*#__PURE__*/_react.default.createElement("div", _extends({
  className: `${className} ${overrides}`
}, props), children);

const StyledLayout = (0, _theming.styled)(StyledOverridden)`
  display: flex;
  flex-direction: ${({
  isLandscape
}) => isLandscape ? 'row' : 'column'};
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  label: addon-layout;
`;

const Layout = ({
  className,
  children
}) => /*#__PURE__*/_react.default.createElement(layout.Consumer, null, ({
  isLandscape
}) => /*#__PURE__*/_react.default.createElement(StyledLayout, {
  isLandscape: isLandscape,
  overrides: className
}, children));

exports.Layout = Layout;

const px = v => `${v}px`;

const StyledBlock = (0, _theming.styled)(StyledOverridden)`
  ${({
  isLandscape
}) => isLandscape ? 'width' : 'height'}: ${({
  size
}) => size ? px(size) : '2px'};
  ${({
  size
}) => size ? '' : 'flex-grow: 1;'}
  label: addon-block;
`;

const Block = ({
  size,
  children,
  className
}) => /*#__PURE__*/_react.default.createElement(layout.Consumer, null, ({
  isLandscape
}) => /*#__PURE__*/_react.default.createElement(StyledBlock, {
  size: size,
  isLandscape: isLandscape,
  overrides: className
}, children));

exports.Block = Block;