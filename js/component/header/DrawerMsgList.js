"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _selectors = require("../../flux/selectors");

var _actions = require("../../flux/drawerMsg/actions");

var CL = {
  UL: 'drawer__msg-ul',
  LI: 'drawer__msg-li',
  LI_BT: 'drawer__msg-bt'
};

var DrawerMsgList = function DrawerMsgList(_ref) {
  var items = _ref.items,
      removeDrawerMsg = _ref.removeDrawerMsg;
  return _react["default"].createElement("ul", {
    className: CL.UL
  }, items.map(function (item) {
    return _react["default"].createElement("li", {
      key: item.id,
      className: CL.LI
    }, _react["default"].createElement("button", {
      className: CL.LI_BT,
      onClick: removeDrawerMsg.bind(null, item.id)
    }, item.msg));
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    items: _selectors.sDrawer.msg(state)
  };
};

var mapDispatchToProps = {
  removeDrawerMsg: _actions.removeDrawerMsg
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DrawerMsgList);

exports["default"] = _default;
//# sourceMappingURL=DrawerMsgList.js.map