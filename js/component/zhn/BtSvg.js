"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.BtSvgMore = exports.BtSvgClose = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("react/jsx-runtime");
const BtSvg = _ref => {
  let {
    className,
    style,
    title,
    onClick,
    w,
    h,
    width,
    height,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: className,
    style: style,
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.default, {
      w: w,
      h: h,
      width: width,
      height: height,
      children: children
    })
  });
};
const CL_BT_SVG_CLOSE = "bt-svg-close";
const BtSvgClose = _ref2 => {
  let {
    className,
    onClick
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(BtSvg, {
    className: (0, _crCn.default)(CL_BT_SVG_CLOSE, className),
    onClick: onClick,
    w: "12",
    width: "100%",
    height: "100%",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M 0,0 L 12,12"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M 12,0 L 0,12"
    })]
  });
};
exports.BtSvgClose = BtSvgClose;
const CL_BT_SVG_MORE = "bt-svg-more";
const BtSvgMore = _ref3 => {
  let {
    className,
    style,
    title,
    onClick
  } = _ref3;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(BtSvg, {
    className: (0, _crCn.default)(CL_BT_SVG_MORE, className),
    style: style,
    title: title,
    onClick: onClick,
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
};
exports.BtSvgMore = BtSvgMore;
//# sourceMappingURL=BtSvg.js.map