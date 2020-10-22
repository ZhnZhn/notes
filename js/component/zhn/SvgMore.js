"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL = "bt-svg-more";

var SvgMore = function SvgMore(_ref) {
  var className = _ref.className,
      style = _ref.style,
      svgStyle = _ref.svgStyle,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL + " " + className,
    style: style,
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      style: svgStyle,
      width: "6px",
      height: "22px",
      viewBox: "0 0 6 22",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "11",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "18",
        r: "2"
      })]
    })
  });
};

SvgMore.defaultProps = {
  className: ''
};
var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map