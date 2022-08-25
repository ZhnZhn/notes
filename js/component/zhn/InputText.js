"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _CL = require("../style/CL");

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var _isKeyDelete = _interopRequireDefault(require("./isKeyDelete"));

var _jsxRuntime = require("react/jsx-runtime");

var InputText = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      initialValue = _ref.initialValue,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 40 : _ref$maxLength,
      onBlur = _ref.onBlur;

  var _useState = (0, _uiApi.useState)(initialValue),
      value = _useState[0],
      _setValue = _useState[1],
      _hChange = (0, _uiApi.useCallback)(function (evt) {
    var value = evt.target.value;

    if (value.length <= maxLength) {
      _setValue(value);
    }
  }, [maxLength]),
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    if ((0, _isKeyEnter["default"])(evt)) {
      var el = document.activeElement;

      if (el && typeof el.blur === 'function') {
        el.blur();
      }
    } else if ((0, _isKeyDelete["default"])(evt)) {
      _setValue('');
    }
  }, []);

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      setValue: function setValue(nextValue) {
        if (nextValue.length <= maxLength) {
          _setValue(nextValue);
        }
      }
    };
  }, [maxLength]);

  var _className = (0, _crCn["default"])(_CL.CL_INPUT, className);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "text",
    className: _className,
    style: style,
    value: value,
    onChange: _hChange,
    onBlur: onBlur,
    onKeyDown: _hKeyDown
  });
});
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map