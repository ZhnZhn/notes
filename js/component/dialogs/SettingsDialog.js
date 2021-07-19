"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _actions = require("../../flux/app/actions");

var _selectors = require("../../flux/selectors");

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = 'md-settings';
var DF_THEME = {
  caption: "Dark",
  value: "DARK"
};
var _themeOptions = [{
  caption: "Dark",
  value: "DARK"
}, {
  caption: "Light",
  value: "WHITE"
}, {
  caption: "Sand",
  value: "SAND"
}];

var _crInitItem = function _crInitItem(uiTheme) {
  if (!uiTheme) {
    return DF_THEME;
  }

  var item = _themeOptions.find(function (item) {
    return item.value === uiTheme;
  });

  if (!item) {
    return DF_THEME;
  }

  return (0, _extends2["default"])({}, item);
};

var SettingsDialog = function SettingsDialog(_ref) {
  var isShow = _ref.isShow,
      store = _ref.store,
      dispatch = _ref.dispatch,
      onClose = _ref.onClose;

  var _useState = (0, _react.useState)(function () {
    return _crInitItem(_selectors.sApp.uiTheme(store.getState()));
  }),
      initItem = _useState[0],
      setInitItem = _useState[1],
      TS = (0, _useTheme["default"])(_Dialog["default"]),
      _selectTheme = (0, _react.useCallback)(function (_ref2) {
    var value = _ref2.value;

    if (value !== initItem) {
      dispatch((0, _actions.setUiTheme)(value));
      setInitItem(value);
    }
  }, []);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    className: CL,
    style: TS.DIALOG,
    caption: "User Settings",
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        styleConfig: TS.SELECT,
        caption: "UI Theme (Default: Dark)",
        initItem: initItem,
        options: _themeOptions,
        onSelect: _selectTheme
      })
    })
  });
};

var _areEqualProps = function _areEqualProps(prevProps, nextProps) {
  return prevProps.isShow === nextProps.isShow;
};

var _default = /*#__PURE__*/(0, _react.memo)(SettingsDialog, _areEqualProps);

exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map