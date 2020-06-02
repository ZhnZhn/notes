"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var Header = function Header(props) {
  var className = props.className,
      style = props.style,
      theme = props.theme,
      children = props.children,
      TS = theme.createStyle(_Comp["default"]);
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: className,
    style: (0, _extends2["default"])({}, style, TS.COMP)
  }, children);
};

var _default = (0, _withTheme["default"])(Header);

exports["default"] = _default;
//# sourceMappingURL=Header.js.map