"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("./actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var _fns = _interopRequireDefault(require("./fns"));

var crMsg = _fns["default"].crMsg,
    filterByProp = _fns["default"].filterByProp;

var reducer = function reducer(state
/*: DrawerMsgState */
, action
/*: DrawerAction */
)
/*: DrawerMsgState */
{
  if (state
  /*: DrawerMsgState */
  === void 0) {
    state
    /*: DrawerMsgState */
    = _initialState["default"].drawerMsg;
  }

  switch (action.type) {
    case _actions.ACTION.ADD_DRAWER_MSG:
      {
        var id = action.id,
            msg = action.msg;
        return [crMsg(id, msg)].concat(state);
      }

    case _actions.ACTION.REMOVE_DRAWER_MSG:
      {
        var _id = action.id;
        return filterByProp(state, _id);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map