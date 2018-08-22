'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhn/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  HEADER: 'dialog__header',
  CAPTION: 'dialog__caption not-selected',
  CLOSE: 'dialog__svg-close'
};

var DialogCaption = function DialogCaption(_ref) {
  var rootStyle = _ref.rootStyle,
      svgStyle = _ref.svgStyle,
      caption = _ref.caption,
      children = _ref.children,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    {
      className: CL.HEADER,
      style: rootStyle
    },
    _react2.default.createElement(
      'span',
      { className: CL.CAPTION },
      caption
    ),
    children,
    _react2.default.createElement(_SvgClose2.default, {
      className: CL.CLOSE,
      onClose: onClose
    })
  );
};

exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map