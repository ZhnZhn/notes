"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _crTopicStyle = function _crTopicStyle(is, dragBg, notDragBg) {
  if (dragBg === void 0) {
    dragBg = '#1e90ff';
  }

  if (notDragBg === void 0) {
    notDragBg = 'transparent';
  }

  return {
    backgroundColor: is ? dragBg : notDragBg
  };
};

var _hocDnDImpl = function _hocDnDImpl(ItemComp, options) {
  return function (props) {
    var draggableProps = props.draggableProps,
        innerRef = props.innerRef,
        isDragging = props.isDragging,
        dragHandleProps = props.dragHandleProps,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["draggableProps", "innerRef", "isDragging", "dragHandleProps"]),
        _ref = options || {},
        dragBg = _ref.dragBg,
        notDragBg = _ref.notDragBg,
        isDragHanlerProps = _ref.isDragHanlerProps,
        style = draggableProps.style,
        draggablePropsRest = (0, _objectWithoutPropertiesLoose2["default"])(draggableProps, ["style"]),
        _style = _crTopicStyle(isDragging, dragBg, notDragBg),
        _dragHandleProps = isDragHanlerProps ? undefined : dragHandleProps;

    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      ref: innerRef,
      style: (0, _extends2["default"])({}, style, _style)
    }, draggablePropsRest, _dragHandleProps), /*#__PURE__*/_react["default"].createElement(ItemComp, (0, _extends2["default"])({
      dragHandleProps: isDragHanlerProps ? dragHandleProps : undefined
    }, rest)));
  };
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var hocDnD = function hocDnD(optionsOrComp, options) {
  return _isFn(optionsOrComp) ? _hocDnDImpl(optionsOrComp, options) : function (ItemComp) {
    /*
    if (!_isComp(ItemComp)) {
      throw new Error('HocDnd expected argument to be react element');
    }
    */
    return _hocDnDImpl(ItemComp, optionsOrComp);
  };
};

var _default = hocDnD;
exports["default"] = _default;
//# sourceMappingURL=hocDnD.js.map