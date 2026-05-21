"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_HEADER = 'dialog__header',
  CL_CAPTION = 'dialog__caption not-selected',
  CL_CLOSE = 'dialog__svg-close';
const DialogCaption = _ref => {
  let {
    rootStyle,
    caption,
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: rootStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      className: CL_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map