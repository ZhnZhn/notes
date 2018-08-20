
export const ACTION = {
  SAVE_BOARD: 'SAVE_BOARD',
  CLEAN_STORAGE: 'CLEAN_STORAGE'
};

export const saveBoard = () => ({
  type: ACTION.SAVE_BOARD
});

export const cleanStorage = () => ({
  type: ACTION.CLEAN_STORAGE
});

const actions = {
  saveBoard,
  cleanStorage
};

export default actions
