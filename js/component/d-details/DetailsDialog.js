"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));
var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));
var _TabPane = _interopRequireDefault(require("../zhn-tabpane/TabPane"));
var _Tab = _interopRequireDefault(require("../zhn-tabpane/Tab"));
var _TabDescr = _interopRequireDefault(require("./TabDescr"));
var _TabLabels = _interopRequireDefault(require("./TabLabels"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_DIALOG = 'md-details',
  S_CAPTION = {
    marginBottom: 0
  };
const _crCaption = note => {
  const {
      title = ''
    } = note,
    _title = title.substring(0, 12),
    _sufix = title.length > _title.length ? '...' : '';
  return `Details: ${_title}${_sufix}`;
};
const DetailsDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    dispatch,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog.default, {
    className: CL_DIALOG,
    captionStyle: S_CAPTION,
    caption: _crCaption(data),
    isShow: isShow,
    withoutClose: true,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane.default, {
      width: "100%",
      id: data.id,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Descr",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabDescr.default, {
          note: data,
          dispatch: dispatch,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Labels",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabLabels.default, {
          note: data,
          dispatch: dispatch,
          onClose: onClose
        })
      })]
    })
  });
});
var _default = exports.default = DetailsDialog;
//# sourceMappingURL=DetailsDialog.js.map