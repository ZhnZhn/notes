'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  TAB: 'tab not-selected',
  SELECTED: 'tab--selected'
};

var K = {
  BLANK: '',
  BLANK_CODE: 32
};

var _isKeyBlank = function _isKeyBlank(evt) {
  return evt.key === K.BLANK || evt.keyCode === K.BLANK_CODE;
};

var _crOnKeyDown = function _crOnKeyDown(isSelected, onClick) {
  return function (evt) {
    if (_isKeyBlank(evt) && !isSelected) {
      onClick();
    }
  };
};
var _crOnClick = function _crOnClick(isSelected, onClick) {
  return function () {
    if (!isSelected) {
      onClick();
    }
  };
};
var _crClass = function _crClass(isSelected) {
  return isSelected ? CL.TAB + ' ' + CL.SELECTED : CL.TAB;
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _cl = _crClass(isSelected),
      _onClick = _crOnClick(isSelected, onClick),
      _onKeyDown = _crOnKeyDown(isSelected, onClick);

  return _react2.default.createElement(
    'li',
    {
      role: 'tab',
      tabIndex: 0,
      className: _cl,
      onClick: _onClick,
      onKeyDown: _onKeyDown
    },
    _react2.default.createElement(
      'span',
      null,
      title
    )
  );
};

exports.default = Tab;
//# sourceMappingURL=Tab.js.map