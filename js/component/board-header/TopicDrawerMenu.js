'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selectors = require('../../flux/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../flux/column/actions');

var _actions2 = _interopRequireDefault(_actions);

var _CL = require('./CL');

var _CL2 = _interopRequireDefault(_CL);

var _TopicDrawerCaption = require('./TopicDrawerCaption');

var _TopicDrawerCaption2 = _interopRequireDefault(_TopicDrawerCaption);

var _TopicList = require('./TopicList');

var _TopicList2 = _interopRequireDefault(_TopicList);

var _DrawerMsgList = require('../header/DrawerMsgList');

var _DrawerMsgList2 = _interopRequireDefault(_DrawerMsgList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicDrawerMenu = function TopicDrawerMenu(_ref) {
  var board = _ref.board,
      columns = _ref.columns,
      toggleColumn = _ref.toggleColumn;
  return _react2.default.createElement(
    'div',
    { className: _CL2.default.ROOT },
    _react2.default.createElement(_TopicDrawerCaption2.default, {
      board: board
    }),
    _react2.default.createElement(_TopicList2.default, {
      board: board,
      columns: columns,
      toggleColumn: toggleColumn
    }),
    _react2.default.createElement(_DrawerMsgList2.default, null)
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: _selectors2.default.board.currentBoard(state),
    columns: _selectors2.default.column.columns(state)
  };
};

var mapDispatchToProps = {
  toggleColumn: _actions2.default.toggleColumn
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopicDrawerMenu);
//# sourceMappingURL=TopicDrawerMenu.js.map