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

var _crTopicStyle = function _crTopicStyle(is) {
  var dragBg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#1e90ff';
  var notDragBg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';
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
        rest = (0, _objectWithoutProperties3.default)(props, ['draggableProps', 'innerRef', 'isDragging', 'dragHandleProps']),
        _ref = options || {},
        dragBg = _ref.dragBg,
        notDragBg = _ref.notDragBg,
        isDragHanlerProps = _ref.isDragHanlerProps,
        style = draggableProps.style,
        draggablePropsRest = (0, _objectWithoutProperties3.default)(draggableProps, ['style']),
        _style = _crTopicStyle(isDragging, dragBg, notDragBg),
        _dragHandleProps = isDragHanlerProps ? undefined : dragHandleProps;

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({
        ref: innerRef,
        style: (0, _extends3.default)({}, style, _style)
      }, draggablePropsRest, _dragHandleProps),
      _react2.default.createElement(ItemComp, (0, _extends3.default)({
        dragHandleProps: isDragHanlerProps ? dragHandleProps : undefined
      }, rest))
    );
  };
};

var _isComp = function _isComp(Comp) {
  return typeof Comp === 'function';
};

var hocDnD = function hocDnD(optionsOrComp, options) {
  return _isComp(optionsOrComp) ? _hocDnDImpl(optionsOrComp, options) : function (ItemComp) {
    if (!_isComp(ItemComp)) {
      throw new Error('HocDnd expected argument to be react component');
    }
    return _hocDnDImpl(ItemComp, optionsOrComp);
  };
};

exports.default = hocDnD;
//# sourceMappingURL=hocDnD.js.map