"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    className: CL.UL,
    children: items.map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: CL.LI,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: CL.LI_BT,
          onClick: removeDrawerMsg.bind(null, item.id),
          children: item.msg
        })
      }, item.id);
    })
  });
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