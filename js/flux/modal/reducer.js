"use strict";

exports.__esModule = true;
exports["default"] = exports.showNotif = exports.showSettings = exports.showDetails = exports.initialState = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _modalRouter = require("../../component/dialogs/modalRouter");

var initialState = {
  id: null,
  data: null
};
exports.initialState = initialState;
var modalSlice = (0, _toolkit.createSlice)({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showModal: function showModal(state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          data = _action$payload.data;
      return {
        id: id,
        data: data
      };
    }
  }
});
var actions = modalSlice.actions,
    reducer = modalSlice.reducer;
var showModal = actions.showModal;

var showDetails = function showDetails(data) {
  return showModal({
    id: _modalRouter.MD.DETAILS,
    data: data
  });
};

exports.showDetails = showDetails;

var showSettings = function showSettings() {
  return showModal({
    id: _modalRouter.MD.SETTINGS
  });
};

exports.showSettings = showSettings;

var showNotif = function showNotif(data) {
  return showModal({
    id: _modalRouter.MD.NOTIF,
    data: data
  });
};

exports.showNotif = showNotif;
var _default = reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.js.map