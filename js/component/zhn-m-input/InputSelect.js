"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _CL = require("./CL");

var _jsxRuntime = require("react/jsx-runtime");

var DF_INITIAL_ITEM = {
  caption: '',
  value: ''
},
    DF_TS = {};

var InputSelect = function InputSelect(_ref) {
  var initialItem = _ref.initialItem,
      caption = _ref.caption,
      options = _ref.options,
      _ref$styleConfig = _ref.styleConfig,
      TS = _ref$styleConfig === void 0 ? DF_TS : _ref$styleConfig,
      onSelect = _ref.onSelect;

  var _useBool = (0, _useBool2["default"])(),
      isShow = _useBool[0],
      _hOpen = _useBool[1],
      _hClose = _useBool[2],
      _useState = (0, _uiApi.useState)(initialItem || DF_INITIAL_ITEM),
      item = _useState[0],
      setItem = _useState[1],
      _hSelect = (0, _uiApi.useCallback)(function (item, event) {
    event.stopPropagation();
    onSelect(item);

    _hClose();

    setItem(item);
  }, [onSelect, _hClose]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: _CL.CL_SELECT,
    style: TS.ROOT,
    onClick: _hOpen,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane["default"], {
      style: TS.MODAL_PANE,
      isShow: isShow,
      item: item,
      options: options,
      clItem: TS.CL_ITEM,
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
        className: _CL.CL_DIV_BT,
        tabIndex: "0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _CL.CL_INPUT_LINE
      })]
    })]
  });
};

var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map