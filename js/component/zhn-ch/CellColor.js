"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const FN_NOOP = () => {};
const CellColor = _ref => {
  let {
    tabIndex = '-1',
    style,
    color,
    onClick = FN_NOOP,
    children
  } = _ref;
  const _styleColor = color ? {
      backgroundColor: color
    } : void 0,
    _onClick = () => onClick(color);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: tabIndex,
    style: {
      ...style,
      ..._styleColor
    },
    onClick: _onClick,
    children: children
  });
};
var _default = exports.default = CellColor;
//# sourceMappingURL=CellColor.js.map