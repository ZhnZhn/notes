"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _selectors = _interopRequireDefault(require("../../flux/selectors"));

var _reducer = require("../../flux/column/reducer");

var _CL = require("./CL");

var _TopicDrawerCaption = _interopRequireDefault(require("./TopicDrawerCaption"));

var _TopicList = _interopRequireDefault(require("./TopicList"));

var _DrawerMsgList = _interopRequireDefault(require("../header/DrawerMsgList"));

var _jsxRuntime = require("react/jsx-runtime");

var TopicDrawerMenu = function TopicDrawerMenu(_ref) {
  var board = _ref.board,
      columns = _ref.columns,
      toggleColumn = _ref.toggleColumn;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_DRAWER_LIST,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicDrawerCaption["default"], {
      board: board
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicList["default"], {
      board: board,
      columns: columns,
      toggleColumn: toggleColumn
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerMsgList["default"], {})]
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    board: _selectors["default"].board.currentBoard(state),
    columns: _selectors["default"].column.columns(state)
  };
};

var mapDispatchToProps = {
  toggleColumn: _reducer.toggleColumn
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TopicDrawerMenu);

exports["default"] = _default;
//# sourceMappingURL=TopicDrawerMenu.js.map