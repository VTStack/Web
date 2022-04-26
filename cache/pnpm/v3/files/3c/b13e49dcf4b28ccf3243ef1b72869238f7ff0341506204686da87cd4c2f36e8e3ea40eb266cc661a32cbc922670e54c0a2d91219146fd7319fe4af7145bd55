"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onThemeSwitchDefault = exports.handleOnSwitch = exports.addBackgroundStyle = void 0;
var LIGHT_BG = '#fff';
var DARK_BG = '#333';
var TAG_SELECTOR = 'addon-backgrounds-color';

var createStyle = function createStyle(color) {
  return "\n.sb-show-main {\n  background: ".concat(color, " !important;\n  transition: background-color 0.3s;\n}\n");
};

var addBackgroundStyle = function addBackgroundStyle(color) {
  if (!color) {
    return;
  }

  var css = createStyle(color);
  var existingStyle = document.getElementById(TAG_SELECTOR);

  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = document.createElement('style');
    style.setAttribute('id', TAG_SELECTOR);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};

exports.addBackgroundStyle = addBackgroundStyle;

var handleOnSwitch = function handleOnSwitch(_ref) {
  var _result$parameters, _result$parameters$ba;

  var theme = _ref.theme,
      onThemeSwitch = _ref.onThemeSwitch;
  var result = onThemeSwitch({
    theme: theme
  });
  var color = (_result$parameters = result.parameters) === null || _result$parameters === void 0 ? void 0 : (_result$parameters$ba = _result$parameters.backgrounds) === null || _result$parameters$ba === void 0 ? void 0 : _result$parameters$ba.default;
  addBackgroundStyle(color);
};

exports.handleOnSwitch = handleOnSwitch;

var onThemeSwitchDefault = function onThemeSwitchDefault(context) {
  var theme = context.theme;
  var background = /dark/i.test(theme.name) ? DARK_BG : LIGHT_BG;
  var parameters = {
    backgrounds: {
      default: background
    }
  };
  return {
    parameters: parameters
  };
};

exports.onThemeSwitchDefault = onThemeSwitchDefault;