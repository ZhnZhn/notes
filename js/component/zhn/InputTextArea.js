"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _fUseKey = require("../hooks/fUseKey");
var _jsxRuntime = require("react/jsx-runtime");
const InputTextArea = props => {
  const _refInput = (0, _uiApi.useRef)(),
    [value, setValue] = (0, _uiApi.useState)(props.initialValue),
    _hChange = (0, _uiApi.useCallback)(evt => {
      setValue(evt.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if ((0, _fUseKey.isEventKeyDelete)(evt)) {
        setValue('');
      }
    }, []);
  (0, _uiApi.useImperativeHandle)(props.refEl, () => ({
    getValue: () => value,
    focus: () => {
      const _input = (0, _uiApi.getRefValue)(_refInput);
      if (_input) {
        _input.focus();
      }
    }
  }), [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
    ref: _refInput,
    className: props.className,
    style: props.style,
    value: value,
    maxLength: props.maxLength,
    onChange: _hChange,
    onKeyDown: _hKeyDown
  });
};
var _default = exports.default = InputTextArea;
//# sourceMappingURL=InputTextArea.js.map