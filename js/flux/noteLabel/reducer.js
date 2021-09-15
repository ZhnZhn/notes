"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _actions = require("../note/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

var noteLabelsSlice = (0, _toolkit.createSlice)({
  name: "noteLabels",
  initialState: _initialState["default"].noteLabels,
  extraReducers: function extraReducers(builder) {
    return builder.addCase(_actions.editNoteLabels, function (state, action) {
      var newLabels = action.payload.newLabels;
      newLabels.forEach(function (item) {
        state[item.id] = item;
      });
    });
  }
});
var reducer = noteLabelsSlice.reducer;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map