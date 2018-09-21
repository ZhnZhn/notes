'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    paddingBottom: 4
  },
  LABEL: {
    display: 'inline-block',
    color: 'white',
    fontWeight: 600,
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 4,
    paddingBottom: 2,
    marginRight: 4,
    marginBottom: 4,
    borderRadius: 2
  },
  CLOSE: {
    display: 'inline-block',
    color: '#1b2836',
    paddingLeft: 6,
    paddingRight: 4,
    fontWeight: 600
  }
};

var Label = function Label(_ref) {
  var item = _ref.item,
      onRemove = _ref.onRemove;
  return _react2.default.createElement(
    'button',
    {
      key: item.title,
      style: (0, _extends3.default)({}, S.LABEL, {
        backgroundColor: item.color
      }),
      onClick: onRemove
    },
    item.title,
    _react2.default.createElement(
      'span',
      { style: S.CLOSE },
      'x'
    )
  );
};

var DetailsLabelList = function DetailsLabelList(_ref2) {
  var labels = _ref2.labels,
      onRemove = _ref2.onRemove;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    labels.map(function (item) {
      return _react2.default.createElement(Label, {
        key: item.title,
        item: item,
        onRemove: onRemove.bind(null, item)
      });
    })
  );
};

exports.default = DetailsLabelList;
//# sourceMappingURL=DetailsLabelList.js.map