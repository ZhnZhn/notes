"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _Svg = _interopRequireDefault(require("./Svg"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_BT_SVG_CLOSE = "bt-svg-close";
const SvgClose = _ref => {
  let {
    className,
    style,
    tabIndex,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: tabIndex,
    className: (0, _crCn.default)(CL_BT_SVG_CLOSE, className),
    style: style,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
      w: "12",
      width: "100%",
      height: "100%",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
var _default = exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map