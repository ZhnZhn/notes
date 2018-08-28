'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL = 'show-popup';
var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(props) {
  var isShow = props.isShow,
      className = props.className,
      style = props.style,
      children = props.children,
      _styleShow = isShow ? S.SHOW : S.HIDE,
      _classShow = isShow ? CL : '',
      _className = className ? className + ' ' + _classShow : _classShow || undefined;

  return _react2.default.createElement(
    'div',
    {
      className: _className,
      style: (0, _extends3.default)({}, style, _styleShow)
    },
    children
  );
};

/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType[
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]
}
*/

exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map