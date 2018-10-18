'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      rest = (0, _objectWithoutProperties3.default)(props, ['className', 'style', 'innerRef', 'isDraggingOver', 'notDraggingStyle', 'children']),
      _style = _crRootStyle(isDraggingOver, notDraggingStyle);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, rest, {
      ref: innerRef,
      className: className,
      style: (0, _extends3.default)({}, S.ROOT, style, _style)
    }),
    children
  );
};

exports.default = DroppableDiv;
//# sourceMappingURL=DroppableDiv.js.map