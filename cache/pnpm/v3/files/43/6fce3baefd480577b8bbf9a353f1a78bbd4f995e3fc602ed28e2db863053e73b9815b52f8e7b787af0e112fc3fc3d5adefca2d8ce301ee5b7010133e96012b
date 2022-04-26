"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSwatch = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeSwatch = _interopRequireDefault(require("./ThemeSwatch"));

var _ThemeSwatch2 = require("./ThemeSwatch.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultSwatcher = function defaultSwatcher(theme) {
  if (Array.isArray(theme)) {
    if (theme.length <= 1) {
      var _themeShape = {
        main: [theme[0], theme[0], undefined],
        accent: [theme[0], theme[0], undefined],
        text: [],
        background: []
      };
      return _themeShape;
    }

    if (theme.length <= 3) {
      var _themeShape2 = {
        main: [theme[0], theme[1], theme[2]],
        accent: [theme[0], theme[1], theme[2]],
        text: [theme[3], theme[4]],
        background: [theme[5]]
      };
      return _themeShape2;
    }

    if (theme.length === 5) {
      var baseInd = theme.length - 3;
      var _themeShape3 = {
        main: [theme[1], theme[0], theme[2]],
        accent: [theme[baseInd + 0], theme[baseInd + 1], theme[baseInd + 2]],
        text: [theme[baseInd + 3], theme[baseInd + 4]],
        background: [theme[baseInd + 5]]
      };
      return _themeShape3;
    }

    if (theme.length <= 6) {
      var _baseInd = theme.length - 3;

      var _themeShape4 = {
        main: [theme[1], theme[0], theme[2]],
        accent: [theme[_baseInd + 1], theme[_baseInd + 0], theme[_baseInd + 2]],
        text: [theme[_baseInd + 3], theme[_baseInd + 4]],
        background: [theme[_baseInd + 5]]
      };
      return _themeShape4;
    } // if (theme.length <= 8) {
    //   const baseInd = theme.length - 3;
    //   const themeShape = {
    //     main: [theme[1], theme[0], theme[2]],
    //     accent: [theme[baseInd + 1], theme[baseInd + 0], theme[baseInd + 2]],
    //     text: [theme[baseInd + 3], theme[baseInd + 4]],
    //     background: [theme[baseInd + 5]],
    //   };
    //   return themeShape;
    // }


    var themeShape = {
      main: [theme[1], theme[0], theme[2]],
      accent: [theme[4], theme[3], theme[5]],
      text: [theme[6], theme[8]],
      background: [theme[7]]
    };
    return themeShape;
  }

  return theme;
};

var createSwatch = function createSwatch(styled) {
  var swatcherFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSwatcher;
  (0, _ThemeSwatch2.setStyled)(styled);

  var Swatch = function Swatch(_ref) {
    var theme = _ref.theme,
        props = _objectWithoutProperties(_ref, ["theme"]);

    return /*#__PURE__*/_react["default"].createElement(_ThemeSwatch["default"], _extends({
      theme: swatcherFn(theme)
    }, props));
  };

  return Swatch;
};

exports.createSwatch = createSwatch;