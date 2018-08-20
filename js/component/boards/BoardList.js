'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selectors = require('../../flux/selectors');

var _BoardCard = require('./BoardCard');

var _BoardCard2 = _interopRequireDefault(_BoardCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const CL = 'container-list';

var BoardList = function BoardList(_ref) {
  var boardIds = _ref.boardIds,
      boards = _ref.boards;

  return boardIds.map(function (id) {
    return _react2.default.createElement(_BoardCard2.default, {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BoardList);
//# sourceMappingURL=BoardList.js.map