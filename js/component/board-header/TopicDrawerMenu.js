"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _selectors = _interopRequireDefault(require("../../flux/selectors"));

var _actions = _interopRequireDefault(require("../../flux/column/actions"));

var _CL = _interopRequireDefault(require("./CL"));

var _TopicDrawerCaption = _interopRequireDefault(require("./TopicDrawerCaption"));

var _TopicList = _interopRequireDefault(require("./TopicList"));

var _DrawerMsgList = _interopRequireDefault(require("../header/DrawerMsgList"));

var TopicDrawerMenu = function TopicDrawerMenu(_ref) {
  var board = _ref.board,
      columns = _ref.columns,
      toggleColumn = _ref.toggleColumn;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _CL["default"].ROOT
  }, /*#__PURE__*/_react["default"].createElement(_TopicDrawerCaption["default"], {
    board: board
  }), /*#__PURE__*/_react["default"].createElement(_TopicList["default"], {
    board: board,
    columns: columns,
    toggleColumn: toggleColumn
  }), /*#__PURE__*/_react["default"].createElement(_DrawerMsgList["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: _selectors["default"].board.currentBoard(state),
    columns: _selectors["default"].column.columns(state)
  };
};

var mapDispatchToProps = {
  toggleColumn: _actions["default"].toggleColumn
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopicDrawerMenu);

exports["default"] = _default;
//# sourceMappingURL=TopicDrawerMenu.js.map