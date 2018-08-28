
export const ACTION = {
  SAVE_BOARD: 'SAVE_BOARD',
  CLEAN_STORAGE: 'CLEAN_STORAGE',
  SET_UI_THEME: 'SET_UI_THEME'
};

export const saveBoard = () => ({
  type: ACTION.SAVE_BOARD
});

export const cleanStorage = () => ({
  type: ACTION.CLEAN_STORAGE
});

export const setUiTheme = (uiTheme) => ({
  type: ACTION.SET_UI_THEME,
  uiTheme
});

const actions = {
  saveBoard,
  cleanStorage,
  setUiTheme
};

export default actions
