'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Item = require('../style/Item.Style');

var _Item2 = _interopRequireDefault(_Item);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
  var theme = props.theme,
      children = props.children,
      TS = theme.createStyle(_Item2.default);

  return _react2.default.createElement(
    'section',
    {
      className: _CL2.default.ITEM_CARD,
      style: TS.ITEM
    },
    children
  );
};

exports.default = (0, _withTheme2.default)(Item);
//# sourceMappingURL=Item.js.map