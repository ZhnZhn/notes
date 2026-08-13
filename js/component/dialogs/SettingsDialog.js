"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _uiTheme = require("../uiTheme");
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _reducer = require("../../flux/app/reducer");
var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_MD_SETTINGS = 'md-settings';
const SettingsDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    dispatch,
    onClose
  } = _ref;
  /*eslint-disable react-hooks/exhaustive-deps */
  const _selectTheme = (0, _uiApi.useCallback)(_ref2 => {
    let {
      value
    } = _ref2;
    (0, _uiTheme.setUiTheme)(value);
    dispatch((0, _reducer.setUiTheme)({
      uiTheme: value
    }));
  }, []);
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog.default, {
    isShow: isShow,
    className: CL_MD_SETTINGS,
    caption: "User Settings",
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
      caption: "UI Theme (Default: Dark)",
      initialItem: _uiTheme.DF_UI_THEME_ITEM,
      options: _uiTheme.UI_THEME_OPTIONS,
      onSelect: _selectTheme
    })
  });
});
var _default = exports.default = SettingsDialog;
//# sourceMappingURL=SettingsDialog.js.map