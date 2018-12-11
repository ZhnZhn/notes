// @flow
import { MD } from '../../component/dialogs/modalRouter'

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

export const showDetails = showModal
 .bind(null, MD.DETAILS);
export const showSettings = showModal
 .bind(null, MD.SETTINGS);
 export const showNotif = showModal
  .bind(null, MD.NOTIF); 

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
