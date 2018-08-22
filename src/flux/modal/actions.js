
export const ACTION = {
  SHOW_MODAL: 'SHOW_MODAL'
};

export const showModal = (id, data) => ({
  type: ACTION.SHOW_MODAL,
  id,
  data
});

const actions = {
  showModal
};

export default actions
