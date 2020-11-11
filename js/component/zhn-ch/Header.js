"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var Header = function Header(_ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children;
  var TS = (0, _useTheme["default"])(_Comp["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
    className: className,
    style: (0, _extends2["default"])({}, style, TS.COMP),
    children: children
  });
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map