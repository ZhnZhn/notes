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

var C = {
  DRAGGING_OVER: 'lightgreen',
  NOT_DRAGGING_OVER: 'transparent'
};

var S = {
  ROOT: {
    padding: 8,
    transition: 'background-color 0.2s easy',
    minHeight: 100
  }
};

var _crRootStyle = function _crRootStyle(is) {
  var _color = is ? C.DRAGGING_OVER : C.NOT_DRAGGING_OVER;
  return {
    backgroundColor: _color
  };
};

var NoteList = function NoteList(props) {
  var innerRef = props.innerRef,
      children = props.children,
      rest = (0, _objectWithoutProperties3.default)(props, ['innerRef', 'children']);

  var _style = _crRootStyle(rest.isDraggingOver);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, rest, {
      ref: innerRef,
      style: (0, _extends3.default)({}, S.ROOT, _style)
    }),
    children
  );
};

exports.default = NoteList;
//# sourceMappingURL=NoteList.js.map