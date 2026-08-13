"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _CL = require("../style/CL");
var _fUseKey = require("../hooks/fUseKey");
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
      if ((0, _fUseKey.isEventKeyEnter)(evt)) {
        const el = document.activeElement;
        if (el && (0, _isTypeFn.isFn)(el.blur)) {
          el.blur();
        }
      } else if ((0, _fUseKey.isEventKeyDelete)(evt)) {
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
  const _className = (0, _styleFn.crCn)(_CL.CL_INPUT, className);
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