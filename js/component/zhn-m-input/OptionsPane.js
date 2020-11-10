"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));

var _ShowHide = _interopRequireDefault(require("../zhn-ch/ShowHide"));

var S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    lineHeight: 1.8,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    lineHeight: 2.2,
    paddingLeft: 12
  },
  ITEM_CURRENT: {
    color: 'greenyellow'
  }
};

var _fOnKeyPress = function _fOnKeyPress(onKeyPress) {
  return function (evt) {
    if (evt.which === 13) {
      onKeyPress(evt);
    }
  };
};

var _renderOptions = function _renderOptions(options, currentItem, clItem, onSelect, isShow) {
  return options.map(function (item) {
    var _style = item.value === currentItem.value ? (0, _extends2["default"])({}, S.ITEM, S.ITEM_CURRENT) : S.ITEM,
        _onSelect = onSelect.bind(null, item),
        _onKeyPress = _fOnKeyPress(_onSelect);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      role: "button",
      tabIndex: "0",
      style: _style,
      className: clItem,
      onClick: _onSelect,
      onKeyPress: _onKeyPress,
      children: item.caption
    }, item.value);
  });
};

var OptionsPane = function OptionsPane(_ref) {
  var isShow = _ref.isShow,
      options = _ref.options,
      item = _ref.item,
      rootStyle = _ref.rootStyle,
      clItem = _ref.clItem,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    style: rootStyle,
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShow,
      style: (0, _extends2["default"])({}, S.PANE, rootStyle),
      children: _renderOptions(options, item, clItem, onSelect, isShow)
    })
  });
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map