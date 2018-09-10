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

/*::
export type ModalAction =
  | $Call<typeof showModal, string, {}>
*/

var actions = {
  showModal: showModal
};

exports.default = actions;
//# sourceMappingURL=actions.js.map