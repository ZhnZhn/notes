'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var showDetails = showModal.bind(null, 'DETAILS');

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