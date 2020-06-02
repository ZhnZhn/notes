"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopicItem = _interopRequireDefault(require("./TopicItem"));

var S = {
  UL: {
    listStyleType: 'none'
  }
};

var _renderTopics = function _renderTopics(_ref) {
  var board = _ref.board,
      columns = _ref.columns,
      toggleColumn = _ref.toggleColumn;
  var _board$columnIds = board.columnIds,
      columnIds = _board$columnIds === void 0 ? [] : _board$columnIds;
  return columnIds.map(function (cId) {
    return /*#__PURE__*/_react["default"].createElement(_TopicItem["default"], {
      key: cId,
      topic: columns[cId],
      onClick: toggleColumn.bind(null, cId)
    });
  });
};

var TopicList = function TopicList(props) {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    style: S.UL
  }, _renderTopics(props));
};

TopicList.defaultProps = {
  toggleColumn: function toggleColumn() {}
};
var _default = TopicList;
exports["default"] = _default;
//# sourceMappingURL=TopicList.js.map