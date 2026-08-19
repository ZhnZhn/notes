"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.BtSvgMore = exports.BtSvgClose = void 0;
var _styleFn = require("../styleFn");
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("react/jsx-runtime");
const BtSvg = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
  type: "button",
  className: props.className,
  style: props.style,
  title: props.title,
  onClick: props.onClick,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.default, {
    w: props.w,
    h: props.h,
    width: props.width,
    height: props.height,
    children: props.children
  })
});
const CL_BT_SVG_CLOSE = "bt-svg-close";
const BtSvgClose = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)(BtSvg, {
  className: (0, _styleFn.crCn)(CL_BT_SVG_CLOSE, props.className),
  onClick: props.onClick,
  w: "12",
  width: "100%",
  height: "100%",
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 0,0 L 12,12"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 12,0 L 0,12"
  })]
});
exports.BtSvgClose = BtSvgClose;
const CL_BT_SVG_MORE = "bt-svg-more";
const BtSvgMore = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)(BtSvg, {
  className: (0, _styleFn.crCn)(CL_BT_SVG_MORE, props.className),
  style: props.style,
  title: props.title,
  onClick: props.onClick,
  w: "6",
  h: "22",
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
});
exports.BtSvgMore = BtSvgMore;
//# sourceMappingURL=BtSvg.js.map