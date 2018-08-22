'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ROOT = "bt-svg-close";

var SvgClose = function SvgClose(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      style = _ref.style,
      tabIndex = _ref.tabIndex,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'button',
    {
      tabIndex: tabIndex,
      className: CL_ROOT + ' ' + className,
      style: style,
      onClick: onClose
    },
    _react2.default.createElement(
      'svg',
      {
        viewBox: '0 0 12 12', width: '100%', height: '100%',
        preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement('path', { d: 'M 0,0 L 12,12' }),
      _react2.default.createElement('path', { d: 'M 12,0 L 0,12' })
    )
  );
};

exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map