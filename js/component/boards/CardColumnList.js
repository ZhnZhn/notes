'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "card__column-list";

var CardColumList = function CardColumList(_ref) {
  var columnIds = _ref.columnIds,
      columns = _ref.columns;

  if (columnIds.length === 0) {
    return null;
  }
  return _react2.default.createElement(
    'ul',
    { className: CL },
    columnIds.map(function (id) {
      return _react2.default.createElement(
        'li',
        { key: id },
        _react2.default.createElement(
          'span',
          null,
          columns[id].title
        ),
        _react2.default.createElement(_Card2.default.Counter, {
          value: columns[id].noteIds.length
        })
      );
    })
  );
};

exports.default = CardColumList;
//# sourceMappingURL=CardColumnList.js.map