"use strict";

exports.__esModule = true;
exports.showSettings = exports.showNotif = exports.showDetails = exports.initialState = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _modalRouter = require("../../component/dialogs/modalRouter");
const initialState = exports.initialState = {
  id: null,
  data: null
};
const modalSlice = (0, _toolkit.createSlice)({
  name: 'modal',
  initialState,
  reducers: {
    showModal(_state, action) {
      const {
        id,
        data
      } = action.payload;
      return {
        id,
        data
      };
    }
  }
});
const {
  actions,
  reducer
} = modalSlice;
const {
  showModal
} = actions;
const showDetails = data => showModal({
  id: _modalRouter.MD.DETAILS,
  data
});
exports.showDetails = showDetails;
const showSettings = () => showModal({
  id: _modalRouter.MD.SETTINGS
});
exports.showSettings = showSettings;
const showNotif = data => showModal({
  id: _modalRouter.MD.NOTIF,
  data
});
exports.showNotif = showNotif;
var _default = exports.default = reducer;
//# sourceMappingURL=reducer.js.map