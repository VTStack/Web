"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatrix = exports.fillPixels = exports.pickColorFromRow = exports.fields_4_colors = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const themePreview = theme => ({
//   main: [theme.mainColor],
//   text: [theme.textColor],
//   accent: [],
//   background: [theme.backgroundColor],
// });
var pixelsOrder = [[1, 1], [1, 2], [1, 0], [0, 0], [0, 1], [1, 3], [0, 3], [0, 2], [2, 1], [2, 2], [2, 3], [3, 3], [3, 2], [2, 0], [3, 0], [3, 1]];
var fields_4_colors = {
  main: [0, 15],
  accent: [8, 15],
  text: [7, 7],
  background: [15, 15]
};
exports.fields_4_colors = fields_4_colors;

var pickColorFromRow = function pickColorFromRow(colorRow, pixelsRow, ind) {
  if (colorRow.length === 0) return null;
  if (colorRow.length === 1 || pixelsRow.length === 1) return colorRow[0];

  if (colorRow.length === 2) {
    if (ind < 2) return colorRow[0];
    return colorRow[1];
  }

  if (colorRow.length === 3) {
    if (ind < 2) return colorRow[0];
    if (ind < 5) return colorRow[1];
    return colorRow[2];
  }

  if (colorRow.length > ind) return colorRow[ind];
  return colorRow[0];
};

exports.pickColorFromRow = pickColorFromRow;

var fillPixels = function fillPixels(fields, theme) {
  var filledMatrix = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]];
  var keys = Object.keys(theme);
  keys.forEach(function (key) {
    var keyFields = fields[key];
    var keyLength = keyFields[1] - keyFields[0] + 1;
    var colorRow = theme[key].slice(0, keyLength);
    var colorLength = colorRow.length;

    var _keyFields = _slicedToArray(keyFields, 2),
        start = _keyFields[0],
        end = _keyFields[1];

    var pixelsRow = pixelsOrder.slice(start, end + 1);
    pixelsRow.forEach(function (_ref, ind) {
      var _ref2 = _slicedToArray(_ref, 2),
          i = _ref2[0],
          j = _ref2[1];

      var color = pickColorFromRow(colorRow, pixelsRow, ind);

      if (color) {
        filledMatrix[i][j] = color;
      }
    });
  });
  return filledMatrix;
};

exports.fillPixels = fillPixels;

var createMatrix = function createMatrix(theme) {
  var main = theme.main,
      text = theme.text,
      accent = theme.accent,
      background = theme.background;
  var matrix = new Array(4).fill(new Array(4).fill(main[0])); // const colorsNumber =
  //   main.length + text.length + accent.length + background.length;

  var filledMatrix = fillPixels(fields_4_colors, theme);
  return filledMatrix;
};

exports.createMatrix = createMatrix;