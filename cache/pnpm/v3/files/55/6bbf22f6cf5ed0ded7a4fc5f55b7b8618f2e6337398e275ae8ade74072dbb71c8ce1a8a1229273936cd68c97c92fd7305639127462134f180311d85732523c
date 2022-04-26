"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styledComponents = exports.setStyled = void 0;

var styled = function styled() {
  return 'Please Provide styled function';
};

var setStyled = function setStyled(fn) {
  styled = fn;
};

exports.setStyled = setStyled;

var styledComponents = function styledComponents() {
  var Paper = styled.div(function (_ref) {
    var size = _ref.size;
    return {
      borderRadius: '10%',
      overflow: 'hidden',
      width: size || '100%',
      height: size || '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    };
  });
  var Row = styled.div({
    display: 'flex',
    width: '100%',
    height: 1,
    flexGrow: 1
  });
  var Pixel = styled.div({
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: '100%',
    borderRight: '1px inset rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    label: 'pixel'
  });
  return {
    Paper: Paper,
    Row: Row,
    Pixel: Pixel
  };
};

exports.styledComponents = styledComponents;