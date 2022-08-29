"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var FN_NOOP = function FN_NOOP() {};

var CellColor = function CellColor(_ref) {
  var _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? '-1' : _ref$tabIndex,
      style = _ref.style,
      color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? FN_NOOP : _ref$onClick,
      children = _ref.children;

  var _styleColor = color ? {
    backgroundColor: color
  } : void 0,
      _onClick = function _onClick() {
    return onClick(color);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: tabIndex,
    style: (0, _extends2["default"])({}, style, _styleColor),
    onClick: _onClick,
    children: children
  });
};

var _default = CellColor;
exports["default"] = _default;
//# sourceMappingURL=CellColor.js.map