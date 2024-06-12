"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Svg = _ref => {
  let {
    w,
    h = w,
    children,
    ...restProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    "aria-hidden": "true",
    focusable: "fasle",
    role: "img",
    viewBox: "0 0 " + w + " " + h,
    ...restProps,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: children
  });
};
var _default = exports.default = Svg;
//# sourceMappingURL=Svg.js.map