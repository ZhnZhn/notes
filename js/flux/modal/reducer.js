"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("./actions");

var _initialState = _interopRequireDefault(require("../initialState"));

/*
const initState = {
 id: null
 data: null
}
*/
var reducer = function reducer(state
/*: ModalState */
, action
/*: ModalAction */
)
/*: ModalState */
{
  if (state
  /*: ModalState */
  === void 0) {
    state
    /*: ModalState */
    = _initialState["default"].modal;
  }

  switch (action.type) {
    case _actions.ACTION.SHOW_MODAL:
      {
        var id = action.id,
            data = action.data;
        return (0, _extends2["default"])({}, state, {
          id: id,
          data: data
        });
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map