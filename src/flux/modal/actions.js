// @flow

export const ACTION = {
  SHOW_MODAL: 'SHOW_MODAL'
};

export const showModal = (
  id /*: string */,
  data /*: {} */
) => ({
  type: ACTION.SHOW_MODAL,
  id,
  data
});

const showDetails = showModal.bind(null, 'DETAILS')

/*::
export type ModalAction =
  | $Call<typeof showModal, string, {}>
  | $Call<typeof showDetails, {}>
*/

const actions = {
  showModal,
  showDetails
};

export default actions
