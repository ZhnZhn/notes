"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isKeyDelete = _interopRequireDefault(require("./isKeyDelete"));
var _jsxRuntime = require("react/jsx-runtime");
const InputTextArea = _ref => {
  let {
    refEl,
    className,
    style,
    initialValue,
    maxLength
  } = _ref;
  const _refInput = (0, _uiApi.useRef)(),
    [value, setValue] = (0, _uiApi.useState)(initialValue),
    _hChange = (0, _uiApi.useCallback)(evt => {
      setValue(evt.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if ((0, _isKeyDelete.default)(evt)) {
        setValue('');
      }
    }, []);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
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
    className: className,
    style: style,
    value: value,
    maxLength: maxLength,
    onChange: _hChange,
    onKeyDown: _hKeyDown
  });
};
var _default = exports.default = InputTextArea;
//# sourceMappingURL=InputTextArea.js.map