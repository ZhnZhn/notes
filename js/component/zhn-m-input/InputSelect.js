"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const DF_INITIAL_ITEM = {
  caption: '',
  value: ''
};
const InputSelect = _ref => {
  let {
    initialItem,
    caption,
    options,
    onSelect
  } = _ref;
  const [isShow, _hOpen, _hClose] = (0, _useBool.default)(),
    [item, setItem] = (0, _uiApi.useState)(initialItem || DF_INITIAL_ITEM),
    _hSelect = (0, _uiApi.useCallback)((item, event) => {
      event.stopPropagation();
      onSelect(item);
      _hClose();
      setItem(item);
    }, [onSelect, _hClose]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: _CL.CL_SELECT,
    onClick: _hOpen,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane.default, {
      isShow: isShow,
      item: item,
      options: options,
      onSelect: _hSelect,
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: _CL.CL_LABEL,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _CL.CL_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _CL.CL_DIV_VALUE,
        children: item.caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: _CL.CL_DIV_BT,
        tabIndex: "0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _CL.CL_INPUT_LINE
      })]
    })]
  });
};
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map