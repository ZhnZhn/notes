"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "style", "innerRef", "isDraggingOver", "notDraggingStyle", "children"];
var S = {
  ROOT: {
    minHeight: 100
  },
  DRAGGING_OVER: {
    border: '2px dashed lightgreen'
  },
  NOT_DRAGGING_OVER: {
    border: '2px dashed transparent'
  }
};

var _crRootStyle = function _crRootStyle(is, notDraggingStyle) {
  return is ? S.DRAGGING_OVER : notDraggingStyle || S.NOT_DRAGGING_OVER;
};

var DroppableDiv = function DroppableDiv(props) {
  var className = props.className,
      style = props.style,
      innerRef = props.innerRef,
      isDraggingOver = props.isDraggingOver,
      notDraggingStyle = props.notDraggingStyle,
      children = props.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded),
      _style = _crRootStyle(isDraggingOver, notDraggingStyle);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({}, rest, {
    ref: innerRef,
    className: className,
    style: (0, _extends2["default"])({}, S.ROOT, style, _style),
    children: children
  }));
};

var _default = DroppableDiv;
exports["default"] = _default;
//# sourceMappingURL=DroppableDiv.js.map