"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT_SVG_CLOSE = "bt-svg-close";

var SvgClose = function SvgClose(_ref) {
  var className = _ref.className,
      style = _ref.style,
      tabIndex = _ref.tabIndex,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: tabIndex,
    className: (0, _crCn["default"])(CL_BT_SVG_CLOSE, className),
    style: style,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};

var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map