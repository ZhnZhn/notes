"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_HEADER = 'dialog__header',
    CL_CAPTION = 'dialog__caption not-selected',
    CL_CLOSE = 'dialog__svg-close';

var DialogCaption = function DialogCaption(_ref) {
  var rootStyle = _ref.rootStyle,
      svgStyle = _ref.svgStyle,
      caption = _ref.caption,
      onClose = _ref.onClose,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_HEADER,
    style: rootStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      className: CL_CLOSE,
      onClose: onClose
    })]
  });
};

var _default = DialogCaption;
exports["default"] = _default;
//# sourceMappingURL=DialogCaption.js.map