"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _selectors = require("../../flux/selectors");

var _BoardCard = _interopRequireDefault(require("./BoardCard"));

var BoardList = function BoardList(_ref) {
  var boardIds = _ref.boardIds,
      boards = _ref.boards;
  return boardIds.map(function (id) {
    return _react["default"].createElement(_BoardCard["default"], {
      key: id,
      id: id
    });
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    boardIds: _selectors.sBoard.boardIds(state),
    boards: _selectors.sBoard.boards(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(BoardList);

exports["default"] = _default;
//# sourceMappingURL=BoardList.js.map