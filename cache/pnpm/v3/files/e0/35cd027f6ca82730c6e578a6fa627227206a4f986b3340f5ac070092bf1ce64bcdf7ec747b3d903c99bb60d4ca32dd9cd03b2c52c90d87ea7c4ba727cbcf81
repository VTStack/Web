"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _theming.styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  border-radius: 2px;\n  padding: 0;\n  background-color: unset;\n  height: 20px;\n  width: 20px;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  :hover {\n    background-color: white;\n    svg {\n      stroke: #eeeeee;\n    }\n  }\n"])));

var copyIcon = /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}));

var icons = {
  copy: copyIcon
};

var IconButton = function IconButton(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      icon = _ref.icon;
  var svg = icons[icon];
  return /*#__PURE__*/_react.default.createElement(Button, {
    onClick: onClick,
    title: title
  }, svg);
};

var _default = IconButton;
exports.default = _default;