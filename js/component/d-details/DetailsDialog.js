"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-tab/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-tab/Tab"));

var _TabDescr = _interopRequireDefault(require("./TabDescr"));

var _TabLabels = _interopRequireDefault(require("./TabLabels"));

var CL = {
  DIALOG: 'md-details'
};
var S = {
  CAPTION: {
    marginBottom: 0
  }
};

var _crCaption = function _crCaption(note) {
  var _note$title = note.title,
      title = _note$title === void 0 ? '' : _note$title,
      _title = title.substring(0, 12),
      _sufix = title.length > _title.length ? '...' : '';

  return "Details: " + _title + _sufix;
};

var DetailsDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DetailsDialog, _Component);

  function DetailsDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DetailsDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        theme = _this$props.theme,
        data = _this$props.data,
        dispatch = _this$props.dispatch,
        onClose = _this$props.onClose,
        _caption = _crCaption(data),
        TS = theme.createStyle(_Dialog["default"]);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
      className: CL.DIALOG,
      style: TS.DIALOG,
      captionStyle: S.CAPTION,
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
  };

  return DetailsDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(DetailsDialog);

exports["default"] = _default;
//# sourceMappingURL=DetailsDialog.js.map