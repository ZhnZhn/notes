"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
    minHeight: 100
  },
  S_DRAGGING_OVER_ON = {
    border: '2px dashed lightgreen'
  },
  S_DRAGGING_OVER_OFF = {
    border: '2px dashed transparent'
  };
const DroppableDiv = props => {
  const {
      className,
      style,
      innerRef,
      isDraggingOver,
      draggingOverOffStyle,
      children,
      ...restProps
    } = props,
    _style = isDraggingOver ? S_DRAGGING_OVER_ON : draggingOverOffStyle || S_DRAGGING_OVER_OFF;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ...restProps,
    ref: innerRef,
    className: className,
    style: {
      ...S_DIV,
      ...style,
      ..._style
    },
    children: children
  });
};
var _default = exports.default = DroppableDiv;
//# sourceMappingURL=DroppableDiv.js.map