"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../note/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var reducer = function reducer(state, action) {
  if (state === void 0) {
    state = _initialState["default"].noteLabels;
  }

  switch (action.type) {
    case _actions.ACTION.EDIT_NOTE_LABELS:
      {
        var newLabels = action.newLabels;
        newLabels.forEach(function (item) {
          state[item.id] = item;
        });
        return (0, _extends2["default"])({}, state);
      }

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map