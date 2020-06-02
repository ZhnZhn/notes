"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));

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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: CL.HEADER,
    style: rootStyle
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: CL.CAPTION
  }, caption), children, /*#__PURE__*/_react["default"].createElement(_SvgClose["default"], {
    className: CL.CLOSE,
    onClose: onClose
  }));
};

var _default = DialogCaption;
exports["default"] = _default;
//# sourceMappingURL=DialogCaption.js.map