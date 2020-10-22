"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.HEADER,
    style: rootStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL.CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      className: CL.CLOSE,
      onClose: onClose
    })]
  });
};

var _default = DialogCaption;
exports["default"] = _default;
//# sourceMappingURL=DialogCaption.js.map