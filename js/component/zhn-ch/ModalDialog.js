"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _DialogCaption = _interopRequireDefault(require("./DialogCaption"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _jsxRuntime = require("react/jsx-runtime");

//import { PropTypes } from 'react'
var CL_DIALOG = 'modal-dialog',
    CL_MD_ACTIONS = 'md__actions',
    CL_SHOWING = 'show-popup',
    S_SHOW = {
  display: 'block'
},
    S_HIDE = {
  display: 'none'
};

var DialogButtons = function DialogButtons(_ref) {
  var buttons = _ref.buttons,
      refBtClose = _ref.refBtClose,
      withoutClose = _ref.withoutClose,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_MD_ACTIONS,
    children: [buttons, !withoutClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      ref: refBtClose,
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })]
  });
};

var _useFocusBtClose = function _useFocusBtClose(isShow, isFocusClose) {
  var _refBt = (0, _uiApi.useRef)(),
      _refPrevFocused = (0, _uiApi.useRef)(),
      _refIsShowPrev = (0, _uiApi.useRef)(),
      focus = (0, _uiApi.useCallback)(function () {
    _refPrevFocused.current = document.activeElement;

    if (isFocusClose) {
      (0, _uiApi.focusRefElement)(_refBt);
    }
  }, [isFocusClose]),
      focusPrev = (0, _uiApi.useCallback)(function () {
    (0, _uiApi.focusRefElement)(_refPrevFocused);
    _refPrevFocused.current = null;
  }, []);

  (0, _uiApi.useEffect)(function () {
    var _isPrevShow = (0, _uiApi.getRefValue)(_refIsShowPrev);

    if (isShow && !_isPrevShow) {
      focus();
    } else if (!isShow && _isPrevShow) {
      focusPrev();
    }

    _refIsShowPrev.current = isShow;
  }, [isShow, focus, focusPrev]);
  return _refBt;
};

var ModalDialog = function ModalDialog(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      style = _ref2.style,
      isShow = _ref2.isShow,
      _ref2$isWithButton = _ref2.isWithButton,
      isWithButton = _ref2$isWithButton === void 0 ? true : _ref2$isWithButton,
      _ref2$isFocusClose = _ref2.isFocusClose,
      isFocusClose = _ref2$isFocusClose === void 0 ? true : _ref2$isFocusClose,
      caption = _ref2.caption,
      captionStyle = _ref2.captionStyle,
      children = _ref2.children,
      commandButtons = _ref2.commandButtons,
      withoutClose = _ref2.withoutClose,
      onClose = _ref2.onClose;

  var _refBtClose = _useFocusBtClose(isShow, isFocusClose),
      _hClickDialog = (0, _uiApi.useCallback)(function (event) {
    event.stopPropagation();
  }, []),
      _hKeyDown = (0, _useKeyEscape["default"])(onClose),
      _className = (0, _crCn["default"])(CL_DIALOG + " " + className, [isShow, CL_SHOWING]),
      _style = isShow ? S_SHOW : S_HIDE;

  return (
    /*#__PURE__*/

    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    (0, _jsxRuntime.jsxs)("div", {
      role: "dialog",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: (0, _extends2["default"])({}, style, _style),
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCaption["default"], {
        rootStyle: captionStyle,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), isWithButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogButtons, {
        buttons: commandButtons,
        refBtClose: _refBtClose,
        withoutClose: withoutClose,
        onClose: onClose
      })]
    })
  );
};
/*
ModalDialog.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  caption: PropTypes.string,
  captionStyle: PropTypes.object,
  isShow: PropTypes.bool,
  isWithButton: PropTypes.bool,
  withoutClose: PropTypes.bool,
  isFocusClose: PropTypes.bool,
  commandButtons: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func
}
*/


var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map