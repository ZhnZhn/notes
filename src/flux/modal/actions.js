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

/*::
export type ModalAction =
  | $Call<typeof showModal, string, {}>
*/

const actions = {
  showModal
};

export default actions
