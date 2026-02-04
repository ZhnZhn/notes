"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _DialogCaption = _interopRequireDefault(require("./DialogCaption"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
//import { PropTypes } from 'prop-types'

const S_SHOW = {
    display: 'block'
  },
  S_HIDE = {
    display: 'none'
  };
const DialogButtons = _ref => {
  let {
    buttons,
    refBtClose,
    withoutClose,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_MD_ACTIONS,
    children: [buttons, !withoutClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      refEl: refBtClose,
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })]
  });
};
const useFocusBtClose = (isShow, isFocusClose) => {
  const _refBt = (0, _uiApi.useRef)(),
    _refPrevFocused = (0, _uiApi.useRef)(),
    _refIsShowPrev = (0, _uiApi.useRef)(),
    focus = (0, _uiApi.useCallback)(() => {
      _refPrevFocused.current = document.activeElement;
      if (isFocusClose) {
        (0, _uiApi.focusRefElement)(_refBt);
      }
    }, [isFocusClose]),
    focusPrev = (0, _uiApi.useCallback)(() => {
      (0, _uiApi.focusRefElement)(_refPrevFocused);
      _refPrevFocused.current = null;
    }, []);
  (0, _uiApi.useEffect)(() => {
    const _isPrevShow = (0, _uiApi.getRefValue)(_refIsShowPrev);
    if (isShow && !_isPrevShow) {
      focus();
    } else if (!isShow && _isPrevShow) {
      focusPrev();
    }
    _refIsShowPrev.current = isShow;
  }, [isShow, focus, focusPrev]);
  return _refBt;
};
const ModalDialog = _ref2 => {
  let {
    className = '',
    style,
    isShow,
    isWithButton = true,
    isFocusClose = true,
    caption,
    captionStyle,
    children,
    commandButtons,
    withoutClose,
    onClose
  } = _ref2;
  const _refBtClose = useFocusBtClose(isShow, isFocusClose),
    _hClickDialog = (0, _uiApi.useCallback)(evt => {
      evt.stopPropagation();
    }, []),
    _hKeyDown = (0, _useKeyEscape.default)(onClose),
    _className = (0, _crCn.default)(`${_CL.CL_MODAL_DIALOG} ${className}`, [isShow, _CL.CL_SHOWING]),
    _style = isShow ? S_SHOW : S_HIDE;
  return /*#__PURE__*/ /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/(0, _jsxRuntime.jsxs)("div", {
    role: "dialog",
    "aria-label": caption,
    "aria-hidden": !isShow,
    className: _className,
    style: {
      ...style,
      ..._style
    },
    onClick: _hClickDialog,
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCaption.default, {
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
  });
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
var _default = exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map