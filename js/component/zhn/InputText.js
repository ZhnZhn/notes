"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _CL = require("../style/CL");
var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));
var _isKeyDelete = _interopRequireDefault(require("./isKeyDelete"));
var _jsxRuntime = require("react/jsx-runtime");
const InputText = _ref => {
  let {
    refEl,
    className,
    style,
    initialValue,
    maxLength = 40,
    onBlur
  } = _ref;
  const [value, setValue] = (0, _uiApi.useState)(initialValue),
    _hChange = (0, _uiApi.useCallback)(evt => {
      const {
        value
      } = evt.target;
      if (value.length <= maxLength) {
        setValue(value);
      }
    }, [maxLength]),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if ((0, _isKeyEnter.default)(evt)) {
        const el = document.activeElement;
        if (el && typeof el.blur === 'function') {
          el.blur();
        }
      } else if ((0, _isKeyDelete.default)(evt)) {
        setValue('');
      }
    }, []);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    setValue: nextValue => {
      if (nextValue.length <= maxLength) {
        setValue(nextValue);
      }
    }
  }), [maxLength]);
  const _className = (0, _crCn.default)(_CL.CL_INPUT, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "text",
    className: _className,
    style: style,
    value: value,
    onChange: _hChange,
    onBlur: onBlur,
    onKeyDown: _hKeyDown
  });
};
var _default = exports.default = InputText;
//# sourceMappingURL=InputText.js.map