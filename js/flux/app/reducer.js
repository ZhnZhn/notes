"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setUiTheme = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _actions = require("../board/actions");
var _initialState = _interopRequireDefault(require("../initialState"));
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'DARK'
};
*/

const appSlice = (0, _toolkit.createSlice)({
  name: "app",
  initialState: _initialState.default.app,
  reducers: {
    setUiTheme(state, action) {
      const {
        uiTheme
      } = action.payload;
      state.uiTheme = uiTheme;
    }
  },
  extraReducers: builder => builder.addCase(_actions.addBoard, (state, action) => {
    const {
      boardId
    } = action.payload;
    state.boardIds.push(boardId);
  }).addCase(_actions.removeBoard, (state, action) => {
    const {
      boardId
    } = action.payload;
    state.boardIds = state.boardIds.filter(id => id !== boardId);
  }).addCase(_actions.setCurrentBoard, (state, action) => {
    const {
      boardId
    } = action.payload;
    state.boardId = boardId;
  })
});
const {
  actions,
  reducer
} = appSlice;
const {
  setUiTheme
} = actions;
exports.setUiTheme = setUiTheme;
var _default = exports.default = reducer;
//# sourceMappingURL=reducer.js.map