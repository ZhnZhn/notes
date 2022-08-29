"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.removeDrawerMsg = exports["default"] = exports.addDrawerMsg = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _initialState = _interopRequireDefault(require("../initialState"));

var _fns = _interopRequireDefault(require("./fns"));

var crMsg = _fns["default"].crMsg;
var drawerSlice = (0, _toolkit.createSlice)({
  name: "drawerMsg",
  initialState: _initialState["default"].drawerMsg,
  reducers: {
    addDrawerMsg: function addDrawerMsg(state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          msg = _action$payload.msg;
      state.unshift(crMsg(id, msg));
    },
    removeDrawerMsg: function removeDrawerMsg(state, action) {
      var id = action.payload.id;
      return state.filter(function (item) {
        return item.id !== id;
      });
    }
  }
});
var actions = drawerSlice.actions,
    reducer = drawerSlice.reducer;
var addDrawerMsg = actions.addDrawerMsg,
    removeDrawerMsg = actions.removeDrawerMsg;
exports.removeDrawerMsg = removeDrawerMsg;
exports.addDrawerMsg = addDrawerMsg;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map