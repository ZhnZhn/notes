"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Svg = _ref => {
  let {
    w,
    h = w,
    width,
    height,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    "aria-hidden": "true",
    focusable: "fasle",
    role: "img",
    viewBox: `0 0 ${w} ${h}`,
    width: width || w,
    height: height || h,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: children
  });
};
var _default = exports.default = Svg;
//# sourceMappingURL=Svg.js.map