"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_SVG_MORE = "bt-svg-more";
const SvgMore = _ref => {
  let {
    className,
    style,
    svgStyle,
    title,
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: (0, _crCn.default)(CL_SVG_MORE, className),
    style: style,
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
      style: svgStyle,
      width: "6px",
      height: "22px",
      viewBox: "0 0 6 22",
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
var _default = exports.default = SvgMore;
//# sourceMappingURL=SvgMore.js.map