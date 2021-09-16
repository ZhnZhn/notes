"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.setUiTheme = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _actions = require("../board/actions");

var _initialState = _interopRequireDefault(require("../initialState"));

/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'GREY'
};
*/
var appSlice = (0, _toolkit.createSlice)({
  name: "app",
  initialState: _initialState["default"].app,
  reducers: {
    setUiTheme: function setUiTheme(state, action) {
      var uiTheme = action.payload.uiTheme;
      state.uiTheme = uiTheme;
    }
  },
  extraReducers: function extraReducers(builder) {
    return builder.addCase(_actions.addBoard, function (state, action) {
      var boardId = action.payload.boardId;
      state.boardIds.push(boardId);
    }).addCase(_actions.removeBoard, function (state, action) {
      var boardId = action.payload.boardId;
      state.boardIds = state.boardIds.filter(function (id) {
        return id !== boardId;
      });
    }).addCase(_actions.setCurrentBoard, function (state, action) {
      var boardId = action.payload.boardId;
      state.boardId = boardId;
    });
  }
});
var actions = appSlice.actions,
    reducer = appSlice.reducer;
var setUiTheme = actions.setUiTheme;
exports.setUiTheme = setUiTheme;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map