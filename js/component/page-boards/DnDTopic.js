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

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  TOPIC: {
    paddingLeft: 12,
    lineHeight: 2
  },
  COUNTER: {
    float: 'right',
    paddingRight: 12
  }
};

var _crTopicStyle = function _crTopicStyle(is) {
  return {
    backgroundColor: is ? '#1e90ff' : 'transparent'
  };
};

var DnDTopic = function DnDTopic(props) {
  var draggableProps = props.draggableProps,
      innerRef = props.innerRef,
      isDragging = props.isDragging,
      dragHandleProps = props.dragHandleProps,
      title = props.title,
      count = props.count,
      style = draggableProps.style,
      draggablePropsRest = (0, _objectWithoutProperties3.default)(draggableProps, ['style']),
      _style = _crTopicStyle(isDragging);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      ref: innerRef,
      style: (0, _extends3.default)({}, S.TOPIC, style, _style)
    }, draggablePropsRest, dragHandleProps),
    _react2.default.createElement(
      'span',
      null,
      title
    ),
    _react2.default.createElement(_Card2.default.Counter, {
      style: S.COUNTER,
      value: count
    })
  );
};

exports.default = DnDTopic;
//# sourceMappingURL=DnDTopic.js.map