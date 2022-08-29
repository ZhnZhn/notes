"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _isKeyDelete = _interopRequireDefault(require("./isKeyDelete"));

var _jsxRuntime = require("react/jsx-runtime");

var InputTextArea = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      initialValue = _ref.initialValue,
      maxLength = _ref.maxLength;

  var _refInput = (0, _uiApi.useRef)(),
      _useState = (0, _uiApi.useState)(initialValue),
      value = _useState[0],
      setValue = _useState[1],
      _hChange = (0, _uiApi.useCallback)(function (evt) {
    setValue(evt.target.value);
  }, []),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    if ((0, _isKeyDelete["default"])(evt)) {
      setValue('');
    }
  });

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        return value;
      },
      focus: function focus() {
        var _input = (0, _uiApi.getRefValue)(_refInput);

        if (_input) {
          _input.focus();
        }
      }
    };
  }, [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
    ref: _refInput,
    className: className,
    style: style,
    value: value,
    maxLength: maxLength,
    onChange: _hChange,
    onKeyDown: _hKeyDown
  });
});
var _default = InputTextArea;
exports["default"] = _default;
//# sourceMappingURL=InputTextArea.js.map