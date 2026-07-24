"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _jsxRuntime = require("react/jsx-runtime");
const _crTopicStyle = function (is, dragBg, notDragBg) {
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
const _hocDnDImpl = (ItemComp, options) => props => {
  const {
      draggableProps,
      innerRef,
      isDragging,
      dragHandleProps,
      ...rest
    } = props,
    {
      dragBg,
      notDragBg,
      isDragHanlerProps
    } = options || {},
    {
      style,
      ...draggablePropsRest
    } = draggableProps,
    _style = _crTopicStyle(isDragging, dragBg, notDragBg),
    _dragHandleProps = isDragHanlerProps ? void 0 : dragHandleProps;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: innerRef,
    style: {
      ...style,
      ..._style
    },
    ...draggablePropsRest,
    ..._dragHandleProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemComp, {
      dragHandleProps: isDragHanlerProps ? dragHandleProps : undefined,
      ...rest
    })
  });
};
const hocDnD = (optionsOrComp, options) => (0, _isTypeFn.isFn)(optionsOrComp) ? _hocDnDImpl(optionsOrComp, options) : ItemComp => {
  /*
  if (!_isComp(ItemComp)) {
    throw new Error('HocDnd expected argument to be react element');
  }
  */
  return _hocDnDImpl(ItemComp, optionsOrComp);
};
var _default = exports.default = hocDnD;
//# sourceMappingURL=hocDnD.js.map