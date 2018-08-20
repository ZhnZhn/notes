'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cl = require('../style/cl');

var _cl2 = _interopRequireDefault(_cl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'section',
    { className: _cl2.default.ITEM_CARD },
    children
  );
};

exports.default = Item;
//# sourceMappingURL=Item.js.map