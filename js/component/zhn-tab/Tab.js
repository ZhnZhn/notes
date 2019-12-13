"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
  return isSelected ? CL.TAB + " " + CL.SELECTED : CL.TAB;
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _cl = _crClass(isSelected),
      _onClick = _crOnClick(isSelected, onClick),
      _onKeyDown = _crOnKeyDown(isSelected, onClick);

  return _react["default"].createElement("li", {
    role: "tab",
    tabIndex: 0,
    className: _cl,
    onClick: _onClick,
    onKeyDown: _onKeyDown
  }, _react["default"].createElement("span", null, title));
};

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map