"use strict";

exports.__esModule = true;
exports["default"] = exports.showNotif = exports.showSettings = exports.showDetails = exports.showModal = exports.ACTION = void 0;

var _modalRouter = require("../../component/dialogs/modalRouter");

var ACTION = {
  SHOW_MODAL: 'SHOW_MODAL'
};
exports.ACTION = ACTION;

var showModal = function showModal(id
/*: string */
, data
/*: {} */
) {
  return {
    type: ACTION.SHOW_MODAL,
    id: id,
    data: data
  };
};

exports.showModal = showModal;
var showDetails = showModal.bind(null, _modalRouter.MD.DETAILS);
exports.showDetails = showDetails;
var showSettings = showModal.bind(null, _modalRouter.MD.SETTINGS);
exports.showSettings = showSettings;
var showNotif = showModal.bind(null, _modalRouter.MD.NOTIF);
/*::
export type ModalAction =
  | $Call<typeof showModal, string, {}>
  | $Call<typeof showDetails, {}>
*/

exports.showNotif = showNotif;
var actions = {
  showModal: showModal,
  showDetails: showDetails
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map