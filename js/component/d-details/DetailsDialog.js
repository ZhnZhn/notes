"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-tab/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-tab/Tab"));

var _TabDescr = _interopRequireDefault(require("./TabDescr"));

var _TabLabels = _interopRequireDefault(require("./TabLabels"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DIALOG = 'md-details',
    S_CAPTION = {
  marginBottom: 0
};

var _crCaption = function _crCaption(note) {
  var _note$title = note.title,
      title = _note$title === void 0 ? '' : _note$title,
      _title = title.substring(0, 12),
      _sufix = title.length > _title.length ? '...' : '';

  return "Details: " + _title + _sufix;
};

var DetailsDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      dispatch = _ref.dispatch,
      onClose = _ref.onClose;

  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      _caption = _crCaption(data);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    className: CL_DIALOG,
    style: TS.DIALOG,
    captionStyle: S_CAPTION,
    caption: _caption,
    isShow: isShow,
    withoutClose: true,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane["default"], {
      width: "100%",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Descr",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabDescr["default"], {
          note: data,
          dispatch: dispatch,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Labels",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabLabels["default"], {
          note: data,
          dispatch: dispatch,
          onClose: onClose
        })
      })]
    }, data.id)
  });
});
var _default = DetailsDialog;
exports["default"] = _default;
//# sourceMappingURL=DetailsDialog.js.map