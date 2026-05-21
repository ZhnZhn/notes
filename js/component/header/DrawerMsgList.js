"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _selectors = require("../../flux/selectors");
var _reducer = require("../../flux/drawerMsg/reducer");
var _jsxRuntime = require("react/jsx-runtime");
const CL_UL = 'drawer__msg-ul',
  CL_LI = 'drawer__msg-li',
  CL_LI_BT = 'drawer__msg-bt';
const DrawerMsgList = () => {
  const items = (0, _uiApi.useSelector)(_selectors.selectDrawerItems),
    dispatch = (0, _uiApi.useDispatch)(),
    _hRemoveMsg = id => {
      dispatch((0, _reducer.removeDrawerMsg)({
        id
      }));
    };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    className: CL_UL,
    children: items.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
      className: CL_LI,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: CL_LI_BT,
        onClick: () => _hRemoveMsg(item.id),
        children: item.msg
      })
    }, item.id))
  });
};
var _default = exports.default = DrawerMsgList;
//# sourceMappingURL=DrawerMsgList.js.map