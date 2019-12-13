"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ModalPane = _interopRequireDefault(require("../zhn-ch/ModalPane"));

var _ShowHide = _interopRequireDefault(require("../zhn-ch/ShowHide"));

var S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
    width: '100%',
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    lineHeight: 1.8,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
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
    var _style = item.value === currentItem.value ? S.ITEM : undefined,
        _onSelect = onSelect.bind(null, item),
        _onKeyPress = _fOnKeyPress(_onSelect);

    return _react["default"].createElement("div", {
      role: "button",
      tabIndex: "0",
      key: item.value,
      style: _style,
      className: clItem,
      onClick: _onSelect,
      onKeyPress: _onKeyPress
    }, item.caption);
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
  return _react["default"].createElement(_ModalPane["default"], {
    style: rootStyle,
    isShow: isShow,
    onClose: onClose
  }, _react["default"].createElement(_ShowHide["default"], {
    isShow: isShow,
    style: (0, _extends2["default"])({}, S.PANE, {}, rootStyle)
  }, _renderOptions(options, item, clItem, onSelect, isShow)));
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map