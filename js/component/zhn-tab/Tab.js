"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    role: "tab",
    tabIndex: 0,
    className: _cl,
    onClick: _onClick,
    onKeyDown: _onKeyDown,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: title
    })
  });
};

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map