'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Header = require('../style/Header.Style');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var className = props.className,
      style = props.style,
      theme = props.theme,
      children = props.children,
      TS = theme.createStyle(_Header2.default);

  return _react2.default.createElement(
    'header',
    {
      className: className,
      style: (0, _extends3.default)({}, style, TS.HEADER)
    },
    children
  );
};

exports.default = (0, _withTheme2.default)(Header);
//# sourceMappingURL=Header.js.map