"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _reducer = require("../../flux/app/reducer");

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = 'md-settings';
var _themeOptions = [{
  caption: "Dark",
  value: "DARK"
}, {
  caption: "Light",
  value: "WHITE"
}, {
  caption: "Sand",
  value: "SAND"
}],
    DF_THEME = _themeOptions[0];
var SettingsDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      dispatch = _ref.dispatch,
      onClose = _ref.onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _selectTheme = (0, _uiApi.useCallback)(function (_ref2) {
    var value = _ref2.value;
    dispatch((0, _reducer.setUiTheme)({
      uiTheme: value
    }));
  }, []) // dispatch

  /*eslint-enable react-hooks/exhaustive-deps */
  ,
      TS = (0, _useTheme["default"])(_Dialog["default"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    isShow: isShow,
    className: CL,
    style: TS.DIALOG,
    caption: "User Settings",
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect["default"], {
      styleConfig: TS.SELECT,
      caption: "UI Theme (Default: Dark)",
      initialItem: DF_THEME,
      options: _themeOptions,
      onSelect: _selectTheme
    })
  });
});
var _default = SettingsDialog;
exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map