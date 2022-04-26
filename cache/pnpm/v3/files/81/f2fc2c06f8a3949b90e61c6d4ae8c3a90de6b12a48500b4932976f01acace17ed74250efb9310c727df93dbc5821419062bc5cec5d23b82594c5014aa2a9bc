"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyToClipboard = void 0;

/* eslint-disable no-undef */
var copyToClipboard = function copyToClipboard(str) {
  return function () {
    var el = window.document.createElement('textarea');
    el.value = str;
    window.document.body.appendChild(el);
    el.select();
    window.document.execCommand('copy');
    window.document.body.removeChild(el);
  };
};

exports.copyToClipboard = copyToClipboard;