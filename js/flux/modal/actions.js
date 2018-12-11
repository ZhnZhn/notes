'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNotif = exports.showSettings = exports.showDetails = exports.showModal = exports.ACTION = undefined;

var _modalRouter = require('../../component/dialogs/modalRouter');

var ACTION = exports.ACTION = {
  SHOW_MODAL: 'SHOW_MODAL'
};
var showModal = exports.showModal = function showModal(id /*: string */
, data /*: {} */
) {
  return {
    type: ACTION.SHOW_MODAL,
    id: id,
    data: data
  };
};

var showDetails = exports.showDetails = showModal.bind(null, _modalRouter.MD.DETAILS);
var showSettings = exports.showSettings = showModal.bind(null, _modalRouter.MD.SETTINGS);
var showNotif = exports.showNotif = showModal.bind(null, _modalRouter.MD.NOTIF);

/*::
export type ModalAction =
  | $Call<typeof showModal, string, {}>
  | $Call<typeof showDetails, {}>
*/

var actions = {
  showModal: showModal,
  showDetails: showDetails
};

exports.default = actions;
//# sourceMappingURL=actions.js.map