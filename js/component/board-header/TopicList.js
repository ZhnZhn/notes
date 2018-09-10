'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TopicItem = require('./TopicItem');

var _TopicItem2 = _interopRequireDefault(_TopicItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      columnIds = _board$columnIds === undefined ? [] : _board$columnIds;

  return columnIds.map(function (cId) {
    return _react2.default.createElement(_TopicItem2.default, {
      key: cId,
      topic: columns[cId],
      onClick: toggleColumn.bind(null, cId)
    });
  });
};

var TopicList = function TopicList(props) {
  return _react2.default.createElement(
    'ul',
    { style: S.UL },
    _renderTopics(props)
  );
};

TopicList.defaultProps = {
  toggleColumn: function toggleColumn() {}
};

exports.default = TopicList;
//# sourceMappingURL=TopicList.js.map