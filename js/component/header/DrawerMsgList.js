"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _selectors = require("../../flux/selectors");

var _reducer = require("../../flux/drawerMsg/reducer");

var _jsxRuntime = require("react/jsx-runtime");

var CL_UL = 'drawer__msg-ul',
    CL_LI = 'drawer__msg-li',
    CL_LI_BT = 'drawer__msg-bt';

var DrawerMsgList = function DrawerMsgList(_ref) {
  var items = _ref.items,
      removeDrawerMsg = _ref.removeDrawerMsg;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    className: CL_UL,
    children: items.map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: CL_LI,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: CL_LI_BT,
          onClick: function onClick() {
            return removeDrawerMsg({
              id: item.id
            });
          },
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
  removeDrawerMsg: _reducer.removeDrawerMsg
};

var _default = (0, _uiApi.connect)(mapStateToProps, mapDispatchToProps)(DrawerMsgList);

exports["default"] = _default;
//# sourceMappingURL=DrawerMsgList.js.map