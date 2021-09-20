"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_TAB = 'tab not-selected',
    CL_SELECTED = 'tab--selected';
var K_BLANK = '',
    K_BLANK_CODE = 32;

var _isKeyBlank = function _isKeyBlank(evt) {
  return evt.key === K_BLANK || evt.keyCode === K_BLANK_CODE;
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _cl = (0, _crCn["default"])(CL_TAB, [isSelected, CL_SELECTED]),
      _onClick = function _onClick() {
    if (!isSelected) {
      onClick();
    }
  },
      _onKeyDown = function _onKeyDown(evt) {
    if (_isKeyBlank(evt)) {
      _onClick();
    }
  };

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